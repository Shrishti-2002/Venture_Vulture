import { setGlobalState, useGlobalState } from '../store'
import image from "./images/home.jpg";
import Card from './inc/Card';
import Blog from './inc/Blog';
import Listgrp from './inc/Listgrp';
import Testimonials from './inc/Testimonials';
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <>
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <div className="d-flex justify-content-center">
        <h2 style={{ color: "#579bb1" }} className="text-center  ">
          &nbsp; Learn,{" "}
        </h2>
        <h2 className="text-center">&nbsp; Build,</h2>
        <h2 style={{ color: "#579bb1" }} className="text-center">
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
        style={{ backgroundImage: `url(${image})`, height: 320, width: 1000 }}
      >
      </div>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-green-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-green-600
        font-medium text-xs leading-tight uppercase text-green-600
        rounded-full shadow-md bg-transparent hover:bg-green-700
        hover:text-white"
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
            className="text-lg font-bold text-green-900
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
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full">
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>investments</span>
        </div>
      </div>
      <Card />
      <Blog />
      <Listgrp 
        subheading1="1. It's much riskier"
        subheading2="2. Win big or lose all"
        subheading3="3. Hold for the long term"
        text1="Never invest more than you can afford to lose. Startups are hard. Even the best founders fail."
        text2="Startups win big or go bankrupt. Consider investing in them more like socially-good lottery tickets."
        text3="When it works, it takes a long time to earn a return. Expect to hold for years."
      />
      <Listgrp 
        subheading1="4. Build the future"
        subheading2="5. There are often perks"
        subheading3="6. Hold for the long term"
        text1="Your money goes to the company to help create jobs, build products, and grow companies."
        text2="Investors often get perks like VIP access to new products or discounts."
        text3="You can offer more than money. The best angel investors help the companies they invest in to succeed."
      />
      
      <Testimonials
        cardtitle="Dhruv Rastogi"
        cardbody="Comparing it to other platforms I've used and even
                      investments that have come from personal recommendations,
                      I can state without reservation that it's one of the
                      greatest venture investing platforms out there."
        cardfooter="1 month ago"
      />
    </div>
    </>
  )
}

export default Hero
