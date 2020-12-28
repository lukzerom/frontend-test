import axios from "axios";

const endpoint = "https://us-central1-points-backend.cloudfunctions.net/api";

//add user

export const addUser = async (user) => {
  await axios
    .post(`${endpoint}/users`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
};

//add plant

//get plants
