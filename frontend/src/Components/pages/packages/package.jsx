import React from 'react';
import './package.css';
import Navbar from '../../Navbar1/Navbar';
import Footer from '../../Footer/Footer';
import '../../Popular/popular.css';
import '../../../app.css';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Packages = () => {


  const result = () => {
    window.search(); 
  };



return (
    <>
      <Navbar />

      <section className="pack">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">
              Plan Your Trip With Travel Dot
            </h1>

            <p className="subTitle">
              Travel to your favourite city with respectful of the environment!
            </p>

            <button className="btn">
              <Link to="/destiny">Explore Now</Link>
            </button>
          </div>

          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="location">Source</label>
              <div class="select">
                <select id="src" name='location'>
                  <option value="">Source</option>
                  <option value="salem">salem</option>
                  <option value="erode">erode</option>
                  <option value="chennai">chennai</option>
                  <option value="hyderabad">hyderabad</option>
                  <option value="bengaluru">bengaluru</option>
                  <option value="mumbai">mumbai</option>
                  <option value="kolkata">kolkata</option>
                  <option value="coimbatore">coimbatore</option>
                  <option value="kochi">kochi</option>
                  <option value="madurai">madurai</option>
                  <option value="kanyakumari">kanyakumari</option>
                  <option value="goa">goa</option>
                  <option value="jaipur">jaipur</option>
                  <option value="patna">patna</option>
                  <option value="mysore">mysore</option>
                  <option value="lucknow">lucknow</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>

            <div className="distDiv">
              <label htmlFor="distance">Destination</label>
              <div class="select">
                <select id="des" name='distance'>
                  <option value="">Destination</option>
                 <option value="tajmahal">tajmahal</option>
                  <option value="munnar">munnar</option>
                  <option value="redfort">redfort</option>
                  <option value="mysore palace">mysore palace</option>
                  <option value="charminar">charminar</option>
                  <option value="gateway of india">gateway of india</option>
                  <option value="ladakh">ladakh</option>
                  <option value="baga beach">baga beach</option>
                  <option value="ooty">ooty</option>
                  <option value="kodikanal">kodikanal</option>
                  <option value="shimla">shimla</option>
                  <option value="tanjore">tanjore</option>
                  <option value="tirupati">tirupati</option>
                  <option value="kedarnath">kedarnath</option>
                  <option value="kovalam">kovalam</option>
                  <option value="varkala">varkala</option>
                  <option value="radhanagar">radhanagar</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>

            <div className="priceDiv">
              <label htmlFor="persons">Person</label>
              <div class="select">
                <select id="persons" name='persons' required>
                  <option value="">select person</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <span class="focus"></span>
              </div>
            </div>
            <div className="priceDiv">
              <label htmlFor="days">Days</label>
              <div class="select">
                <select id="days" name='days'>
                  <option value="">Select Days</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <span class="focus"></span>
              </div>
              </div>
              <div className="sear">
            <button onClick={result}  id="search" className="btn">
              Search
            </button></div>
          </div>
        </div>
      </section>

<section className="offer container section">
      <div className="secContainer">
        <div id='heading' className="secIntro ">
        </div>

        <div id='offerlist' className="mainContent grid ">
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
};

export default Packages;
