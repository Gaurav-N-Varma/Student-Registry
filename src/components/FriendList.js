import React from "react"
import Planet from "./Planet"

function PlanetList({
    planets
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
                {planets.map((planet)=>{
                    return <Planet key={planet.name} planet={planet} />
                })}
            </tbody>
        </table>
    );
}

export default PlanetList;