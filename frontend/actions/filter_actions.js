export const UPDATE_BOUNDS = "UPDATE_BOUNDS"
export const UPDATE_FILTER = "UPDATE_FILTER"


export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}

export const changeFilter = (filter, value) => {
    type: UPDATE_FILTER,
    filter,
    value
}

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
    }
}