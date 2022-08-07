import { useState, useContext } from "react";

//import context
import GitHubContext from "../../context/github/GitHubContext";
import AlertContext from "../../context/alert/AlertContext";

//imporing gitHub actions
import { searchUsers } from "./../../context/github/GitHubActions";

function UserSearch() {
    const { dispatch, users } = useContext(GitHubContext);
    const { setAlert } = useContext(AlertContext);

    const [text, setText] = useState("");
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    //get searchResults

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text === "") {
            setAlert("Please enter somethin", "error");
        } else {
            //serach for the users
            dispatch({
                type: "SET_LOADING_TRUE",
                payload: true,
            });
            const users = await searchUsers(text);

            dispatch({
                type: "SEARCH_USERS",
                payload: users,
            });

            setText("");
        }
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder="Search here..."
                                onChange={handleTextChange}
                                value={text}
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* To make sure that the clear button is available only when the users are present */}
            {users.length > 0 && (
                <div>
                    <button
                        onClick={() => {
                            dispatch({
                                type: "REMOVE_USERS",
                            });
                        }}
                        className="btn btn-ghost btn-lg"
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserSearch;
