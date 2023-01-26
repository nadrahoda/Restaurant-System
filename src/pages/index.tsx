import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import { useRef } from 'react'
export default function Home() {
  const price = useRef(null)
  const product = useRef(null)
  const home = useRef(null)
  const productScroll = () => product.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
const homeScroll = ()=> home.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  const priceScroll = () => price.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
  return (
    <><>  <center>

    <div ref={home} style={{position:"fixed",width:"100%"}}>
    <nav className="nav flex flex-wrap items-center justify-between px-4">
  <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
      <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
      <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
      <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
    </svg>
    <span className="font-semibold text-xl tracking-tight">RestrOrder</span>
  </div>

  <input className="menu-btn hidden" type="checkbox" id="menu-btn"></input>
  <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span className="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li className="border-t md:border-none">
      <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
    </li>
    
    <li className="border-t md:border-none">
      <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
    </li>
    
    <li className="border-t md:border-none">
      <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Blog</a>
    </li>
    
  </ul>
</nav>


</div>
<br></br>	<br></br>	<br></br>
<br></br><br></br><br></br>
<h1 className=" text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-5xl">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">RestrOrder</span></h1>

</center>
<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... mt-10 py-20 hero">
  <div className="container mx-auto px-6">
    <div className="text-4xl font-bold mb-2 text-white">
     Order food before stepping foot in resturants
    </div>
    <div className="text-2xl mb-8 text-gray-200">
First in its class
    </div>
    <Link href="/simpleuni">
    <button className=" hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full py-6 px-8 shadow-lg uppercase  bg-gradient-to-r to-purple-100 from-sky-300">
      Try Restaurants
    </button></Link>
  </div>
</div>




<section className="mt-32 container mx-auto px-6 py-10">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-0">
    Features
  </h2>
  <div className="flex items-center flex-wrap mb-10">
    <div className="w-full md:w-1/2 px-4">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">
        Responsive to the core
      </h4>
      <p className="text-gray-600 mb-8">
        Every Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.
      </p>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <img src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png" alt="responsive"></img>
    </div>
  </div>
  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2 px-4">
      <img src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png" alt="component-friendly"></img>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">
        Component-friendly
      </h4>
      <p className="text-gray-600 mb-8">
        While you can do a lot with just utility classes, as a project grows it can be useful to codify common patterns into higher level abstractions.
      </p>
    </div>
  </div>
  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2 px-4">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">
        Designed to be customized
      </h4>
      <p className="text-gray-600 mb-8">
        If it makes sense to be customizable, Tailwind lets you customize it. This includes colors, border sizes, font weights, spacing utilities, breakpoints, shadows, and tons more.
      </p>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <img src="https://statuscast.com/wp-content/uploads/2018/12/untitled-1@3x.png" alt="customizable"></img>
    </div>
  </div>
</section>
  <section className="flex items-center justify-center py-20 bg-white min-w-screen">
  <div className="px-16 bg-white">
      <div className="container flex flex-col items-start mx-auto lg:items-center">
          <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


          <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
              </path>
          </svg>
              See what others are saying</h2>
              <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

          <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                  <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      {/* <Image alt="not found" src={logo2}/> */}
                      </div>
                      <div className="flex flex-col items-start justify-center">
                          <h4 className="font-bold text-gray-800">Demo</h4>
                          <p className="text-gray-600">This is demo data</p>
                      </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                  <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      {/* <Image alt="not found" src={logo2}/> */}
                      </div>
                      <div className="flex flex-col items-start justify-center">
                          <h4 className="font-bold text-gray-800">Demo</h4>
                          <p className="text-gray-600">This is demo data</p>
                      </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much
                      easier.
                      Thanks for making such a great product."</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                  <div className="flex items-center justify-center">
                      <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      {/* <Image alt="not found" src={logo2}/> */}
                      </div>
                      <div className="flex flex-col items-start justify-center">
                          <h4 className="font-bold text-gray-800">Demo</h4>
                          <p className="text-gray-600">This is demo data</p>
                      </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">"Packed with awesome content and exactly what I was
                      looking
                      for. I would highly recommend this to anyone."</blockquote>
              </div>
          </div>
      </div>
  </div>
</section>


<main  id="#price" className="max-w-6xl mx-auto pt-10 pb-36 px-8">



<div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
  
 
</div>

</main>
  </>


  </>
    

  )
}
