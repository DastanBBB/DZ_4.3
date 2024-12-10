import React from 'react';
import styles from './todosPage.module.css'
import Todo from "../../components/todo/Todo";

function TodosPage(props) {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className={styles.todosPage}>
            <h1>Todos Page</h1>
            {todos.map((item, index) => (
                    <Todo key= {index} todo={item} />  //строка через пропс
                ))}
        </div>
    );
}

export default TodosPage;