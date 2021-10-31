import React, { useEffect } from 'react';

import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';


const MyNotes = () => {
    useEffect(() =>{
        // update the doucment title on component load
        document.title = 'My Notes — Notedly';
    })

    const { loading, error, data } = useQuery(GET_MY_NOTES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <h1>Notedly</h1>
            {data.me.notes.length !== 0 ? 
                <NoteFeed notes={data.me.notes} /> :
                <p>No notes yet</p>
            }
        </div>
    )
}

export default MyNotes;