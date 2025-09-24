import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedMailBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedMailBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <>
      <h2>Mailbox Details</h2>
      <p>ID: {selectedMailBox._id}</p>
      <p>Owner: {selectedMailBox.boxOwner}</p>
      <p>Size: {selectedMailBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
