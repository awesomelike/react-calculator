import React, { useReducer, useState, useEffect } from 'react';
import { useTransition, config } from 'react-spring';
import Calculator from './Calculator';
import Photographer from './Photographer';
import GithubContainer from './GithubContainer';
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
  const [src, setSrc] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const transitions = useTransition(isLoading, null, {
    from: { filter: 'blur(1rem)' },
    enter: { filter: 'blur(0)' },
    leave: { filter: 'blur(1rem)' },
    config: config.molasses,
  });

  const image = new Image();
  image.onload = () => {
    setBackground(src);
    setLoading(false);
  };

  useEffect(() => {
    const storedImage = JSON.parse(localStorage.getItem('image'));
    setBackground(storedImage ? storedImage.background : defaultImage);
    setPhotographer(storedImage ? storedImage.photographer : null);
  }, []);

  useEffect(() => {
    localStorage.setItem('image', JSON.stringify({ background, photographer }));
  }, [background, photographer]);

  useEffect(() => { image.src = src; }, [src]);

  const handleClick = async () => {
    setLoading(true);
    getRandomImage()
      .then(({ urls, user }) => {
        setSrc(urls.regular);
        setPhotographer(user);
      })
      .catch(() => {
        setBackground(defaultImage);
        setLoading(false);
      });
  };

  return (
    <InputContext.Provider value={{
      input,
      dispatchInput,
      operationClicked,
      setOperationClicked,
      equalClicked,
      setEqualClicked,
      transitions,
      isLoading,
    }}
    >
      <BufferContext.Provider value={{ buffer, setBuffer }}>
        <div className="layout" style={{ backgroundImage: `url(${background})` }}>
          <Calculator />
          <button onClick={handleClick} className="button-background" type="button" disabled={isLoading}>
            {!isLoading ? 'Change background' : 'Loading...'}
          </button>
          <Photographer photographer={photographer} />
          <GithubContainer />
        </div>
      </BufferContext.Provider>
    </InputContext.Provider>
  );
};

export { App as default };
