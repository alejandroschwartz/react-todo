import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
  return (<>
    <div className="TodoLoading__list">
      <div className="card-skeleton">
        <div className="animated-background"> 
        </div>
      </div>
      <div className="card-skeleton">
        <div className="animated-background"> 
        </div>
      </div>
      <div className="card-skeleton">
        <div className="animated-background"> 
        </div>
      </div>
    </div>



    {/* <ul>
      <li className="TodoLoading__list skeleton-box" style={{width: '640px'}}></li>
      <li className="TodoLoading__list">
        <div className='skeleton-box'></div>
      </li>
    </ul>
    <span className="skeleton-box" style={{width: '80%'}}></span>
    <p>
      <span className="skeleton-box" style={{width: '80%'}}></span>
      <span className="skeleton-box" style={{width: '90%'}}></span>
      <span className="skeleton-box" style={{width: '84%'}}></span>
    </p> */}
  </>)
};

export { TodoLoading };