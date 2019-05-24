import { createStore } from 'redux'

const initialState = {
    property_name: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    img_url: '',
    mortgage: null,
    rent: null
}

export const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIP = "UPDATE_ZIP"
export const UPDATE_IMG_URL = "UPDATE_IMG_URL"
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
export const UPDATE_RENT = "UPDATE_RENT"
export const CLEAR_STATE = "CLEAR_STATE"

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROPERTY_NAME:
            return {
                ...state, property_name: action.payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state, address: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state, city: action.payload
            }
        case UPDATE_STATE:
            return {
                ...state, state: action.payload
            }
        case UPDATE_ZIP:
            return {
                ...state, zip: action.payload
            }
        case UPDATE_IMG_URL:
            return {
                ...state, img_url: action.payload
            }
        case UPDATE_MORTGAGE:
            return {
                ...state, mortgage: action.payload
            }
        case UPDATE_RENT:
            return {
                ...state, rent: action.payload
            }
        case CLEAR_STATE:
            return {
                property_name: '',
                address: '',
                city: '',
                state: '',
                zip: null,
                img_url: '',
                mortgage: null,
                rent: null
            }
        default: return state;
    }
}

export default createStore(reducer)