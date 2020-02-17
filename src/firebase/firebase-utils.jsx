import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBbW9qB57RVUuMlLebJjJs8FNOFkJWg4tg",
  authDomain: "shop07022020.firebaseapp.com",
  databaseURL: "https://shop07022020.firebaseio.com",
  projectId: "shop07022020",
  storageBucket: "shop07022020.appspot.com",
  messagingSenderId: "584890802319",
  appId: "1:584890802319:web:cd8e33ac9245a874a5d0fa",
  measurementId: "G-D0E0VGVEW7"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, ...atherProps) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const{displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...atherProps
      })
    }catch(err){
      console.error(err.message)
    }
  }
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;