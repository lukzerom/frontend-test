import firebase from "firebase/app";
import { addUser } from "./api";

//W takim miejscu zdecydowanie REDUX i przekazywanie usera do globalnego state

export const handleSignInWithPopup = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  await firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (user) => {
      await addUser({
        name: user.additionalUserInfo.profile.given_name,
        surname: user.additionalUserInfo.profile.family_name,
        email: user.additionalUserInfo.profile.email,
        plants: [],
        id: user.user.uid,
      }).catch((err) => {
        console.log(err.message);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const handleSignInWithEmailAndPassword = async (
  email,
  password,
  name
) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (user) => {
      await addUser({
        name: name,
        surname: "",
        email: email,
        plants: [],
        id: user.user.uid,
      }).catch((err) => console.log(err));
    })
    .catch((err) => console.log(err.message));
};

export const handleLoginWithEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      return user;
    })
    .catch((err) => console.log(err.message));
};

export const getAuth = () => {};
