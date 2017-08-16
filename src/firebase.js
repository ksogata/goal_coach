import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA-r7sxPQ0-lJji_bECIZDqaQTTECfbssc",
    authDomain: "goalcoach-597b1.firebaseapp.com",
    databaseURL: "https://goalcoach-597b1.firebaseio.com",
    projectId: "goalcoach-597b1",
    storageBucket: "goalcoach-597b1.appspot.com",
    messagingSenderId: "992795376548"
  };
  
export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');