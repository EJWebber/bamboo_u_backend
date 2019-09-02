const baseURL = "http://localhost:3000"
const versionURL = `${baseURL}/api/v1`
const usersURL = `${versionURL}/users`
const wbgURL = `${versionURL}/wb_goals`
const wmgURL = `${versionURL}/wm_goals`
const userWBGURL = `${versionURL}/user_wb_goals`
const userWMGURL = `${versionURL}/user_wm_goals`
const userDBGURL = `${versionURL}/user_db_goals`
const userDMGURL = `${versionURL}/user_dm_goals`


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

const postUserWMG = goal => {
    return fetch(userWMGURL,
        {method: "POST",
    headers: {"Content-Type": "application/json"},
body: JSON.stringify(goal)
})
.then(resp => resp.json())
}

const fetchUserWMG = id => {
    return fetch(`${userWMGURL}/${id}`)
    .then(resp => resp.json())
}

const postUserWBG = goal => {
    return fetch(userWBGURL,
        {method: "POST",
    headers: {"Content-Type": "application/json"},
body: JSON.stringify(goal)
})
.then(resp => resp.json())
}

const postUserDMG = goal => {
    return fetch(userDMGURL,
        {method: "POST",
    headers: {"Content-Type": "application/json"},
body: JSON.stringify(goal)
})
.then(resp => resp.json())
}

const postUserDBG = goal => {
    return fetch(userDBGURL,
        {method: "POST",
    headers: {"Content-Type": "application/json"},
body: JSON.stringify(goal)
})
.then(resp => resp.json())
}

export default {
    fetchUser,
    postUser,
    fetchAllWBGs,
    fetchAllWMGs,
    postUserWMG,
    fetchUserWMG,
    postUserWBG,
    postUserDMG,
    postUserDBG
}