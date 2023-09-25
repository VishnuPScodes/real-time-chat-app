import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        console.log(('clicked'));
        event.preventDefault();
        //setIsLoading(true);

        socket.emit('message', { data: value });
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={e => setValue(e.target.value)} />

            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
    );
}