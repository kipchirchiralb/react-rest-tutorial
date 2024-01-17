import React, { useState } from "react";
import axios from "axios";

const CreateData = () => {
  const [newData, setNewData] = useState("");
  const handleCreate = async () => {
    try {
      const newCreation = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          newData,
        }
      );
      console.log(newCreation.data);
      alert("Data created successfully!");
      // Optionally, fetch and update the displayed data
    } catch (error) {
      console.error("Error Creating data: ", error);
    }
  };
  return (
    <div>
      <h2>Create New Post</h2>
      {/* Controlled Input -  The value of the input is controlled by the component's state. */}
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />

      <button onClick={handleCreate}> Create</button>
    </div>
  );
};
export default CreateData;
