import BlogList from "./BlogList";
import useFetch from "./useFetch"

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading the data...</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
  );
}
 
export default Home;

// npx json-server --watch data/db.json --port 8000