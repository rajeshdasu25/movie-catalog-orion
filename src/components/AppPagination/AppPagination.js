import React from 'react';
import {Pagination} from 'react-bootstrap';

const AppPagination = (props) => {
  const {
    updatePageLimit, pageNumber, totalRecords
  } = props;

  const totalPages = Math.ceil(totalRecords / 10);
  let pageNumbers = Array.apply(null, {length: totalPages}).map(Number.call, Number);

  return (
    <div className="pagination-container">
      <Pagination>
        <Pagination.First onClick={ () => updatePageLimit(1) } />
        {pageNumbers.map(item => {
          return (item !== 0) && <Pagination.Item onClick={ () => updatePageLimit(item) } className={(pageNumber === item ? 'active' : '')} key={item}>{item}</Pagination.Item>
        })}
        <Pagination.Last onClick={ () => updatePageLimit(totalPages) } />
      </Pagination>
    </div>
  );
};

export default AppPagination;

