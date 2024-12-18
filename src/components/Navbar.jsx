import React from 'react'
import { Heart } from 'lucide-react'

const Navbar = ({data}) => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-10 mb-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800 text-orange-500">Orange</div>
        <div className="flex items-center">
          <div className="bg-orange-500 gap-3 text-white px-4 py-2 rounded-full flex items-center">
            <Heart  className="mr-2 " size={20} />
            Favourites
            <h2>       {data.filter(item=>item.isFavourite).length}
            </h2>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar