import React from 'react';
import './Pagination.sass'

function Pagination(props) {
  return (
    <section className="pagination">
      <div className="pagination__wrapper">
        <div className="pagination__pages">
          <div className="pagination__btn" />
          <div className="pagination__btn" />
        </div>
        <div className="pagination__counter" />
      </div>
    </section>
  );
}

export default Pagination;