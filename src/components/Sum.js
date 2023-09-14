import React from 'react';
import '../styles/Sum.css';

export default function Sum({ budget }) {
  let total = 0;
  budget.forEach((element) => total += Number(element.amount));
  return <div className='sum'>총지출 : {total}원</div>;
}
