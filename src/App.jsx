import "./App.css";

import { useState } from "react";

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "./firebase";

function App() {

  const [name,setName] = useState("");
  const [employeeId,setEmployeeId] = useState("");
  const [department,setDepartment] = useState("");
  const [activity,setActivity] = useState("");

  const saveStaff = async ()=>{

    if(
      !name ||
      !employeeId ||
      !department
    ){

      alert("Please Fill All Fields");

      return;

    }

    try{

      await addDoc(
        collection(db,"staff"),
        {

          name,
          employeeId,
          department,
          activity,
          time:new Date().toLocaleString()

        }
      );

      alert("Staff Activity Saved");

      setName("");
      setEmployeeId("");
      setDepartment("");
      setActivity("");

    }

    catch(error){

      console.log(error);

    }

  };

  return(

    <div className="container">

      <div className="form-box">

        <h1>
          Physics Wallah ERP
        </h1>

        <h2>
          Staff Activity Panel
        </h2>

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e)=>
            setEmployeeId(e.target.value)
          }
        />

        <select
          value={department}
          onChange={(e)=>
            setDepartment(e.target.value)
          }
        >

          <option>
            Select Department
          </option>

          <option>
            Academic
          </option>

          <option>
            Operations
          </option>

          <option>
            Marketing
          </option>

          <option>
            Accounts
          </option>

          <option>
            Administration
          </option>

        </select>

        <select
          value={activity}
          onChange={(e)=>
            setActivity(e.target.value)
          }
        >

          <option>
            Select Activity
          </option>

          <option>
            Check IN
          </option>

          <option>
            Check OUT
          </option>

          <option>
            Lunch Break
          </option>

          <option>
            Official Visit
          </option>

        </select>

        <button onClick={saveStaff}>
          Save Staff Activity
        </button>

      </div>

    </div>

  );

}

export default App;