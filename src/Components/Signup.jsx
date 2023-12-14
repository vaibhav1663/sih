import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSignup } from '../hooks/useSignup';
const Signup = () => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age,setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [field, setField] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("")
    const [role, setRole] = useState("");

    const { signup, error, isLoading } = useSignup()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, name, collegeName, gender,role, age, degree, year, field);
        navigate('/')
    }

    useEffect(() => {
        if (error === "") {

        } else {
            toast.error(error)
        }
    }, [error])
    return (
        <div className="flex min-h-screen">

            <section class="bg-white">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 class="mb-4 text-xl font-bold text-gray-900">General Information</h2>
                    <form onSubmit={handleSubmit} action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="sm:col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900  text-left">Name</label>
                                <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type product name" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900  text-left">Email</label>
                                <input type="text" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type product name" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="college" class="block mb-2 text-sm font-medium text-gray-900  text-left">College</label>
                                <input type="text" name="college" id="college" onChange={(e)=>{setCollegeName(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type product name" required="" />
                            </div>
                            <div class="w-full">
                                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900  text-left ">Gender</label>
                                <select id="gender" onChange={(e)=>{setGender(e.target.selectedOptions[0].value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option selected="">Select category</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div class="w-full">
                                <label for="age" class="block mb-2 text-sm font-medium text-gray-900  text-left ">Age</label>
                                <input type="number" onChange={(e)=>{setAge(e.target.value)}} name="age" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="21" required="" />
                            </div>
                            <div>
                                <label for="stream" class="block mb-2 text-sm font-medium text-gray-900  text-left ">Stream</label>
                                <select id="stream" onChange={(e)=>{setDegree(e.target.selectedOptions[0].value)}}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option selected="">Select category</option>
                                    <option value="UG">UG</option>
                                    <option value="PG">PG</option>
                                </select>
                            </div>
                            <div>
                                <label for="year" class="block mb-2 text-sm font-medium text-gray-900  text-left ">Year</label>
                                <select id="year" onChange={(e)=>{setYear(e.target.selectedOptions[0].value)}}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option selected="">Select category</option>
                                    <option value="FY">First Year</option>
                                    <option value="SY">Second Year</option>
                                    <option value="TY">Third year</option>
                                    <option value="LY">Fourth year</option>
                                </select>
                            </div>
                            <div>
                                <label for="field" class="block mb-2 text-sm font-medium text-gray-900  text-left ">Course</label>
                                <select id="field" onChange={(e)=>{setField(e.target.selectedOptions[0].value)}}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option selected="">Select category</option>
                                    <option value="aurveda">Aurveda</option>
                                    <option value="sidhha">Sidhha</option>
                                </select>
                            </div>
                            <div>
                                <label for="role" class="block mb-2 text-sm font-medium text-gray-900  text-left ">Role</label>
                                <select id="role" onChange={(e)=>{setRole(e.target.selectedOptions[0].value)}}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option selected="">Role</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900  text-left">password</label>
                                <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type product name" required="" />
                            </div>
                        </div>
                        <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500/100 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                            Submit
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Signup