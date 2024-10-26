import React from 'react';
import '../App.css'
import Availiable from './Availiable';
import Selected from './Selected';

const Buttons = ({handleToggleSection,isActive,handleChoosePlayerBtn,selected,handleDelete,handleAddToMore}) => {
    return (
       <div>
        <div className='flex justify-end mb-3'>
        <div className="join"> 
        <button className= {`${isActive.availiable?"join-item btn active":"join-item btn"}`} type="radio" onClick={() =>handleToggleSection("availiable")}>Available</button>
        <button className= {`${isActive.availiable?"join-item btn ":"join-item btn active"}`} type="radio" onClick={() =>handleToggleSection("selected")}>Selected ({selected.length})</button>
        </div>
        </div>

        {isActive.availiable?<Availiable handleChoosePlayerBtn={handleChoosePlayerBtn}></Availiable>:<Selected selected={selected} handleDelete={handleDelete} handleAddToMore={handleAddToMore}></Selected>}
       </div>
    );
};

export default Buttons;