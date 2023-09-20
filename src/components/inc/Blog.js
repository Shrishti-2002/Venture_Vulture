import React from "react";

function Blog() {
  return (
    <div className="container blogclass">
      
        <div className=" bd-highlight">
          <div className="jumbotron">
            <h2 style={{color:"#336b89"}}>What’s trending ?</h2>
            <h6 >
              See industry news, success stories, and insights to assist you in
              becoming an angel investor or raising startup capital.
            </h6>
            <hr className="my-2" />
            <h6>
            A curated selection of companies across every industry.
            </h6>
            <a style={{color:"#ffffff"}} className="btn btn-default" href="#" role="button">
              Learn more
            </a>
          </div>
        </div>
      </div>
  );
}

export default Blog;
