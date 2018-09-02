import { flickrConstants } from '../constants'
import { searchPhotoService } from '../services'


export const flickrActions = {
    fetchByTag,
    clearImagesArray
}

function fetchByTag(tag) {
    return async dispatch => {
        
        try {
            dispatch({ type: flickrConstants.FETCH_BY_TAG_REQUEST })
            const json = await searchPhotoService.fetchByTag(tag)
            const images = json.photos.photo.slice(0, 10).map(toUrl)
            dispatch({ type: flickrConstants.FETCH_BY_TAG_SUCCESS, images })
        } catch (error) {
            dispatch({ type: flickrConstants.FETCH_BY_TAG_ERROR, error })
        }
    }
}

function clearImagesArray() {
    return { type: flickrConstants.CLEAR_IMAGES_ARRAY }
}

function toUrl(data) {
    return `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`;
}
