import React, { useEffect, useRef, useState } from 'react'

const TodoForm: React.FC<{onSubmit: (text:string)=>void}>=(props) =>{

    const [input, setInput] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        debugger;
        inputRef.current!.focus();
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        props.onSubmit(input)

        setInput('')
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add todo..." value={input} name='text' onChange={handleChange} ref={inputRef}/>
            <button>Add Todo</button>
        </form>

    )
}

export default TodoForm
