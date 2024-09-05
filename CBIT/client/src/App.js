import React, {useState} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[name,setStudentName]= useState("");
const[tech,setTechnology]= useState("");
const[sub,setStatus]= useState("");
const[rollno,setRollno]= useState("");
const[branch,setBranch]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{name:name,
tech:tech,
sub:sub,
rollno:rollno,
branch:branch
}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="String"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="String"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>Sub</b></label>
<input
type="Boolean"
name="sub"
onChange={(e)=>{
setStatus(e.target.value);
}}
required/>
<label><b>Student Rollno</b></label>
<input
type="Number"
name="rollno"
onChange={(e)=>{
setRollno(e.target.value);
}}
required/>
<label><b>Student Branch</b></label>
<input
type="String"
name="branch"
onChange={(e)=>{
setBranch(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;