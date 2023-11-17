import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Create() {
  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[author, setAuthor] = useState('Neha');
  const[isPending, setIsPending] = useState(false);

  const history = useHistory();
 
  const handleSubmit=(e)=>{
   e.preventDefault();

   const blog = {title, body, author};
   setIsPending(true);

   fetch('http://localhost:8000/blogs',{
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(blog)
   }) .then(()=>{
      console.log('New Blog Added')
      setIsPending(false);
      history.push('/');
   }).catch(err =>{
     console.log("Blog not added!"+ err);
  })
}
  return (
    <div className="create">
     <h2> Add a New Blog</h2>
     <form onSubmit={handleSubmit} >
      <label> Blog Title:
        <input type = "text" required onChange={(e)=>setTitle(e.target.value)}/>
      </label>
      <label> Blog Body:
        <textarea required onChange={(e)=>setBody(e.target.value)}/>
      </label>
      <label> Blog Author:
        <select onChange={(e)=>setAuthor(e.target.value)}>
     
              <option value = "Neha">Neha</option>
              <option value = "Tina">Tina</option>
              <option value = "Avi">Avi</option>
         </select>
      </label>
      {!isPending && <button>Add Blog</button>}
      
      {isPending && <button>Adding Blog...</button>}

     </form>
      </div>
)
}
