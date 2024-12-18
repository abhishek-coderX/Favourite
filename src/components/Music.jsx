import React from "react";

const Music = ({ image, name, des, fav ,handleClick,index}) => {
  return (
    <div className=" text-white p-5 ">
      <div className="w-52 flex flex-col gap-2 bg-white rounded-md p-4 text-black ">
        <div className="relative">
        <img 
         src={image}
              alt="Music Cover" 
            className="w-full h-32 object-cover rounded-md"
          />         
        </div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <h3>{des}</h3>
        <button onClick={()=>handleClick(index)} className={`${fav===false? "bg-orange-500":"bg-teal-500"} p-2 text-white text-xl rounded-md font-semibold hover:scale-100`}>{fav ==false ? "Add to favourites":"Added"}</button>
      </div>
    </div>
  );
};

export default Music;



