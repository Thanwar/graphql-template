import React, { createRef } from "react";
import './App.css';
import { useMutation, useQuery } from "@apollo/client";
import { createMessageMutation, getAllMessages } from "./gqlSchema/index";

function App() {
  const messageValue = createRef()
  const [ addMessage ] = useMutation(createMessageMutation)
  // let { data, error, loading} = useQuery(getAllMessages);
  // console.log("data",data,"error",error);
  
  const submit = () => {
    let message = messageValue.current.value;
    addMessage({ variables: { data: { message } }})
    .then(data=>{
      console.log("response",data);
    }).catch(error=>{
      console.log("error",error);
    })
  }

  return (
    <div className="App">
      <input ref={messageValue} placeholder="Enter your message" />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default App;
