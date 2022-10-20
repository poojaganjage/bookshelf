import React from 'react';
import Book from './Book';
import {useThemeContext} from '../Context/ThemeContext';
import {useContentContext} from '../Context/ContentContext';

function BookList() {
  return (
    <div>
        <Book />
    </div>
  );
}
export default BookList;
