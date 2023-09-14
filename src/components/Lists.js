import React from 'react';
import List from './List';
import '../styles/Lists.css';

export default function Lists({ budget, handleDeleteBtn, setBudget }) {
  return (
    <div>
      {budget.map((item) => (
        <List
          item={item}
          handleDeleteBtn={handleDeleteBtn}
          key={item.id}
          budget={budget}
          setBudget={setBudget}
        />
      ))}
      <div>
        <button onClick={() => setBudget([])} className='btn-delete'>
          목록 지우기
        </button>
      </div>
    </div>
  );
}
