import {AiFillStar} from 'react-icons/ai'
import './index.css'

const Packages = () => (
  <div className="packages-main-container">
    <h1 className="top-packages-heading">
      Top <span className="packages-text"> packages</span>
    </h1>
    <p className="explore-out-wide-text">
      Explore our wide range of tests! We ensure that you don’t miss out on any
      chance to keep yourself healthy.
    </p>
    <div className="packages-cards-container">
      <div className="package-card">
        <h1 className="basic-full-body-heading"> Basic Full Body Checkup</h1>
        <div className="rating-container">
          <p className="rating-text">4.3</p>
          <AiFillStar className="star-icon" />
          <p className="reviews-count-text">(75 Reviews)</p>
        </div>
        <h1 className="no-of-tests-heading">Number of tests - 53</h1>
        <div className="mrp-prices-container">
          <p className="mrp-text">
            MRP:<span className="mrp-deprecated-price">10,000</span>
          </p>
          <p className="revised-price-text">&#x20B9; 8,490</p>
        </div>
        <button className="book-now-button">Book now </button>
      </div>

      <div className="package-card">
        <h1 className="basic-full-body-heading"> Advance Full Body Checkup</h1>
        <div className="rating-container">
          <p className="rating-text">4.3</p>
          <AiFillStar className="star-icon" />
          <p className="reviews-count-text">(100 Reviews)</p>
        </div>
        <h1 className="no-of-tests-heading">Number of tests - 70</h1>
        <div className="mrp-prices-container">
          <p className="mrp-text">
            MRP:<span className="mrp-deprecated-price">12,000</span>
          </p>
          <p className="revised-price-text">&#x20B9; 10,000</p>
        </div>
        <button className="book-now-button">Book now </button>
      </div>

      <div className="package-card">
        <h1 className="basic-full-body-heading"> Liver Function Test (LFT)</h1>
        <div className="rating-container">
          <p className="rating-text">4.3</p>
          <AiFillStar className="star-icon" />
          <p className="reviews-count-text">(43 Reviews)</p>
        </div>
        <h1 className="no-of-tests-heading">Number of tests - 89</h1>
        <div className="mrp-prices-container">
          <p className="mrp-text">
            MRP:<span className="mrp-deprecated-price">13,299</span>
          </p>
          <p className="revised-price-text">&#x20B9; 11,299</p>
        </div>
        <button className="book-now-button">Book now </button>
      </div>
    </div>
    <p className="see-all-text">See All</p>
  </div>
)

export default Packages
