import React, { Fragment, useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        fetch('http://localhost:8085/planets')
        .then(r => r.json())
        .then(data => setPlanets(data))
    }, [])
    
    function addPlanet(e) {
        setPlanets(old => [...old, {
            "name": e.target.name.value,
            "climate": e.target.climate.value,
            "terrain": e.target.terrain.value,
            "population": e.target.population.value
        }])
        
        fetch('http://localhost:8085/planets', {
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

    const planetsToDisplay = planets.filter((planet) => {
        return planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    return(
        <div className="registry">
            <Search filterPlanets={filterPlanets}/>
            <div className="content">
                <PlanetList planets={planetsToDisplay} />
                <NewPlanetForm addPlanet={addPlanet}/>
            </div>
        </div>
    )
}

export default Registry;