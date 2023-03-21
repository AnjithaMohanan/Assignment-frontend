import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployeeComponent = () => {
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [profession,setProfession]=useState("");

  const navigate= useNavigate();
const {id}=useParams();

  const employeeData ={name,age,profession};
  
  function saveEmployee(e){
    e.preventDefault();

    if (employeeData.name !=="" && employeeData.age !=="" && employeeData.profession !==""){
      if (id){
        
      EmployeeService.updateEmployee(id, employeeData)
      .then(navigate("/employee"))
      .catch(e=> console.log(e))

      }else{
        
      EmployeeService.saveEmployee(employeeData)
      .then(navigate("/employee"))
      .catch(e=> console.log(e))
        
      }

    }else{
      alert("please ,fill in all inputes");
    }
   
  }
function title(){
  if(id) {
    return "Update Employee";
  }else {
    return "Add Employee";
  }

}
useEffect(()=>{
  if (id){
    EmployeeService.getAllEmployeeById(id)
    .then(res =>{
      setName(res.data.name);
      setAge(res.data.age);
      setProfession(res.data.profession);
    })
    .catch(e=>console.log(e));

  }
 

},[])
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'>{title()}</h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <input className='form-control'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="text" placeholder='Enter Name' />
                    </div>
                    <div className='form-group mb-2'>
                        <input className='form-control'
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                        type="number" placeholder='Enter Age' />
                    </div>
                    <div className='form-group mb-2'>
                        <input className='form-control'
                        value={profession}
                        onChange={(e)=>setProfession(e.target.value)}
                        type="text" placeholder='Enter profession' />
                    </div>
                    <button onClick={(e)=>saveEmployee(e)} className='btn btn-success'>save</button>{""}
                    <Link to={"/employee"} className='btn btn-danger' href=" ">Cancel</Link>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
