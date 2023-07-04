import React from 'react'

function SearchBox() {
  return (
    <div className="my-auto">

      <div className="hidden border border-black my-auto px-4 py-2 bg-[#D9D9D936] md:block lg:w-96 lg:h-14">
          <form className="flex">
              <input type="text" placeholder="" name="search" className="w-full border-none bg-transparent" />
                  <button type="submit"><i className="fa fa-search" style={{fontSize:"36px", color:"#3CAEA3"}}></i></button>
          </form>
      </div>
      <div className="align-middle ml-12 md:hidden text-center">
        <button type="submit"><i className="fa fa-search" style={{fontSize:"36px", color:"#3CAEA3",}}></i></button>
      </div>

    </div>

    
    
  )
}

export default SearchBox