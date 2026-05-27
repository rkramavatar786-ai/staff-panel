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
  const [mobile,setMobile] = useState("");
  const [department,setDepartment] = useState("");
  const [activity,setActivity] = useState("");
  const [reason,setReason] = useState("");
  const [remarks,setRemarks] = useState("");

  const [outTime,setOutTime] = useState("");
  const [inTime,setInTime] = useState("");

  // CURRENT TIME

  const getCurrentTime = ()=>{

    return new Date().toLocaleTimeString();

  };

  // OUT TIME

  const markOutTime = ()=>{

    setOutTime(getCurrentTime());

  };

  // IN TIME

  const markInTime = ()=>{

    setInTime(getCurrentTime());

  };

  // SAVE DATA

  const saveStaff = async ()=>{

    if(
      !name ||
      !employeeId ||
      !department
    ){

      alert("Please Fill Required Fields");

      return;

    }

    try{

      await addDoc(
        collection(db,"staff"),
        {

          name,
          employeeId,
          mobile,
          department,
          activity,
          reason,
          outTime,
          inTime,
          remarks,
          createdAt:new Date().toLocaleString()

        }
      );

      alert("Staff Activity Saved");

      setName("");
      setEmployeeId("");
      setMobile("");
      setDepartment("");
      setActivity("");
      setReason("");
      setRemarks("");
      setOutTime("");
      setInTime("");

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

        <input
          type="number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e)=>
            setMobile(e.target.value)
          }
        />

        <select
          value={department}
          onChange={(e)=>
            setDepartment(e.target.value)
          }
        >

          <option>Select Department</option>

          <option>Academic</option>
          <option>Operations</option>
          <option>Marketing</option>
          <option>Accounts</option>
          <option>Administration</option>
          <option>Counselling</option>
          <option>Management</option>

        </select>

        <select
          value={activity}
          onChange={(e)=>
            setActivity(e.target.value)
          }
        >

          <option>Select Activity</option>

          <option>Check IN</option>

          <option>Check OUT</option>

          <option>
            During Working Hours Exit
          </option>

          <option>
            Official Visit
          </option>

          <option>
            Lunch Break
          </option>

        </select>

        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e)=>
            setReason(e.target.value)
          }
        />

        {/* AUTO TIME */}

        <div className="time-section">

          <button
            className="time-btn"
            onClick={markOutTime}
          >
            Mark OUT Time
          </button>

          <p>
            OUT Time:
            {outTime || " Not Marked"}
          </p>

          <button
            className="time-btn"
            onClick={markInTime}
          >
            Mark IN Time
          </button>

          <p>
            IN Time:
            {inTime || " Not Marked"}
          </p>

        </div>

        <textarea
          placeholder="Remarks"
          value={remarks}
          onChange={(e)=>
            setRemarks(e.target.value)
          }
        />

        <button
          className="save-btn"
          onClick={saveStaff}
        >
          Save Staff Activity
        </button>

      </div>

    </div>

  );

}

export default App;