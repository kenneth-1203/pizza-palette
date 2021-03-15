import * as actionTypes from "./actionTypes";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGNOUT_SUCCESS });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
      })
    }).then(() => {
      dispatch({ type: actionTypes.SIGNUP_SUCCESS })
    }).catch(err => {
      dispatch({ type: actionTypes.SIGNUP_ERROR, err })
    })
  }
}

export const isAdmin = (id) => {
  const admin = [
    "dlWrUEXD4uffpc9wzYmL0y2hNFg2"
  ];
  let exist = false;
  if (id) {
    admin.map(a => {
      if (a === id) {
        exist = true;
      }
      return exist;
    })
  }
  return exist;
}