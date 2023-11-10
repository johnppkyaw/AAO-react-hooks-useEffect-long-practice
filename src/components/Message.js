import { useState, useEffect } from 'react';

function Message({ size }) {

  const[messageSize, setMessageSize] = useState('');

  useEffect(() => {
    let sizename = '';

    switch (size) {
      case 'm':
        sizename = 'medium';
        break;
      case 'l':
        sizename = 'large';
        break;
      case 'xl':
        sizename = 'xlarge';
        break;
      default:
        sizename = 'small';
    }
    setMessageSize(sizename);

  }, [size]);

  return (
    <div className={`message ${messageSize}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;
