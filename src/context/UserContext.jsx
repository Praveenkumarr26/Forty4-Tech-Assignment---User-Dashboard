import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  const addUser = (newUser) => {
    // Client-side ID generation
    const id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    // Add default address/company if missing to avoid crashes and ensure data consistency
    const userWithDefaults = {
      ...newUser,
      id,
      address: newUser.address || { street: 'Unknown', city: 'Unknown', zipcode: '', geo: { lat: '0', lng: '0' } },
      company: newUser.company || { name: 'Freelance' }
    };
    setUsers([...users, userWithDefaults]);
  };

  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, loading, error, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
