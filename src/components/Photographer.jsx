/* eslint-disable react/prop-types */
import React from 'react';

const Photographer = ({ photographer }) => (photographer && (
<div className="unsplash-container">
  <span>Photo by &nbsp;</span>
  {' '}
  <a href={`${photographer.links.html}?utm_source=ReactCalculator&utm_medium=referral`} className="unsplash-container__link">{photographer.name}</a>
  {' '}
  <span>&nbsp; on &nbsp;</span>
  {' '}
  <a href="https://unsplash.com/?utm_source=ReactCalculator&utm_medium=referral" className="unsplash-container__link">Unsplash</a>
</div>
));

export { Photographer as default };
