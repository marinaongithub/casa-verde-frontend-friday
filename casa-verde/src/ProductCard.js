import SelectMenu from './SelectMenu.js'

export default function ProductCard(props) {

  return (

  <div className="">
    {/* <h2 className="w-full">{props.title}</h2> */}
    <div className="bg-white border-2 border-black rounded-lg flex flex-row h-40 w-[295px] font-sans m-2 lg:h-[33rem] lg:w-80 lg:flex-col lg:m-8">
      {/* <div className="   "> */}
        {/* Image gallery */}
        {/* <div className=""> */}
            <img
              src={props.images[0].src}
              alt={props.images[0].alt}
              className="h-32 w-32 my-auto mx-3.5 lg:h-64 lg:w-64 lg:mx-auto lg:mt-7 lg:mb-4" 
            />
        {/* </div> */}

        {/* Product info */}
        <div className="flex-1 mt-3 ml-0 mr-3 lg:mx-7 lg:mt-0">
          {/* <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"> */}
            <h1 className="text-sm font-bold tracking-tight text-black text-left mb-1 lg:text-xl lg: mb-1">{props.name}</h1>
          {/* </div> */}

          {/* Options */}
          {/* <div className="mt-4 lg:row-span-3 lg:mt-0"> */}
            <h2 className="sr-only">Product information</h2>
            <p className="text-base tracking-tight text-black text-left lg:text-2xl">{props.price}</p>

            <form className="">

              {/* Sizes */}
              <SelectMenu options={props.options} />
 

              <button
                type="submit"
                className=" bg-[#F6D55C] flex items-center justify-center rounded-md border border-transparent min-w-full max-w-48 h-8 text-base font-medium hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 lg:h-14 lg:w-64 lg:text-xl"
              >
                Add to bag<img src="/images/cart.png" alt="cart" className="h-4 w-4 ml-2 object-contain lg:h-5 lg:w-5"/> 
              </button>
            </form>
          {/* </div> */}

        </div>
      {/* </div> */}
    </div>
  </div>
  )
}