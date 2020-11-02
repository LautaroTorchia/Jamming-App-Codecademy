let UserAccessToken="";
const RedirectURI= "http://localhost:3000/",
    ClientID="70c492f64213414fa5dac2c7304e6ae3"

const  Spotify = {
    getAccessToken(){
        if (UserAccessToken){
            return UserAccessToken
        }

        const accessTokenMatch= window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch= window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch){
            UserAccessToken= accessTokenMatch[1]
            const expiresIn=Number(expiresInMatch[1])
            window.setTimeout(() => UserAccessToken= '', expiresIn* 1000)
            window.history.pushState('Acess Token',null,'/')
            return UserAccessToken
        }else{
            const accesUrl=`https://accounts.spotify.com/authorize?client_id=${ClientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${RedirectURI}` 
            window.location= accesUrl;
        }
    },
    async search(term){
        const accessToken= Spotify.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: {Authorization: `Bearer ${accessToken}`},
        }).then(response =>{
            return response.json()
        }).then(jsonResponse => {
            if (!jsonResponse.tracks){
                return []
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name:track.name,
                album:track.album.name,
                artist:track.artists[0].name,
                uri:track.uri
            }))
        })
    },
    async savePlaylist(name,trackUris){
        if(!name || !trackUris) return;

        const accessToken = Spotify.getAccessToken();
        const headers={Authorization: `Bearer ${accessToken}`};
        let userID;

        return fetch("https://api.spotify.com/v1/me",{headers:headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userID = jsonResponse.id
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
                headers: headers, 
                method:'POST', 
                body:JSON.stringify( {name: name})}
            ).then(response => response.json()
            ).then(jsonResponse => {
                const playlistID= jsonResponse.id
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,{headers:headers,method:'POST',body:JSON.stringify({uris:trackUris})});
            })
        })
    }

}

export default Spotify;