const AlertReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_ALERT":
            console.log(action.payload);
            return action.payload;
        case "REMOVE_ALERT":
            return null;
        default:
            return state;
    }
};

export default AlertReducer;
