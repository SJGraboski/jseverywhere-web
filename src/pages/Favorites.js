import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

import { GET_MY_FAVORITES } from '../gql/query';

const Favorites = () => {
    useEffect(() => {
        // update the document title
        document.title = 'Favorites — Notedly';
    });

    const { loading, error, data } = useQuery(GET_MY_FAVORITES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <div>
            <h1>Notedly</h1>
            {data.me.favorites.length > 0 ?
                <NoteFeed notes={data.me.favorites} /> :
                <p>No favorites yet</p>}
        </div>
    );
}

export default Favorites;