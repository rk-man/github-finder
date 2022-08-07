import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
    //all the initial states before the reducer updates anything
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(gitHubReducer, initialState);

    //get initial users for testing users
    //     const fetchUsers = async () => {
    //         setLoading();
    //
    //         const response = await fetch(`${GITHUB_URL}/users`, {
    //             headers: {
    //                 authorization: `bearer ${GITHUB_TOKEN}`,
    //             },
    //         });
    //
    //         const data = await response.json();
    //
    //         //the object inside is an argument to the action parameter in the gitHubReducer fn
    //         dispatch({
    //             type: "GET_USERS",
    //             payload: data,
    //         });
    //     };

    return (
        <GitHubContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GitHubContext.Provider>
    );
};

export default GitHubContext;
