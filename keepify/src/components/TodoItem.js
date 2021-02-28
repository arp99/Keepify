import pin from '../assets/pin.png'
import colorPallete from '../assets/color-palette.png'
import bin from '../assets/delete.png'
import tag from '../assets/tag.png'

import {useState} from 'react'

export default function TodoItem({ title , txtValue , id , setItems , items , setPinnedTodos , pinnedTodos}){
    const [txtvalue , setTxtValue] = useState(txtValue)
    const [titleValue , setTitleValue] = useState(title)
    // const [pinned , setPinned ] = useState(false)

    const onChangeHandler = e =>{
        const targetId = e.target.id , value = e.target.value;
        if(targetId === 'titleInput')
            setTitleValue(value);
        else if(targetId === 'todoInput')
            setTxtValue(value);
    }
    
    const pinHandler = () => {
 
        const newItems = items.filter(item=> item.id!== id);
        // console.log(newItems)
        const newPinned = items.filter(item=> item.id === id);
        console.log({...newPinned , pinned: true})
        setItems(newItems)
        setPinnedTodos([...pinnedTodos , {...newPinned , pinned: true}])
        console.log("title inside todoItem: ",titleValue ,"txtvalue inside todoItem: ",txtvalue);
    }

    const onBlurHandler = () =>{
        
        const newItems = items.map(item =>{
            if(item.id === id){
                return(
                    {...item , title: titleValue ,txtValue: txtvalue}
                )
            }return item
        })
        setItems(newItems)
    }
    return(
        <div className="todoContainer" onBlur={onBlurHandler} key={id}>
            <input type="text" name="" id="titleInput" value={titleValue} onChange={onChangeHandler} placeholder="Enter Title"/>
            <textarea type="text" name="" id="todoInput" value={txtvalue} onChange={onChangeHandler}/>
            <div className="labels"></div>
            <div className="icons-group">
                <button className="btn btn_pin"><img src={pin} alt="pin" className="icon" onClick={pinHandler}/></button>
                <button className="btn btn_label"><img src={colorPallete} alt="color" className="icon"/></button>
                <button className="btn btn_label"><img src={tag} alt="tag" className="icon"/></button>
                <button className="btn btn_label"><img src={bin} alt="bin" className="icon"/></button>
            </div>
        </div>
    )
}