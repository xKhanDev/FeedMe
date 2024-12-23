import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-12 md:h-14 lg:h-16 light_bg rounded-sm md:rounded-md lg:rounded-lg flex justify-between items-center px-4 md:px-6 lg:px-8'>
      <h1 className='capital font-bold text-2xl cursor-pointer' onClick={() => navigate('/')}>FeedMe</h1>
      <button className="my_btn green_bg text-white"
      >Connect</button>
    </div>
  )
}

export default Navbar