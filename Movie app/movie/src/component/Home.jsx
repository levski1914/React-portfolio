import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div>
        <Hero text="Welcome to React 201" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5 ">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae error nesciunt earum rem nihil necessitatibus
                accusamus similique fugiat, aut placeat cupiditate eaque, autem
                unde et fugit animi. Praesentium, officiis nesciunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
