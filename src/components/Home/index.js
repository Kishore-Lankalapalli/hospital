import {BsPerson, BsTelephone} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import './index.css'

const Home = () => (
  <div className="home-main-container">
    <div className="background-color-container">"" </div>

    <div className="home-content-container">
      <img
        className="best-class-image"
        src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695143617/Header_1_jleggb.png"
      />
      <button className="get-full-body-button">
        Get Full Body Check up Now at{' '}
      </button>
      <div className="prices-container">
        <p className="price-text">&#x20B9; 5,999</p>
        <p className="price-text discount-price-text">&#x20B9; 999</p>
        <p className="price-text discount-price-text">50% OFF</p>
      </div>
      <div className="total-form-container">
        <div className="credentials-form-container">
          <h1 className="fill-in-the-details-heading">
            Fill in the details to get a call!
          </h1>
          <form className="form-container">
            <div className="input-container">
              <BsPerson className="person-icon" />
              <input
                placeholder="FULL NAME"
                className="full-name-input"
                type="text"
              />
            </div>
            <div className="input-container">
              <BsTelephone className="person-icon" />
              <input
                placeholder="PHONE NUMBER"
                className="full-name-input"
                type="text"
              />
            </div>

            <div className="input-container">
              <HiOutlineLocationMarker className="person-icon" />
              <input
                placeholder="LOCATION"
                className="full-name-input"
                type="text"
              />
            </div>
            <div className="input-container">
              <input
                checked
                className="accept-input"
                id="acceptCheckbox"
                type="checkbox"
              />
              <label className="accept-label-text" htmlFor="acceptCheckbox">
                By continuing, you agree to our T&C and privacy policy
              </label>
            </div>
            <button className="proceed-button">Proceed</button>
          </form>
        </div>
        <div className="full-body-check-up-large-container">
          <p className="body-checkup-text">
            Get a Full Body Checkup Now at &#x20B9; 5,999 &#x20B9;999{' '}
          </p>
          <p className="discount-container">70% OFF</p>
        </div>
      </div>

      <div className="best-in-class-banner-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695179677/Hero_text_image_jenl0f.png"
          className="best-in-class-large-image"
        />
      </div>
    </div>
  </div>
)

export default Home
