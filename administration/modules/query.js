const axios = require('axios')
module.exports = (method='get',url='',data={},content={}) => {
    let config = {}
    axios.defaults.baseURL = process.env.SERVER || 'http://localhost:5050/api/';
    axios.defaults.headers.common['Authorization'] = process.env.AUTH_TOKEN || null;
    if(method != 'get'){
        axios.defaults.headers.post['Content-Type'] = content["content-type"];
        axios.defaults.headers.put['Content-Type'] = content["content-type"];
        axios.defaults.headers.delete['Content-Type'] = content["content-type"];
    }


    return axios({
        method: method,
        url: url,
        params: data,
        data:data
    });
}