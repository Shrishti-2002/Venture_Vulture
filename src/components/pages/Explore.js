import React from "react";
import Search from "../inc_explore/search";
import Popular from "../inc_explore/popular";
import Company from "../inc_explore/company";

function Explore() {
  return (
    <div>
      <Search />
      <Popular
        title="Popular searches"
        cardtitle="Exclusive freelance talent marketplace"
        cardbody="Connecting Cleared Freelancers with Top-Secret Opportunities"
        cardfooter="updated 3 hours ago"
      />

      <Popular title="Female founders"
      cardtitle="The Only Turn-key Fitness & Nutrition Platform For Trainers & Consumers"
        cardbody="Launched Online Workouts In Under 30 days & Added 15k+ Members Globally In 60 Days"
        cardfooter="updated 12 hours ago" />

      <Popular title="Most raised" 
        cardtitle="Efficient urban wind turbine. Save up to 82% on electricity costs."
        cardbody="Received funding & accolades from European Bank for Reconstruction and Development (EBRD)"
        cardfooter="updated 21 hours ago"/>

      <Popular title="New this week" 
        cardtitle="Equitable tech-enabled healthcare for Moms nationwide"
        cardbody="Major B2B contract secured with a subsidiary of the largest insurance company in U.S.—go live: 2023"
        cardfooter="updated 20 hours ago"
      />
      <Company/>
    </div>
  );
}

export default Explore;
