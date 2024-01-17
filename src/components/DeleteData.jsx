import axios from "axios";

const DeleteData = () => {
  const handleDelete = async () => {
    try {
      await axios.delete("https://api.example.com/data/1");
      alert("Data deleted successfully!");
      // Optionally, fetch and update the displayed data
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h2>Delete Data</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteData;
