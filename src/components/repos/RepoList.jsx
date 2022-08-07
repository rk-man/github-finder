import React from "react";
import { useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";
import RepoItem from "./RepoItem";

function RepoList() {
    const { repos } = useContext(GitHubContext);

    let allRepos = repos.map((repo) => {
        return <RepoItem repo={repo} key={repo.id} />;
    });

    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <h2 className="text-3xl my-4 font-bold card-title">
                Top Repositories
            </h2>
            {allRepos}
        </div>
    );
}

export default RepoList;
