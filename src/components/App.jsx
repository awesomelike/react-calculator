import React, { useReducer, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import Calculator from './Calculator';
import Photographer from './Photographer';
import InputContext from '../context/inputContext';
import BufferContext from '../context/bufferContext';
import inputReducer from '../reducers/inputReducer';
import getRandomImage from '../util/api';

const defaultImage = '/react-calculator/images/mojave-20.jpg';

const App = () => {
  const [input, dispatchInput] = useReducer(inputReducer, '0');
  const [buffer, setBuffer] = useState('');
  const [operationClicked, setOperationClicked] = useState(false);
  const [equalClicked, setEqualClicked] = useState(false);

  const [background, setBackground] = useState(defaultImage);
  const [photographer, setPhotographer] = useState(null);

  const transitions = useTransition(background, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    const storedImage = JSON.parse(localStorage.getItem('image'));
    setBackground(storedImage ? storedImage.background : defaultImage);
    setPhotographer(storedImage ? storedImage.photographer : null);
  }, []);

  useEffect(() => {
    localStorage.setItem('image', JSON.stringify({ background, photographer }));
  }, [background, photographer]);

  const handleClick = async () => {
    getRandomImage()
      .then(({ urls, user }) => {
        setBackground(urls.regular);
        setPhotographer(user);
      })
      .catch(() => setBackground(defaultImage));
  };
  return (
    <InputContext.Provider value={{
      input,
      dispatchInput,
      operationClicked,
      setOperationClicked,
      equalClicked,
      setEqualClicked,
    }}
    >
      <BufferContext.Provider value={{ buffer, setBuffer }}>
        {transitions.map(({ props, key }) => (
          <animated.div className="layout" key={key} style={{ ...props, backgroundImage: `url(${background})` }}>
            <Calculator />
            <button onClick={handleClick} className="button-background" type="button">Change background</button>
            <Photographer photographer={photographer} />
            <div className="github-container">
              <img src="react-calculator/github.png" className="github-container__logo" alt="Github logo" />
              <a href="https://github.com/awesomelike" className="github-container__link">@awesomelike</a>
            </div>
          </animated.div>
        ))}

      </BufferContext.Provider>
    </InputContext.Provider>
  );
};

export { App as default };
