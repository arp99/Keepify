import TodoItem from './TodoItem'

export default function Display({items , setItems , pinnedTodos , setPinnedTodos}){
 
    const Alltodos = () =>{
        return(
            <div className="all_todo_container">
                <h4>{items.length>0?'All':''}</h4>
                {
                    items.map(({id , title , txtValue, edited})=>{
                        return <TodoItem 
                                    title={title}
                                    txtValue={txtValue}
                                    id={id}
                                    setItems={setItems}
                                    items={items}
                                    setPinnedTodos={setPinnedTodos}
                                    pinnedTodos={pinnedTodos}
                                    key={id+edited}
                                />
                    })
                }
            </div>
        )
    }

    const PinnedTodos = () =>{
        return(
            <div className="pinned_todo_container">
                <h4>{pinnedTodos.length>0?'Pinned':''}</h4>
                {
                    pinnedTodos.map(({id , title , txtValue, edited})=>{
                        return <TodoItem 
                                    title={title}
                                    txtValue={txtValue}
                                    id={id}
                                    setItems={setItems}
                                    items={items}
                                    setPinnedTodos={setPinnedTodos}
                                    pinnedTodos={pinnedTodos}
                                    key={id+edited}
                                />
                    })
                }
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