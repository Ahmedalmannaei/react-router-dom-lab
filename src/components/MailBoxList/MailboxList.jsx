// src/components/MailboxList/MailboxList.jsx

import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  if (!mailboxes.length) {
    return <h2>No mailboxes found.</h2>;
  }

  return (
    <>
      <h2>Mailbox List</h2>

      {mailboxes.map(({ _id }) => (
        <Link to={`/mailboxes/${_id}`} key={_id}>
          <div className="mail-box">Mailbox {_id}</div>
        </Link>
      ))}
    </>
  );
};

export default MailboxList;
