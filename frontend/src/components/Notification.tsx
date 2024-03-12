interface NotificationProps {
  message: string | null;
  setMessage: (value: string | null) => void;
}

const Notification = ({ message, setMessage }: NotificationProps) => {
  const hide = () => {
    if (message) {
      setMessage(null);
    }
  };

  if (message === null) return;

  return (
    <div id="notification-modal">
      <span className="modal-close" onClick={hide}>
        x
      </span>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
