import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImEye } from 'react-icons/im'

export default function FilterCat(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7108/api/Categories`).then(response => {
      console.log(response);
      setCategories(response.data);
    });
  }, []);

  return (
    <div className='text-center mt-5'>
      <button onClick={() => props.setFilter(0)} className="btn btn-outline-danger bg-dark m-1">
        All
      </button>
      {categories.map((cat) => (
        <button key={cat.categoryId} onClick={() => props.setFilter(+cat.categoryId)} className="btn btn-outline-danger bg-dark m-1">
        {cat.catName}
      </button>      
      ))}
      <button onClick={() => props.setShowCompleted(!props.showCompleted)} className="btn btn-outline-danger bg-dark m-1">
        {props.showCompleted ? 'Hide Completed ' : 'Show Completed '}
        <ImEye />
      </button>
    </div>
  );
}
