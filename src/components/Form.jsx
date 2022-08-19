import React,{useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    //Crear elemento
    const [todo, setTodo] = useState({})
    //Guarda el arreglo de elementos
    const [todos, setTodos] = useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('El campo no puede estar vacio');
            return
        }
        setTodos([...todos, todo])
        let nombre = document.getElementById('name')
        nombre.value = ''
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e=>{e.preventDefault()}}>
        <label>Agregar tarea</label><br />
        <input id='name' type="text" name="todo" onChange={handleChange}/>
        <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value,index)=>(
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />
            ))
        }
        </>
    )
}

export default Form