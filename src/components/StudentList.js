import React from "react"
import Student from "./Student"

function StudentList({
    students
}) {
    return(
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Friends</th>
                </tr>
                {students.map((student)=>{
                    return <Student key={student.name} student={student} />
                })}
            </tbody>
        </table>
    );
}

export default StudentList;