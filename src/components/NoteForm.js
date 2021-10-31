import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
    height: 100%;
`;

const Form = styled.form`
    height: 100%;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 90%;
    box-sizing: border-box;
`;

const NoteForm = props => {
    // set the default state of the form
    const [value, setValue] = useState({ content: props.content || '' });

    // update the state when a user types in the form
    const onChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    return <Wrapper>
        <Form 
            onSubmit={e => {
                e.preventDefault();
                props.action({
                    variables: {
                        ...value
                    }
                })
            }}
        >
            <TextArea 
                required
                type="text"
                name="content"
                placeholder="Note content"
                value={value.content}
                onChange={onChange}
            />
            <Button type="submit">Save</Button>
        </Form>
    </Wrapper>
}

export default NoteForm;