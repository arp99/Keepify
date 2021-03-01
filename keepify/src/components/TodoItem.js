import pin from '../assets/pin.png'
import colorPallete from '../assets/color-palette.png'
import bin from '../assets/delete.png'
import tag from '../assets/tag.png'

import {useState} from 'react'

export default function TodoItem({ title , txtValue , id , setItems , items , setPinnedTodos , pinnedTodos }){
    const [txtvalue , setTxtValue] = useState(txtValue)
    const [titleValue , setTitleValue] = useState(title)

    const onChangeHandler = e =>{
        const targetName = e.target.name , value = e.target.value;
        if(targetName === 'titleInput')
            setTitleValue(value);
        else if(targetName === 'todoInput')
            setTxtValue(value);
    }
    
    const pinHandler = () => {
 
        const newItems = items.filter(item=> item.id!== id);
        const newPinned = items.find(item=> item.id === id);
        setItems(newItems)
        setPinnedTodos([...pinnedTodos , {...newPinned , pinned: true}])
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

    const deleteHandler = () =>{
        //so the item can be either in pinned or not pinned , so search in both and delete
        const newPinned = pinnedTodos.filter(item=>item.id!== id);
        const newItems = items.filter(item => item.id !== id)

        setItems(newItems)
        setPinnedTodos(newPinned)
    }

    return(
        <div className="todoContainer" onBlur={onBlurHandler} key={id}>
            <input type="text" name="titleInput" className="titleInput" value={titleValue} onChange={onChangeHandler} placeholder="Enter Title"/>
            <textarea type="text" name="todoInput" className="todoInput" value={txtvalue} onChange={onChangeHandler}/>
            <div className="labels"></div>
            <div className="icons-group">
                <button className="btn btn_pin"><img src={pin} alt="pin" className="icon" onClick={pinHandler}/></button>
                <button className="btn btn_label"><img src={colorPallete} alt="color" className="icon"/></button>
                <button className="btn btn_label"><img src={tag} alt="tag" className="icon"/></button>
                <button className="btn btn_label"><img src={bin} alt="bin" className="icon" onClick={deleteHandler}/></button>
            </div>
        </div>
    )
}