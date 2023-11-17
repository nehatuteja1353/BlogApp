import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function BlogDetails() {
     const{ id } = useParams();
     const{ error, isPending, data:blog } = useFetch('http://localhost:8000/blogs/' + id);
     const history = useHistory();

     const handleDelete = () =>{
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(()=>{
        console.log("Blog Deleted");
        history.push('/');
      })
     }
  return (
    <div className = "blog-details">
        
            { isPending && <div> Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (
            <article>
            <h2> {blog.title}</h2>
            <p> Written By: {blog.author}</p>
            <div>{blog.body}</div>
            </article>
            )}
            <button onClick= {handleDelete}> Delete Blog</button>
    </div>
  )
}
