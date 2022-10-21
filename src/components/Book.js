import React from 'react';
import {useThemeContext} from '../Context/ThemeContext';

function Book({imageURL, title, author}) {
  const {isDarkMode, dark, light} = useThemeContext();
  const theme = isDarkMode ? dark : light;
  return (
    <div className='col-lg-4 col-sm-6 mb-4'>
      <div className='portfolio-items'>
        <a href={title} className='portfolio-link' data-toggle='modal'>
          <div className='portfolio-hover' style={{backgroundColor: theme.hover}}>
            <div className='portfolio-hover-content'>
              <i className='fas fas-plus fa-3x'></i>
            </div>
          </div>
          <img className='img-fluid w-100' src={imageURL} alt={title} />
        </a>
        <div className='portfolio-caption'>
          <div className='portfolio-caption-heading'>
            {title}
          </div>
          <div className='portfolio-caption-subheading text-muted'>
            {author}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Book;
