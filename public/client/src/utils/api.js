import axios from "axios";

export default {
  // Gets all people/users
  getPeopleList: function() {
    return axios.get("/api/users");
  }
};


//ADD a axios.post