import React from "react"

function Student({
    student
}) {
    return(
        <tr>
            <td>{student.name}</td>
            <td>{student.middle}</td>
            <td>{student.last}</td>
            <td>{student.number}</td>
        </tr>
    );
}

export default Student;