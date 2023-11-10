import { useState, useEffect } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  const [size, setSize] = useState('m');
  const [sizeClass, setSizeClass] = useState('');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [colors, setColors] = useState([]);

  const featherCountHandler = (e) => {
    const count = parseInt(e.currentTarget.value, 10);
    console.log(count);
    if (!isNaN(count) && (count >= 0 && count <= 10)) {
      setFeatherCount(count);
    }
  }

  useEffect(() => {

    const colorArr = [];
    if(isRed) colorArr.push('red');
    if(isOrange) colorArr.push('orange');
    if(isBrown) colorArr.push('brown');
    if(isLightBrown) colorArr.push('light-brown');
    if(isYellow) colorArr.push('yellow');
    setFeatherColors(preArr => colorArr);

  }, [isRed, isOrange, isBrown, isLightBrown, isYellow])

  useEffect(() => {
    const newColors=[];
    for (let i=0; i<featherCount; i++) {
      newColors.push(featherColors[i % featherColors.length]);
    }
    setColors(prev => newColors);
  }, [featherCount, featherColors])

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
    setSizeClass(sizename);
  }, [size]);

  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize('s')} disabled={size==='s'}>Small</button>
        <button onClick={() => setSize('m')} disabled={size==='m'}>Medium</button>
        <button onClick={() => setSize('l')}  disabled={size==='l'}>Large</button>
        <button onClick={() => setSize('xl')}  disabled={size==='xl'}>X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={featherCountHandler}
          value={featherCount}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls-colors">
        <div>Feather Color(s):</div>
        <div>
        <label><input
          type="checkbox"
          onChange={(e) => setIsRed(e.currentTarget.checked)}
        />Red</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsOrange(e.currentTarget.checked)}
        />Orange</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsBrown(e.currentTarget.checked)}
        />Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
        />Light Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsYellow(e.currentTarget.checked)}
        />Golden Yellow</label>
        </div>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        sizeClass={sizeClass}
        featherCount={featherCount}
        colors={colors}
      />
      <Message
        sizeClass={sizeClass}
        featherCount={featherCount}
      />
    </>
  );
}

export default App;
