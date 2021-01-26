import React from 'react';
import './../static/scss/TodoList.scss';

const TodoList = ({form, children}) => {
    return (
        <main className="todo-list">
            <div className="title">오늘 할 일</div>
            <section className="form-wrap">
                { form }
            </section>
            <section className="todos_wrap">
                { children }
            </section>
        </main>
    );
};

export default TodoList;