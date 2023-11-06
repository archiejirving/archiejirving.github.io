function urlBuilder(params) {
    const { url, query } = params
    let queryString = ''
    if (query) {
        queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
    }
    return `${url}?${queryString}`
}

var test_params = {
    url: 'https://www.google.com',
    query: {
        
    }
}
console.log(urlBuilder(test_params))    
// export default urlBuilder