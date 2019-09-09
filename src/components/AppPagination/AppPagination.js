import React from 'react';
import {Pagination} from 'react-bootstrap';

const AppPagination = (props) => {
  const {
    updatePageLimit, pageNumber, totalRecords
  } = props;

  const totalPages = Math.ceil(totalRecords / 10);
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(<Pagination.Item onClick={ () => updatePageLimit(i) } className={(pageNumber === i ? 'active' : '')} key={i}>{i}</Pagination.Item>);
  }

  return (
    <div className="pagination-container">
      <Pagination>
        <Pagination.First onClick={ () => updatePageLimit(1) } />
        {pageNumbers}
        <Pagination.Last onClick={ () => updatePageLimit(totalPages) } />
      </Pagination>
    </div>
  );
};

export default AppPagination;

