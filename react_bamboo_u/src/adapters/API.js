const baseURL = "http://localhost:3000"
const versionURL = `${baseURL}/api/v1`
const usersURL = `${versionURL}/users`
const wbgURL = `${versionURL}/wb_goals`
const wmgURL = `${versionURL}/wm_goals`

const fetchUser = () => {
    return fetch(usersURL)
.then(resp => resp.json())
}

const postUser = user => {
    return fetch(usersURL, 
    {method: "POST", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(user)
})
.then(resp => resp.json())
}

const fetchAllWBGs = () => {
    return fetch(wbgURL)
    .then(resp => resp.json())
}
const fetchAllWMGs = () => {
    return fetch(wmgURL)
    .then(resp => resp.json())
}


export default {
    fetchUser,
    postUser,
    fetchAllWBGs,
    fetchAllWMGs
}