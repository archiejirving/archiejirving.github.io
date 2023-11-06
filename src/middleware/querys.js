function GetLosses(pagination_n, pagination_p) {
    return fetch('http://localhost:3000/api/getbypage/' + String(pagination_p) + '&' + String(pagination_n))
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
    })
}

export default GetLosses;