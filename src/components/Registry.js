import React, { Fragment, useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewStudentForm"
import FriendList from "./FriendList"

function Registry() {
    const [friends, setFriends] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        fetch('http://localhost:8085/students')
        .then(r => r.json())
        .then(data => setFriends(data))
    }, [])
    
    function addPlanet(e) {
        setFriends(old => [...old, {
            "name": e.target.name.value,
            "climate": e.target.climate.value,
            "terrain": e.target.terrain.value,
            "population": e.target.population.value
        }])
        
        fetch('http://localhost:8085/students', {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
           },
           body: JSON.stringify({
            "name": e.target.name.value,
            "climate": e.target.climate.value,
            "terrain": e.target.terrain.value,
            "population": e.target.population.value
        }),
        })
           .then(r => r.json())
           .then(d => console.log(d))
           .catch(e => console.log(e))
    }

    function filterPlanets(text) {
        setSearchTerm(text)
    }

    const friendsToDisplay = friends.filter((planet) => {
        return planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    return(
        <div className="registry">
            <h2>Overview</h2>
            <Search filterPlanets={filterPlanets}/>
            <div className="content">
                <FriendList planets={friendsToDisplay} />
                <NewPlanetForm addPlanet={addPlanet}/>
            </div>
        </div>
    )
}
export default Registry;