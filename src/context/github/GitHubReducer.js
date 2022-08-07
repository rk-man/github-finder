const gitHubReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_USERS": {
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        }

        case "SET_LOADING_TRUE": {
            return {
                ...state,
                loading: action.payload,
            };
        }

        case "REMOVE_USERS": {
            return {
                ...state,
                users: [],
                loading: false,
            };
        }

        case "GET_REPOS_AND_USER": {
            return {
                ...state,
                repos: action.payload.repos,
                user: action.payload.user,
                loading: false,
            };
        }

        default:
            return state;
    }
};

export default gitHubReducer;
