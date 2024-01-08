import React from "react";

// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({img}) => {
  return (
    <div className="max-w-sm pb-10 mb-4 border border-slate-300 rounded-2xl overflow-hidden shadow-lg shadow-slate-500">
        <div className="w-[90%] mx-auto p-3">
            <img className="rounded-2xl" src={img} alt="Sunset in the mountains" />
        </div>
  <div className="px-6 py-1 flex items-center justify-between">
    <h3 className="font-bold text-xl">The Coldest Sunset</h3>
    <div className="flex gap-1">
        <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
        <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
        <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
        <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
        <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
    </div>
  </div>
    <div className="px-6">
        <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, itaque.
        </p>
    </div>
  
</div>
  );
};

export default Card;
