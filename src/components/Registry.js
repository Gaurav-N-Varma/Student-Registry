import React, { Fragment, useEffect, useState } from "react"
import Search from "./Search"
import NewStudentForm from "./NewStudentForm"
import StudentList from "./StudentList"

function Registry() {
    const [students, setStudents] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        fetch('http://localhost:8085/students')
        .then(r => r.json())
        .then(data => setStudents(data))
    }, [])
    
    function addStudent(e) {
        setStudents(old => [...old, {
            "name": e.target.name.value,
            "middle": e.target.middle.value,
            "last": e.target.last.value,
            "number": e.target.number.value
        }])
        
        fetch('http://localhost:8085/students', {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
           },
           body: JSON.stringify({
            "name": e.target.name.value,
            "middle": e.target.middle.value,
            "last": e.target.last.value,
            "number": e.target.number.value
        }),
        })
           .then(r => r.json())
           .then(d => console.log(d))
           .catch(e => console.log(e))
    }

    function filterStudents(text) {
        setSearchTerm(text)
    }

    const studentsToDisplay = students.filter((student) => {
        return student.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    return(
        <div className="registry">
            <h2>Overview</h2>
            <Search filterStudents={filterStudents}/>
            <div className="content">
                <StudentList students={studentsToDisplay} />
                <NewStudentForm addStudent={addStudent}/>
            </div>
        </div>
    )
}
export default Registry;