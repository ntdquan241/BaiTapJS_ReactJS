import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [submittedUser, setSubmittedUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUser(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* HIỂN THỊ BÊN DƯỚI */}
      {submittedUser && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã submit:</h3>
          <p>Name: {submittedUser.name}</p>
          <p>Email: {submittedUser.email}</p>
          <p>Age: {submittedUser.age}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
