import { useState } from "react";

export function Createtodo() {

    const [title , settitle] = useState("")
    const [description , setdescription] = useState("")

    return (

        <>
        <div>
    <input className="input" type="text" placeholder="Title" onChange={function (e){
        settitle(e.target.value)
    }}/><br/>
    <input className="input" type="text" placeholder="Description" onChange={function (e){
        setdescription(e.target.value)
    }}/><br/>
        
        <button id="btn" onClick={()=>
        {
              fetch("http://localhost:3048/todo", {

              method : "POST", 
              body : JSON.stringify({
                title : title, 
                description : description
              }), 
              headers: {
                "Content-Type" : "application/json"
              }

              })
              .then(async (res) => {
                // Check if the response is not OK (e.g., 400 or 500 status codes)
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || "Failed to add Todo.");
                }

                const json = await res.json();
                alert("Todo Added");
            })
              .catch(function(error) {
                console.error("Error occurred:", error); // Log the error for debugging
                alert("Failed to add the Todo. You Entered Invalid Inputs");
              });

        }}> Add a Todo </button>
        </div>

        </>
    );
}