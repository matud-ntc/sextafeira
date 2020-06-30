import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={classes.centerDiv}>
      <ul>
        {pageNumbers.map(number => (
          <li key={number} className={classes.pagination}>
            <a className={classes.link} onClick={() => paginate(number)} >
              {number}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Pagination;