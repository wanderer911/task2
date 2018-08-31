import { flickrConstants } from '../constants'

export function flickr(state = {}, action) {
    switch (action.type) {
        case flickrConstants.FETCH_BY_TAG_REQUEST:
            return { loading: true }
        case flickrConstants.FETCH_BY_TAG_ERROR:
            return { loading: false, error: action.error }
        case flickrConstants.FETCH_BY_TAG_SUCCESS:
            return { loading: false, images: action.images }
        default:
            return state
    }
}