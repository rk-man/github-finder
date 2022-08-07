import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

//Importing contexts and useContext
import { useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";

//Here we are using fetchUsers because we want to get all the github users on the userResults components which makes more sense...useEffect is mostly not used in the contextProvider
function UserResults() {
    const { users, loading } = useContext(GitHubContext);

    if (!loading) {
        return (
            //as the viewport reduces the grid  columns also reduces
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => {
                    return <UserItem key={user.id} user={user} />;
                })}
            </div>
        );
    } else {
        return <Spinner />;
    }
}

export default UserResults;
