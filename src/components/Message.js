import { useState, useEffect } from 'react';

function Message({ sizeClass, featherCount }) {

  const[message, setMessage] = useState('');

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
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;
