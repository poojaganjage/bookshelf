import React from 'react';
import Book from './Book';
import {useThemeContext} from '../Context/ThemeContext';
import {useContentContext} from '../Context/ContentContext';

function BookList() {
  const {books} = useContentContext();
  const {isDarkMode, dark, light, changeTheme} = useThemeContext();
  const theme = isDarkMode ? dark : light;
  return (
    <section className='page-section' id='portfolio' style={{backgroundColor: theme.bg, color: theme.color}}>
      <div className='container'>
        <div className='text-right'>
          <button className='btn btn-danger' onClick={changeTheme}>
            Change Theme
          </button>
        </div>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>
            BookShelf
          </h2>
          <h3 className='section-subheading text-muted'>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </h3>
        </div>
        <div className='row'>
          {books.map((book, index) => {
            return <Book key={index} {...book} />
          })}
        </div>
      </div>
    </section>
  );
}
export default BookList;
