import React, { useState } from 'react';
import '../../sass/custom/todo.css';

function ToDoForm(props) {
    const [input, setInput] = useState('');
    const handleChange = (e)=>{
        setInput(e.target.value);
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });
    
    };

    return (
        <>
            <div className="container">
                <div className="todo_app">
                    <h1>Todo App</h1>
                </div>
                <form className="todo_form" onSubmit={handleSubmit}>
                    <div className="input-group mb-3 todo_input">
                        <input type="text" className="form-control" onChange={handleChange} value={input} name="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ToDoForm
