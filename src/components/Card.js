import React from "react";
import "./Card.css";

export default function Card(props) {
  //console.log(props.userData[0]);
  const DisplayUserData = (props)=>{
    const {userData}= props;
    if(userData.length>0){
      return (
        userData.map((user, index)=>{
          //console.log("user"+index, user);
          return(
              <div className="card" key={user.id}>
                <div className="card-header">
                  <div className="profile">
                      <span className="letter">{user.id}</span>
                  </div>
                  <div className="card-title-group">
                    <h5 className="card-title">{user.title}</h5>
                  </div>
                </div>
                <div className="card-text">{user.body}</div>
            </div>              
          )
        })
      )
    }else{
      return(<h3>No Users Data Available</h3>)
    }
  }

  return (
    <div className="card-container">
        {DisplayUserData(props)}
    </div>
    
  );
}