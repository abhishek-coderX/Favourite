import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Music from "./components/Music";

const App = () => {
  const Data = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1417752495/photo/african-man-singing-and-gesturing-with-his-hands.webp?a=1&b=1&s=612x612&w=0&k=20&c=xz3JFpl8aiOFdxU1PpFXySXLNGFO4I7mhvNq10sybxA=",
      artistName: "Olivia Rodrigo",
      description: "Driver's License",
      isFavourite: false,
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1441472574/photo/young-african-performer-recording-his-new-track-in-recording-studio.jpg?s=612x612&w=0&k=20&c=r1IuvkV7DtR7WXbZ3UzbZM7h50xxBv-iDygcw3sRPl4=",
      artistName: "Lil Nas X",
      description: "Industry Baby",
      isFavourite: true,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1482618606784-2ca7968c062e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww",
      artistName: "Billie Eilish",
      description: "Happier Than Ever",
      isFavourite: false,
    },
    {
      id: 4,
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      artistName: "Drake",
      description: "Way 2 Sexy",
      isFavourite: true,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1521394095254-d70a3fe40353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNpbmdlciUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D",
      artistName: "The Weeknd",
      description: "Blinding Lights",
      isFavourite: false,
    },
    {
      id: 6,
      image: "https://plus.unsplash.com/premium_photo-1703113592068-be41513b7451?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFwcGVyfGVufDB8fDB8fHww",
      artistName: "Adele",
      description: "Easy On Me",
      isFavourite: true,
    },
  ];
  
  

  const [songdata, setSongData] = useState(Data);
  const handleClick=(index)=>{

    setSongData((prev)=>{
     return  prev.map((item,itemIndex)=>{
        if(itemIndex===index)
          return {...item, isFavourite:!item.isFavourite}
      return item
    })
    })
  }

  return (
    <div className="bg-gray-800 h-screen w-full text-white pt-24 flex flex-row flex-wrap">
      <Navbar data={songdata}/>
      {/* <Music/> */}
      {songdata.map((item, index) => (
        <Music
          key={item.id}
          image={item.image}
          name={item.artistName}
          des={item.description}
          fav={item.isFavourite}
          handleClick={handleClick}
          index={index}
         
        />
      ))}
    </div>
  );
};

export default App;
