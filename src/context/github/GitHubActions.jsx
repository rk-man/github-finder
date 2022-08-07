import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//get Reuslts based on the search
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    });

    const response = await github.get(`/search/users?${params}`);

    return response.data.items;

    //the object inside is an argument to the action parameter in the gitHubReducer fn
};

//

//get user and repos
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: 10,
    });
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`),
    ]);

    return { user: user.data, repos: repos.data };
};

// //get repositories
// export const getRepos = async (login) => {
//     const params = new URLSearchParams({
//         sort: "created",
//         per_page: 10,
//     });
//
//     const response = await github.get(`/users/${login}/repos?${params}`);
//
//     //the object inside is an argument to the action parameter in the gitHubReducer fn
// };

//getting one specific and their page
// export const getOneSpecificUser = async (login) => {
//     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//         headers: {
//             authorization: `bearer ${GITHUB_TOKEN}`,
//         },
//     });
//
//     if (response.status === 404) {
//         window.location.assign("/notfound");
//     } else {
//         const data = await response.json();
//
//         //the object inside is an argument to the action parameter in the gitHubReducer fn
//         return data;
//     }
// };
