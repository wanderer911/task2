import { flickrConstants } from '../constants'
import { searchPhotoService } from '../services'


export const flickrActions = {
    fetchByTag
}

async function fetchByTag(tag) {
    return dispatch => {
        dispatch({ type: flickrConstants.FETCH_BY_TAG_REQUEST });
        try {
            const images = await searchPhotoService.fetchByTag(tag);
            dispatch({ type: flickrConstants.FETCH_BY_TAG_SUCCESS, images });
        } catch (error) {
            dispatch({ type: flickrConstants.FETCH_BY_TAG_ERROR, error });
        }
    }
}