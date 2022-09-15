import React, { useState, useEffect } from 'react';

export default function Total() {
    const [students, setStudents] = useState([])
    const [friends, setFriends] = useState(0)

    useEffect(()=>{
        fetch('http://localhost:8085/students')
        .then(r => r.json())
        .then(data => setStudents(data))
    }, [])

    const numArray = students.map(student => parseInt(student.number))

    let initVal = 0

    let sumVal = numArray.reduce((p, c) => p + c, initVal)

    useEffect(() => setFriends(sumVal), [sumVal])

    return(
        <>
            <h2>Total friends</h2>
            {friends}
        </>
    )
}