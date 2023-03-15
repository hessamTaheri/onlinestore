import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-light border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px" />
        {/* <video muted="" loop="" playsinline="" autoplay="" data-src="https://cdn.dribbble.com/users/982190/screenshots/17970952/media/dbd2a7ce4d034a594597461b3f72acb6.mp4" data-video-small="https://cdn.dribbble.com/users/982190/screenshots/17970952/media/64593441299512a92faf61cce88606d5.mp4" data-video-medium="https://cdn.dribbble.com/users/982190/screenshots/17970952/media/a87a46b45b1e828c70b8c72ffadb4728.mp4" data-video-large="https://cdn.dribbble.com/users/982190/screenshots/17970952/media/dbd2a7ce4d034a594597461b3f72acb6.mp4" src="https://cdn.dribbble.com/users/982190/screenshots/17970952/media/dbd2a7ce4d034a594597461b3f72acb6.mp4"></video> */}
        {/* <video loop autoPlay  src="/assets/vd.mp4" ></video> */}
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder">New Season Arrivals</h5>
            <p className="card-text lead fs-2">Checkout all the trends</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
