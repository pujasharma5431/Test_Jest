const axios = require("axios");
const get={
    fetchData:()=>{
      return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.data)
      .catch(err=>"error");
    }
  }
  module.exports = get;