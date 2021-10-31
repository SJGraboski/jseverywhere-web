import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

import NoteForm from '../components/NoteForm';

import { GET_NOTES, GET_MY_NOTES } from '../gql/query';

const NEW_NOTE = gql`
    mutation newNote($content: String!) {
        newNote(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`;

const NewNote = props => {
    useEffect(() => {
        document.title = 'New Note - Notedly';
    });
    const [ data, {loading, error}] = useMutation(NEW_NOTE, {
        refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
        onCompleted: data => {
            props.history.push(`note/${data.newNote.id}`);
        }
    })

    return <React.Fragment>
        {/* as mutation is loading, display a message */}
        {loading && <p>Loading...</p>}
        {/* if there's an error, display that */}
        {error && <p>Error saving the note</p>}
        {/* pass mutation data as a prop */}
        <NoteForm action={data} />
    </React.Fragment>
}

export default NewNote;