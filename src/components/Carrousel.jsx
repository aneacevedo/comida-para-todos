import React from 'react';
import HuertosUrbanos from '../images/Huertos-urbanos.jpg';
import Alimentos from '../images/Alimentos.jpg'
import Voluntariado from '../images/Voluntariado.jpg'
import arrowRight from '../images/iconos/arrow-right.png'
import arrowLeft from '../images/iconos/arrow-left.png'

const Carrousel = () => {
  return(
    <div>
      <div id="carouselExampleCaptions" className="carousel carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={HuertosUrbanos} className="d-block w-100" alt="Huertos urbanos"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Huertos Urbanos</h5>
              <p>Texto por definir.</p>
            </div>
        </div>
          <div className="carousel-item">
            <img src={Alimentos} className="d-block w-100" alt="Haz una clase"></img>
              <div className="carousel-caption d-none d-md-block">
              <h5>Haz una clase</h5>
                <p>Texto por definir.</p>
              </div>
          </div>
            <div className="carousel-item">
              <img src={Alimentos} className="d-block w-100" alt="Alimentos"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Alimentos</h5>
                  <p>Texto por definir.</p>
                </div>
            </div>
          <div className="carousel-item">
            <img src={Voluntariado} className="d-block w-100" alt="Voluntariado"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Voluntariado</h5>
              <p>Texto por definir.</p>
            </div>
          </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <img src={arrowRight} className="arrow-carrousel" alt="flecha"></img>
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span> */}
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <img src={arrowLeft} className="arrow-carrousel" alt="flecha"></img>
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span> */}
            </a>
          </div>
      </div>
  );
  }
export default Carrousel;