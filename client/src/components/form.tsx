import React, { useState } from "react";
import {useForm,SubmitHandler} from "react-hook-form"
import Preview from "./preview";
export type FormType = {
    "full_name":String,
    "email":String,
    "age": Number,
    "gender":String,
    "marital_status": String,
    "nationality":String,
    "address":String
}

export default function Form(){
    const [preview,setPreview]= useState(false);
    const [form,setForm] = useState<FormType>({
        "full_name":"",
        "email":"",
        "age": 0,
        "gender":"",
        "marital_status": "",
        "nationality":"",
        "address":""
    });
    const {register,handleSubmit,formState:{errors}} = useForm<FormType>();
    const onSubmit: SubmitHandler<FormType> = (data) => {
        setForm(data);
        setPreview(true);
    }
    if(!preview){
        return (
            <div className="mt-20 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-8 border-2 border-black rounded-xl shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-center mb-6">User Information Form</h2>
        
            <div className="mb-4">
                <label className="block mb-1 font-medium">Full Name</label>
                <input {...register("full_name",{required:"Enter Full name"})} type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                {errors.full_name?<p className="text-red-600">{errors.full_name.message}</p>:""}
            </div>
        
            <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input {...register("email",{required:"Enter valid email"})} type="email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                {errors.email?<p className="text-red-600">{errors.email.message}</p>:""}
            </div>
        
            <div className="mb-4">
                <label className="block mb-1 font-medium">Age</label>
                <input  {...register("age",{required:"Enter valid age"})} type="number" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                {errors.age?<p className="text-red-600">{errors.age.message}</p>:""}
            </div>
        
            <div className="mb-4">
                <label className="block mb-1 font-medium">Gender</label>
                <select {...register("gender",{required:"Select an option"})} name="gender" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
                </select>
                {errors.gender?<p className="text-red-600">{errors.gender.message}</p>:""}
            </div>
        
            <div className="mb-4">
                <label className="block mb-1 font-medium">Marital Status</label>
                <select {...register("marital_status",{required:"Select an option"})} name="marital_status" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                </select>
                {errors.marital_status?<p className="text-red-600">{errors.marital_status.message}</p>:""}
            </div>
        
            <div className="mb-4">
                <label className="block mb-1 font-medium">Nationality</label>
                <input {...register("nationality", {required:"Enter valid nationality"})} type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                {errors.nationality?<p className="text-red-600">{errors.nationality.message}</p>:""}
            </div>
        
            <div className="mb-6">
                <label className="block mb-1 font-medium">Address</label>
                <textarea {...register("address",{required:"Enter valid address"})} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"  />
                {errors.address?<p className="text-red-600">{errors.address.message}</p>:""}
            </div>
        
            <div className="text-center">
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition duration-200">
                Submit
                </button>
            </div>
            </form>
        </div>
        
            
        );
    }else{
        return <Preview  {...form}/>
    }
};

// full_name: "George Wang",
// email: "george.wang@example.com",
// age: 50,
// gender: "Male",
// marital_status: "Married",
// nationality: "Chinese",
// address: "404 Willow Ave, Beijing"