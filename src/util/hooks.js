import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        if(initialState.age === "") {
            window.location.reload()
        }
        callback();
    }

    return {
        onChange,
        onSubmit,
        values
    }
}