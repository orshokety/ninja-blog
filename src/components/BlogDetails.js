import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDitails() {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  function handleClick() {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/')
    });
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loadin...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
export default BlogDitails;
