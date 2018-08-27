
const api_key = 'c02c045e03317c30f956dea6d1afb00e';

function fetchByTag(tag){
    return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${tag}&format=json&nojsoncallback=1`).then(data=>data.json()).catch(e=>console.log(e));
}

export const searchPhotoService = {
    fetchByTag
};