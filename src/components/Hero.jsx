import { setGlobalState, useGlobalState } from '../store'
import image from "./images/home.jpg";
import Card from './inc/Card';
import Blog from './inc/Blog';

import Testimonials from './inc/Testimonials';
import Projects from './Projects';
const Hero = () => {
  const [projects] = useGlobalState('projects')
  const [stats] = useGlobalState('stats')

  return (
    <>
    <div className="text-center bg-white text-gray-800 py-10
     px-2">
      <div className="d-flex justify-content-center">
        <h2 style={{ color: "#336b89" }} className="text-center  ">
          &nbsp; Learn,{" "}
        </h2>
        <h2 className="text-center">&nbsp; Build,</h2>
        <h2 style={{ color: "#336b89" }} className="text-center">
          {" "}
          &nbsp; Share,{" "}
        </h2>
        <h2 className="text-center"> &nbsp; Repeat.</h2>
      </div>
      <h6 className="d-flex justify-content-center">
        Invest as little as $100 in the startups and small businesses you
        believe in.
      </h6>
      <div className='img-fluid shadow-2-strong'
        style={{ backgroundImage: `url(${image})`, height: 320, width: 1500 }}
      >
      </div>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          style={{ backgroundColor: "#17a2b8"}}
          className="inline-block px-6 py-2.5 
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-green-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          style={{ backgroundColor: "#336b89"}}
          className="inline-block px-6 py-2.5 border
        font-medium text-xs leading-tight uppercase 
        rounded-full shadow-md bg-transparent hover:bg-#17a2b8
        hover:text-#17a2b8"
        >
          Back Projects
        </button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold 
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold 
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full">
          <span
            className="text-lg font-bold 
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>investments</span>
        </div>
      </div>
      <Projects projects={projects} />
      <Blog />
      {/* <Card /> */}
      
      
      {/* <Testimonials
        cardtitle="Dhruv Rastogi"
        cardbody="Comparing it to other platforms I've used and even
                      investments that have come from personal recommendations,
                      I can state without reservation that it's one of the
                      greatest venture investing platforms out there."
        cardfooter="1 month ago"
      /> */}
    </div>
    </>
  )
}

export default Hero
