import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getPosts = async () => {
    setLoading(true);
    const request = await axios.get("http://localhost:3001/v1/api/posts");

    setLoading(false);
    setData(request.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }
  console.log(data);
  return (
    <div className="App">
      Posts:
      {data.map((post) => {
        return <p key={post.id}>Title: {post.title}</p>;
      })}
    </div>
  );
}

export default App;
