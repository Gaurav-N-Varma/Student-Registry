import React from "react"

function NewPlanetForm({
    addPlanet
}) {

    function handleSubmit(e) {
        e.preventDefault()
        addPlanet(e)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="First Name" />
            <input type="text" name="climate" placeholder="Middle Name" />
            <input type="text" name="terrain" placeholder="Last Name"/>
            <input type="text" name="population" placeholder="Friends" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;