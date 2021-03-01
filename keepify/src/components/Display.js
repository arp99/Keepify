import TodoItem from './TodoItem'

export default function Display({items , setItems , pinnedTodos , setPinnedTodos}){
 
    const Alltodos = () =>{
        return(
            <div className="wrapper">
                {items.length>0?<h4>All</h4>:''}
                <div className="all_todo_container">
                    {
                        items.map(({id , title , txtValue, edited , color , pinned})=>{
                            return <TodoItem 
                                        title={title}
                                        txtValue={txtValue}
                                        id={id}
                                        color={color}
                                        pinned={pinned}
                                        setItems={setItems}
                                        items={items}
                                        setPinnedTodos={setPinnedTodos}
                                        pinnedTodos={pinnedTodos}
                                        key={id+edited}
                                    />
                        })
                    }
                </div>
            </div>
        )
    }

    const PinnedTodos = () =>{
        return(
            <div className="wrapper">
                {pinnedTodos.length>0?<h4>Pinned</h4>:''}
                <div className="pinned_todo_container">
                    {
                        pinnedTodos.map(({id , title , txtValue, edited , color , pinned})=>{
                            return <TodoItem 
                                        title={title}
                                        txtValue={txtValue}
                                        id={id}
                                        color={color}
                                        pinned={pinned}
                                        setItems={setItems}
                                        items={items}
                                        setPinnedTodos={setPinnedTodos}
                                        pinnedTodos={pinnedTodos}
                                        key={id+edited}
                                    />
                        })
                    }
                </div>
            </div>
        )
    }

    return(
        <>
            <PinnedTodos />
            <Alltodos />
        </>
    )
}