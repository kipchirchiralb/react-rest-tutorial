import axios from "axios";
import React, { useState, useEffect } from "react";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${userId}`
        );
        console.log(response.data);
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUser()
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data ...</p>
      )}
    </div>
  );
};

export default UserProfile;
