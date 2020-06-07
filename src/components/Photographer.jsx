/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { animated } from 'react-spring';
import InputContext from '../context/inputContext';

const Photographer = ({ photographer }) => {
  const { transitions } = useContext(InputContext);

  return transitions.map(({ props, key }) => (photographer && (
    <animated.div className="unsplash-container" key={key} style={{ ...props }}>
      <span>Photo by &nbsp;</span>
      {' '}
      <a href={`${photographer.links.html}?utm_source=ReactCalculator&utm_medium=referral`} className="unsplash-container__link">{photographer.name}</a>
      {' '}
      <span>&nbsp; on &nbsp;</span>
      {' '}
      <a href="https://unsplash.com/?utm_source=ReactCalculator&utm_medium=referral" className="unsplash-container__link">Unsplash</a>
    </animated.div>
  )));
};

export { Photographer as default };
