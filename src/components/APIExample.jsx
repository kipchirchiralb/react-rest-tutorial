import React, { useState, useEffect } from "react";

const APIExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //simulating delay
        setTimeout(async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=3"
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
          setLoading(false);
        }, 1300);
      } catch (error) {
        console.error("Error Fetching Data: ", error.message);
        setError(
          "An error occurred while fetching the data. Please try again later."
        );
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {loading ? (
        <p>Loading....</p>
      ) : error ? (
        <p style={{ color: red }}> {error} </p>
      ) : data.length < 1 ? (
        <p>Empty result</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.userId + " -- " + post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default APIExample;
