import { flickrConstants } from '../constants'


export function flickr(state = {}, action) {
    switch (action.type) {
        case flickrConstants.FETCH_BY_TAG_REQUEST:
            return { loading: true }
        case flickrConstants.FETCH_BY_TAG_ERROR:
            return {  error: action.error }
        case flickrConstants.FETCH_BY_TAG_SUCCESS:
            return { images: action.images }
        case flickrConstants.CLEAR_IMAGES_ARRAY:
            return {}
        default:
            return state
    }
}