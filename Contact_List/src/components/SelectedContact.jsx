import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      const fetchContact = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
          const data = await response.json();
          setContact(data);
        } catch (error) {
          console.error('Error fetching contact:', error);
        }
      };

      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
}

export default SelectedContact;
