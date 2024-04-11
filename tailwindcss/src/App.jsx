
import './App.css'
import img from './images/logo.png'
import cart from './images/cart.png' 
import grocery from './images/grocery-image.png'
function App() {
 

  return (
    
      <div className=" container min-h-screen min-w-full text-white bg-[url(./images/Image.png)] relative ">
        <nav className='flex items-center justify-between w-full px-4 py-2'>
          <img src={img} className=' w-40 cursor-pointer ' alt="" />
          <ul className="flex items-center text-xl font-medium ">
            <li className='px-4'><a href="#">Home</a></li>
            <li className='px-4'><a href="#">About</a></li>
            <li className='px-4'><a href="#">Feature</a></li>
            <li className='px-4'><a href="#">Contact</a></li>
          </ul>
          <img src={cart} alt="" className='w-8'/>
        </nav>
        <div className='mt-40 mx-20 max-w-lg  mb-7'>
            <h1 className='text-6xl font-semibold  leading-normal '>Grocieries <br /> deliver in 10 min</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sunt natus facere facilis dolore maxime ex</p>
           <div className='mt-10'>
                <a href="#" className=' bg-yellow-400 rounded-3xl px-8 py-3 font-semibold mr-4 inline-block
                hover:bg-transparent hover:border-yellow-300 hover:border duration-300 ' >Login</a>
                  <a href="#" className=''>Download App <span className=' inline-block rotate-90 text-lg '>&#10148;</span></a>
           </div>
           
        </div>
        <img src={grocery} alt="" className=" w-full xl:w-1/2 xl:absolute bottom-0 right-20  " />
      </div>
  )
}

export default App
