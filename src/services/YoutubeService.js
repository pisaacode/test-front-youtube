const url = "https://app-youtubetest.herokuapp.com/lista?search="

export const getList = (search) => {
    return fetch(url + search)
        .then(data => data.json())
        .catch(error=> console.error(error))
}

