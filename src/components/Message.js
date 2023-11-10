import { useState, useEffect } from 'react';

function Message({ size, featherCount }) {

  const[messageSize, setMessageSize] = useState('');
  const[message, setMessage] = useState('');

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

  useEffect(() => {
    let theMessage = '';
    switch(true) {
      case (featherCount < 1):
        theMessage = 'Oh my! Your bird is naked!';
        break;
      case (featherCount > 0 && featherCount <10):
        theMessage = 'Getting there...';
        break;
      default:
        theMessage = 'Full Turkey!';

    }
    setMessage(theMessage);
  },[featherCount])

  return (
    <div className={`message ${messageSize}`}>
      {message}
    </div>
  );
};

export default Message;
