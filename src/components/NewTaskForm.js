import React, {useState} from "react";

function NewTaskForm({categories}) {
  
    const [details,setDetails] = useState('')
    const [category,setCategory] = useState('')
  
  function handleDetails(e){
    setDetails(e.target.value)
  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails} value={details} />
      </label>
      <label>
        Category
        <select name="category" value={category}>
          {/* render <option> elements for each category here */}
          {categories.map(category => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
