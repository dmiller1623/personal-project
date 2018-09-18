import React from 'react';
import SelectedCard from '../SelectedCard';
import { NavLink } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

const SelectedItemsContainer = ({ additionalResources, deleteResources }) => {
  const displayResources = additionalResources.map((resource, index) => {
    return <SelectedCard 
      {...resource}
      key={index}
      deleteResources={deleteResources}
    />;
  });

  return (
    <div className='selected-items-container'>
      {displayResources}
      <NavLink className='qr-link' to='/QrcodePage'>Generate Qr Code</NavLink>
    </div>
  );
};

SelectedItemsContainer.propTypes = {
  additionalResources: PropTypes.array,
  deleteResources: PropTypes.func
};

export default SelectedItemsContainer;  