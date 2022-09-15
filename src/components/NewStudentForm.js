import React from "react"

function NewStudentForm({
    addStudent
}) {

    function handleSubmit(e) {
        e.preventDefault()
        addStudent(e)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="First Name" />
            <input type="text" name="middle" placeholder="Middle Name" />
            <input type="text" name="last" placeholder="Last Name"/>
            <input type="text" name="number" placeholder="Friends" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewStudentForm;