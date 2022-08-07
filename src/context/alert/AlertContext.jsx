import { createContext, useReducer } from "react";

import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
    const initalState = null;

    const [state, dispatch] = useReducer(alertReducer, initalState);

    const setAlert = (msg, type) => {
        dispatch({
            type: "SHOW_ALERT",
            payload: {
                msg,
                type,
            },
        });

        setTimeout(() => {
            dispatch({ type: "REMOVE_ALERT" });
        }, 3000);
    };

    return (
        <AlertContext.Provider
            value={{
                setAlert,
                alert: state,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContext;
