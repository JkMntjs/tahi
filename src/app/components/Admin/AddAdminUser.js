import React from 'react';
import "./AddAdminUser.css";
import firebase  from "firebase/app";
import "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


/** 
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const db = getFirestore(app);


Get a list of cities from your database
async function getAdminUsers(db) {
    const AdminUsersCol = collection(db, "AdminUsers");
    const AdminUsersSnapshot = await getDocs(AdminUsersCol);
    const AdminUsersList = AdminUsersSnapshot.docs.map((doc) => doc.data());
    return AdminUsersList;
    */


const AddAdminUser = () => {
  const [data, setData] = useState({});
  const [newItem, setNewItem] = useState("");

  // TODO: Replace the following with your app's Firebase project configuration

  /**
  const firebaseConfig = {
    apiKey: "AIzaSyDMMiUZMYuHDfSKaY7cKSBzITGo3zUXUo4",
    authDomain: "patahi-dev.firebaseapp.com",
    projectId: "patahi-dev",
    storageBucket: "patahi-dev.appspot.com",
    messagingSenderId: "373604837531",
    appId: "1:373604837531:web:89a44a0a6f41fdb2d67e3e",
    measurementId: "G-YJJR8ZFJTF",
  }; */


  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDMMiUZMYuHDfSKaY7cKSBzITGo3zUXUo4",
      authDomain: "patahi-dev.firebaseapp.com",
      projectId: "patahi-dev",
      storageBucket: "patahi-dev.appspot.com",
      messagingSenderId: "373604837531",
      appId: "1:373604837531:web:89a44a0a6f41fdb2d67e3e",
      measurementId: "G-YJJR8ZFJTF",
    }


    // =================================Fetch initial data=======================================
    const fetchData = async () => {
      const database = firebase.database();
      const snapshot = await database.ref("/items").once("value");
      setData(snapshot.val());
    };
    fetchData();
  }, [database]);
  
/** ===================================== ADD NEW ADMIN USER =======================================*/
const addItem = () => {
    const database = firebase.database();
    const newItemRef = database.ref("/items").push();
    newItemRef.set(newItem);
    setNewItem("");
  }


  return (
    <div>
      <div className="Container">
        <div className="Header">
          <div className="text">Admin User</div>
        </div>
        <div className="inputsContainer">
          <div className="input">
            <input
              type="text"
              placeholder="Firstname"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Lastname"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />{" "}
          </div>

          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />{" "}
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />{" "}
          </div>
        </div>

        <div className="submitContainer">
          <button className="submit" onClick={addItem}>Submit</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}



export default AddAdminUser;


