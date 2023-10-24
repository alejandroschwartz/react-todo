import React from 'react';
import './TodoLoading.scss';

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
  </>)
};

export { TodoLoading };