// import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';

// uuidv4();
// const TodoList = () => {
// let[isUpdate,setIsUpdate]=useState(false)
//     let[tasks,setTasks]=useState([{task:'Sample Task',isDone:false ,id : uuidv4()}]);
// let [text,setText]=useState('')
// let [tbu_id,setTbu_id]=useState(0);

// const handleUpdate=()=>{
// console.log('handleUpdate Called',text)
// const u_list=tasks.map((item)=>{
// if( item.id===tbu_id){
// item.task=text
// }

// return item
// })
// setTasks(u_list);
// setTbu_id(null);
// }
// const handleChange=(event)=>{
// // setText((text)=>text+1);
// // setText((text)=>text+1);
// // setText((text)=>text+1);
//    setText(event.target.value);
//   }
// const handleAddTask=()=>{

// if(text.trim()===''){
// alert('Pls enter task text')
// return;

// }

// // Check if the task already exists
// const isDuplicate = tasks.some(task => task.task.toLowerCase() === text.trim().toLowerCase());
// if (isDuplicate) {
//   // Prevent adding a duplicate task
//   alert('Pls enter task text')
//   return;
// }
// else
// {


//   const newTask={task:text,isDone:false,id:uuidv4()};
//   // setTasks([...tasks,newTask]);
// setTasks((tasks)=>[...tasks,newTask])

//   setText('');}

 


// }
// const handleDelete=(id)=>{
// console.log(id)
//  const newTasks = tasks.filter((item) =>
// id!=item.id)//used callback function for deleting each item
// setTasks(newTasks)

// }
// const handleComplete=(id)=>
// {
// console.log(id)
//  let completed_tasks=tasks.map((item)=>{
//   if(id===item.id)
//     item.isDone=true;
//   return item;

// })
// setTasks(completed_tasks);

// }

// const handleEdit=(id)=>
//   {
//   console.log(id)
//  setTbu_id(id)
//   setIsUpdate (true)
// tasks.map((item)=>{
// if(id===item.id)
// setText(item.task)
// })
//   }

  
//   return (
//     <div className='text-center'>
//       <h2 className='text-center'>Welcome To Sonali's  TodoList </h2>

//       <div className="input-group input-group-lg">
//   <span className="input-group-text" id="inputGroup-sizing-lg">Enter Your Task</span>
//   <input value={text}  onChange={handleChange}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/> 
//   {isUpdate? <button    className="mx-3 btn btn-dark" onClick={handleUpdate}>Update</button>
//   :
//   <button   onClick={handleAddTask} className="mx-3 btn btn-primary" >Add</button>}
// </div>
// <ol >{tasks.map(item=>(
//     <li key={item.id} > <span style={{ textDecoration:item.isDone? 'line-through':'normal' }}>{item.task}</span>
//     <span>
// <button className="btn btn-danger m-2" onClick={()=>handleDelete(item.id)}>Delete</button>

// <button className="btn btn-success m-2" onClick={()=>handleEdit(item.id)}>Edit</button>

// <button className="btn btn-warning m-2" onClick={()=>handleComplete(item.id)} >Complete</button>


//     </span>

//     </li>
// )



// )}</ol>


//     </div>

//   )
// }

// export default TodoList
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TodoList = () => {

    let[isupdate, setIsUpdate]=useState(false);
    let [tasks, setTasks]=useState([{task:'Sample task', isDone:false, id:uuidv4()}]);
    let[tb_updated, settb_updated]=useState(0);
    let[text, setText]=useState('');
    const handleChange=(event)=>{
      setText(event.target.value);
    };

    const handleAddTask = () => {
      const isDuplicate = tasks.some((task) => task.task.toLowerCase() === text.trim().toLowerCase());
      if (text.trim() === '') {
        // If the text is empty or contains only spaces, don't add the task
        alert('Task cannot be empty');
        return;
      }
      else if(isDuplicate){
        alert('Task already exists');
        return;
        
      }
      else{
    
      const newTask = { task: text, isDone: false, id: uuidv4() };
      setTasks((tasks) => [...tasks, newTask]);
      setText('');
      }
    };
    
    const handleDelete=(id)=>{
      console.log(id);
      const newTasks=tasks.filter((item)=>id!=item.id);
      setTasks(newTasks);

    };
    const handleComplete=(id)=>{
      let complete_task=tasks.map((item)=>
      {
        if(id===item.id)
          item.isDone=true;
        return item;
      }
      )
      setTasks(complete_task); 
    };
    const handleEdit=(id)=>{
      console.log(id);
      settb_updated(id);
      setIsUpdate(true);
      tasks.map((item)=>
        {
          if(id===item.id)
            setText(item.task);
        }
        )
       
    };
    const handleUpdateTask=()=>{
      console.log('Update Called',text);
      const u_list=tasks.map((item)=>{
        if(item.id===tb_updated)
        {
          item.task=text;
        }
        return item;
      })
      setTasks(u_list)
};
  return (
    <div className='text-center'>
        <h2>Welcome to Kalyani's TodoList</h2>
        <div className="input-group input-group-lg text-center ">
  <span className="input-group-text" id="inputGroup-sizing-lg">Enter Your Task:</span>
  <input value={text} onChange={handleChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  {isupdate?
              <button  onClick={handleUpdateTask} className="btn btn-dark mx-3">Update</button> :
              <button onClick={handleAddTask} className="btn btn-primary mx-3">Add</button>
              
            }

</div>
<ol>
    {
        tasks.map( item=>(
            <li key={item.id}>
            <span style={{textDecoration: item.isDone?'line-through':'normal'}}>{item.task}
            </span>
            <span>
              
              <button className="btn btn-danger m-2" onClick={()=> handleDelete(item.id)}>Delete</button>
              <button className="btn btn-success m-2" onClick={()=>handleEdit(item.id)}>Edit</button>
              <button className="btn btn-warning m-2" onClick={()=>handleComplete(item.id)}>Complete</button>
            </span>
            </li>
        )

        )
    }
</ol>

    </div>
  )
}
