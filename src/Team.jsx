import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    // css properties
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px',
    }

    // arrow function
    const addTeam = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    };
    // arrow function
    const removeTeam = () => {
        // const newTeam = team - 1;
        setTeam(team - 1);
    };

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addTeam}>Add</button>
            <button onClick={removeTeam}>Reduce</button>
        </div>
    )
}