import React from 'react'

function SearchBox() {
  return (
    <div className="border border-black my-auto px-4 py-2 bg-[#D9D9D936] lg:w-96 lg:h-14">
        
        <form className="flex">
            <input type="text" placeholder="" name="search" className="w-full outline-none bg-transparent" />
                <button type="submit"><i className="fa fa-search" style={{fontSize:"36px", color:"#3CAEA3"}}></i></button>
        </form>
    </div>
    
  )
}

export default SearchBox