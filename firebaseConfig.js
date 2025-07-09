import firebase from "firebase";


//colocar suas informações

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.firestore()
export const auth = firebase.auth()