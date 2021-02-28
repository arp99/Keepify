import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoInput({ items , setItems }){
    
    //state management for textarea and input fields
    const [value , setValue] = useState('')
    const [title , setTitle] = useState('')
    
    //return todoItem object with description
    const makeTodoItem = () =>({
            id:uuidv4(), 
            title: title,
            txtValue: value,
            edited:new Date().toLocaleTimeString(),
            pinned: false,
            labels: [],

    })

    //change handlers for textarea and input fields
    const onChangeHandler = e =>{
        const id = e.target.id , inputValue = e.target.value;
        if(id === "inputTitle")
            setTitle(inputValue)
        else if(id === "inputTxt")
            setValue(inputValue)
    } 

    //submits todo when textarea loses focus or add button is clicked 
    const onBlurHandler = () => { 
        if(value!== '')    
            setItems([...items , makeTodoItem()])
        setValue('');
        setTitle('');
    }
    
    //returns the JSX of the component
    return(
        <div className="input_container">
            <label htmlFor="titleInput">Title</label>
            <input 
                type="text" 
                name="titleInput" 
                id="inputTitle" 
                value={title} 
                onChange={onChangeHandler} 
                placeholder="Enter Title"
            />
            <br />
            <textarea 
                    id="inputTxt" 
                    cols="30" 
                    value={value} 
                    onChange={onChangeHandler} 
                    onBlur={onBlurHandler}
            ></textarea>
            <button className="btn_add" onClick={onBlurHandler}>Add</button>
        </div>
    )
}