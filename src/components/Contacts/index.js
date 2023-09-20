import {BsTelephoneFill} from 'react-icons/bs'
import './index.css'

const ContactsSection = () => (
  <div className="contacts-section-main-container">
    <div className="contacts-content-container">
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695191049/NIL_logo_Transparent_1_1_y3yhps.png"
          className="plus-image-logo"
        />
        <p className="book-doctor-text">
          Book doctor appointments online and get your ailments treated in no
          time with our expert medical support systems. Get rid of all your
          medical problem with our expert panel of doctors who guide you towards
          a healthier life.
        </p>

        <div className="number-container">
          <p className="country-code-text">91+</p>
          <input className="number-input" type="number" />
          <button className="phone-icon-button">
            <BsTelephoneFill />
          </button>
        </div>
      </div>
      <div className="total-services-details-container">
        <div className="contacts-section-services-list-container">
          <h1 className="contacts-services-heading">Services</h1>
          <ul className="services-list-container">
            <li className="service-text">Appointments</li>
            <li className="service-text">Lab Tests</li>

            <li className="service-text">A-Z medicine</li>
            <li className="service-text">Doctor support</li>
          </ul>
        </div>

        <div className="contacts-section-services-list-container">
          <h1 className="contacts-services-heading">Legal</h1>
          <ul className="services-list-container">
            <li className="service-text">General Info</li>
            <li className="service-text">Privacy Policy</li>

            <li className="service-text">A-Z medicine</li>
            <li className="service-text">Terms of services</li>
            <li className="service-text">Consultation</li>
            <li className="service-text">How it work</li>
          </ul>
        </div>

        <div className="contacts-section-services-list-container">
          <h1 className="contacts-services-heading">Talk To Us</h1>
          <ul className="services-list-container">
            <li className="service-text">support@notinline.com</li>
            <li className="service-text">appointment@notinline.com</li>

            <li className="service-text">+91 12345 67899</li>
            <li className="service-text">+91 97642 09752</li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="line" />
    <p className="all-rights-reserved-text">2021-2023 All rights reserved</p>
  </div>
)

export default ContactsSection
