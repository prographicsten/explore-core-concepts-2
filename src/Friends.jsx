import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Friend';

export default function Friends(){
    // useState
    const [friends, setFriends] = useState([]);

    // useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responsive => responsive.json())
            .then(data => setFriends(data));
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
 * 1. useState to hold data 
 * 2. useEffect with dependencies array
 * 3. use fetch to load data
 * 4. set loaded data to the setState (setFriends)
 * 5. display data on the component
 */