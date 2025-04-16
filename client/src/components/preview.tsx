import React, { useState } from "react";
import { FormType } from "./form";

export default function Preview(props:FormType){
    const {full_name,email,age,gender,marital_status,nationality,address} = props;
    const [submitted,setSubmitted] = useState(false);
    const [error,setError] = useState("");
    const handleSubmit = async ()=>{
       const resp = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({full_name,email,age,gender,marital_status,nationality,address})
      });
      const data = await resp.json();

      if(data.error){
        setError(data.error)
      }
      else{
        setSubmitted(true);
      }
      
    }
    return (
        <div className="mt-20 flex justify-center">
        <div className="w-full max-w-md p-8 border-2 border-black rounded-xl shadow-md bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">User Information Form - Preview</h2>
      
          <div className="mb-4">
            <label className="block mb-1 font-medium">Full Name</label>
          
            {full_name}
          </div>
      
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            {email}
          </div>
      
          <div className="mb-4">
            <label className="block mb-1 font-medium">Age</label>
            {age.toString()}
          </div>
      
          <div className="mb-4">
            <label className="block mb-1 font-medium">Gender</label>
            {gender}
          </div>
      
          <div className="mb-4">
            <label className="block mb-1 font-medium">Marital Status</label>
            {marital_status}
          </div>
      
          <div className="mb-4">
            <label className="block mb-1 font-medium">Nationality</label>
           {nationality}
          </div>
      
          <div className="mb-6">
            <label className="block mb-1 font-medium">Address</label>
            {address}
          </div>
      
          <div className="text-center">
            <button disabled={submitted} onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition duration-200">
              Submit
            </button>
            {submitted?<p>Submitted successfully!!</p>:""}
            {error?<p>{error}</p>:""}
          </div>
        </div>
      </div>
      
    );
};