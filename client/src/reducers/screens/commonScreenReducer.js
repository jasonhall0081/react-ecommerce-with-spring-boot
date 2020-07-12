import {
    ADD_TO_CART, DELETE_FILTER_QUERY,
    LOAD_HOME_PAGE, LOAD_SHOPPING_BAG_PRODUCTS,
    LOAD_FILTER_ATTRIBUTES,
    LOAD_FILTER_PRODUCTS, LOAD_TABS_DATA, REMOVE_FILTER_ATTRIBUTES, SAVE_FILTER_QUERY,
    SELECT_PRODUCT_DETAIL, CART_TOTAL
} from "../../actions/types";
import log from "loglevel";

export const homePageDataReducer = (state = {isLoading: true}, action) => {
    log.trace(`[HOME_SCREEN_REDUCER]: action.type = ${action.type}`)
    switch (action.type) {
        case LOAD_HOME_PAGE:
            log.trace(`[HOME_SCREEN_REDUCER]: action.payload = ${JSON.stringify(action.payload)}`)
            return action.payload;
        default:
            return state;
    }
};

export const tabsDataReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case LOAD_TABS_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const addToCartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, totalQuantity: action.payload.totalQuantity,
                productQty: action.payload.productQty
            };
        default:
            return state;
    }
};

export const filterProductsReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case LOAD_FILTER_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};

export const filterAttributesReducer = (state = null, action) => {
    switch (action.type) {
        case LOAD_FILTER_ATTRIBUTES:
            return action.payload;
        case REMOVE_FILTER_ATTRIBUTES:
            return null
        default:
            return state;
    }
};

export const selectProductDetailReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case SELECT_PRODUCT_DETAIL:
            return action.payload
        default:
            return state;
    }
};

export const shoppingBagProductReducer = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case LOAD_SHOPPING_BAG_PRODUCTS:
            return action.payload
        default:
            return state;
    }
};

export const filterQueryReducer = (state = null, action) => {
    switch (action.type) {
        case SAVE_FILTER_QUERY:
            return action.payload
        case DELETE_FILTER_QUERY:
            return null
        default:
            return state;
    }
};

export const cartTotalReducer = (state = null, action) => {
    switch (action.type) {
        case CART_TOTAL:
            return action.payload
        default:
            return state;
    }
};