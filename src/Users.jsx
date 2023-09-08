import { useEffect, useState } from "react"

export default function Users() {
    // useState
    const [users, setUsers] = useState([]);

    // useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responsive => responsive.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}


/*
 * 1. declare a state to hold the data 
 * 2. useEffect with call back and dependencies array
 */