import React, { useState } from "react";

import axios from "axios";

const UpdateData = () => {
  const [updatedData, setUpdatedData] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/2",
        {
          userId: 1,
          id: 2,
          title: updatedData,
          body: updatedData,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error while updating post.", error);
    }
  };
  return (
    <div>
      <h2>Update Post</h2>
      <input
        type="text"
        value={updatedData}
        onChange={(e) => setUpdatedData(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateData;
