import axios from "axios";
import React, {useEffect,useState} from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [userData, getuserData]=useState('');
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = ()=>{
    axios.get(`${url}`)
    .then((response)=>{
      const allData = response.data;
      getuserData(allData);
    })
    .catch(error=>console.log("error"));
  }


  return (
    <div className="App">
        <header className="main-header">
          <span className="headerText">UserList</span>
        </header>
        <Card userData = {userData}/>
    </div>
  );
}

export default App;
