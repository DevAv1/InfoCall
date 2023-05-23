import React from 'react';
import './style.scss';

export const JobPositionFilter = ({ jobFilter, filter }) => {

  return (
    <div className="select-wrapper">
      <div className={filter === 0 ? 'filter-item active-item' : 'filter-item'} onClick={() => jobFilter(0)}>הכל</div>
      <div className={filter === 1 ? 'filter-item active-item' : 'filter-item'} onClick={() => jobFilter(1)}>מרכז</div>
      <div className={filter === 2 ? 'filter-item active-item' : 'filter-item'} onClick={() => jobFilter(2)}>צפון</div>
      <div className={filter === 3 ? 'filter-item active-item' : 'filter-item'} onClick={() => jobFilter(3)}>דרום</div>
      <div className={filter === 4 ? 'filter-item active-item' : 'filter-item'} onClick={() => jobFilter(4)}>ירושלים</div>
      <div className={filter === 5 ? 'filter-item active-item' : 'filter-item'} onClick={() => jobFilter(5)}>שפלה</div>
    </div>
  );
}
