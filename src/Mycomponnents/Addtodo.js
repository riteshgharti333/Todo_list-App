import React, { useState } from "react";

const Addtodo = ({addTodo}) => {
    const [title , setTilte] = useState("");
    const [desc , setDesc] = useState("");

const submit = (e) =>{
      e.preventDefault();
      
      if(!title || !desc ){
          alert("Title or Desc can not be blank !")
      }
    addTodo(title, desc);
}

  return (
    <>
    <div className="container my-3">
        <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="tilte" className="form-label">
            Todo Title
          </label>
          <input
            type="text" value={title} onChange={(e) =>{setTilte(e.target.value)}}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text" value={desc} onChange={(e) =>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
    
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
      </div>
    </>
  );
};

export default Addtodo;
