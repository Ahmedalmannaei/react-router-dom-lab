// src/components/MailboxForm/MailboxForm.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  };
  return (
    <>
      <h2>Create a New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>Owner Name:</label>
        <input
          value={boxOwner}
          onChange={(event) => setBoxOwner(event.target.value)}
          required
        />
        <label>Box Size:</label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default MailboxForm;
