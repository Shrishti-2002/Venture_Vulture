import React from "react";

function Blog() {
  return (
    <div className="container blogclass">
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-3 bd-highlight">
          <div className="jumbotron">
            <h1 >What’s trending ?</h1>
            <h6 >
              See industry news, success stories, and insights to assist you in
              becoming an angel investor or raising startup capital.
            </h6>
            <hr className="my-4" />
            <h6>
            A curated selection of companies across every industry.
            </h6>
            <a className="btn btn-default btn-sm" href="#" role="button">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
