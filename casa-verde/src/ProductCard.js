import SelectMenu from './SelectMenu.js'


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }


export default function Example() {

  return (
    <div className="bg-white border-2 border-black rounded-lg flex flex-row h-40 w-96 font-sans lg:h-[33rem] lg:w-80 lg:flex-col  ">
      {/* <div className="   "> */}
        {/* Image gallery */}
        {/* <div className=""> */}
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-32 w-32 my-auto mx-4 lg:h-64 lg:w-64 lg:mx-auto lg:mt-7 lg:mb-4" 
            />
        {/* </div> */}

        {/* Product info */}
        <div className="flex-1 max-w-2xl mt-3 ml-1.5 lg:ml-7 lg:mt-0">
          {/* <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"> */}
            <h1 className="text-sm font-bold tracking-tight text-black text-left mb-1 lg:text-xl lg: mb-1">{product.name}</h1>
          {/* </div> */}

          {/* Options */}
          {/* <div className="mt-4 lg:row-span-3 lg:mt-0"> */}
            <h2 className="sr-only">Product information</h2>
            <p className="text-base tracking-tight text-black text-left lg:text-2xl">{product.price}</p>

            <form className="">

              {/* Sizes */}
              <SelectMenu />
 

              <button
                type="submit"
                className=" bg-[#F6D55C] flex flex-none items-center justify-center rounded-md border border-transparent w-48 h-8 text-base font-medium hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 lg:h-14 lg:w-64 lg:text-xl"
              >
                Add to bag<img src="/cart.png" alt="cart" className="h-4 w-4 ml-2 object-contain lg:h-5 lg:w-5"/> 
              </button>
            </form>
          {/* </div> */}

        </div>
      {/* </div> */}
    </div>
  )
}