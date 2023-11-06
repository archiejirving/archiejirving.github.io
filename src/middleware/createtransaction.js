function createtransaction(data) {
    return fetch('http://localhost:8080/api/createtransaction/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
}
export default createtransaction;