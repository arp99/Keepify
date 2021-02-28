import TodoItem from './TodoItem'

export default function Display({items , setItems , pinnedTodos , setPinned}){
    const AllTodos = items.map(({id , title , txtValue})=>{
                        // if(pinned === false)
                        return( 
                            <TodoItem 
                                title={title} 
                                txtValue={txtValue} 
                                id={id} 
                                key={id} 
                                setItems={setItems} 
                                items={items} 
                                setPinnedTodos={setPinned}
                                pinnedTodos={pinnedTodos} 
                            /> 
                            )
                        });
    // console.log("pinnedTodos props inside display: ", pinnedTodos)
    const PinnedTodos = pinnedTodos.map(({id , title , txtValue })=>{
                            return(
                                <TodoItem 
                                    title={title} 
                                    txtValue={txtValue} 
                                    id={id} 
                                    key={id} 
                                    setItems={setItems} 
                                    items={items} 
                                    setPinnedTodos={setPinned}
                                    pinnedTodos={pinnedTodos}
                                /> 
                            )
                        })

    // console.log("pinned-todos inside display: " , PinnedTodos)
    // console.log("All-todos inside display: " , AllTodos)
    return(
        <>
            {<h4>{PinnedTodos.length>0?"Pinned":""}</h4>}
            {PinnedTodos.length>0? PinnedTodos:''}
            <h4>{AllTodos.length>0?"All":''}</h4>
            {AllTodos}
        </>
    )
}