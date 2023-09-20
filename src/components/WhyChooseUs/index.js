import {AiOutlineCaretDown} from 'react-icons/ai'

import {RxCross2} from 'react-icons/rx'
import './index.css'

const WhyChooseUs = () => (
  <div className="why-choose-main-container">
    <div className="why-choose-bg-container">e</div>

    <div className="why-choose-content-container">
      <h1 className="why-choose-heading">
        Why <span className="choose-text">Choose </span> Us?
      </h1>
      <p className="we-want-heart-text">
        We want you and your heart to be healthy so you can live a happy life!
      </p>
      <div className="card-content-container">
        <div className="why-choose-us-cards-container">
          <div className="why-choose-card-container">
            <div className="image-why-choose-container">
              <img
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695175934/Rectangle_80_kczh6i.png"
                className="certification-image"
              />
              <h1 className="nabl-heading-text">NABL Accredited Labs</h1>
              <p className="certification-text">
                Get accurate and safe results from our NABL-certified lab
                partners.{' '}
              </p>
            </div>
            <AiOutlineCaretDown className="down-icon" />
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695175934/Rectangle_80_kczh6i.png"
              className="large-certification-image"
            />
          </div>

          <div className="why-choose-card-container card3">
            <div className="image-why-choose-container">
              <img
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
                className="certification-image"
              />
              <h1 className="nabl-heading-text">Timely collections</h1>
              <p className="certification-text">
                Get accurate and safe results from our NABL-certified lab
                partners.{' '}
              </p>
            </div>
            <AiOutlineCaretDown className="down-icon" />
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
              className="large-certification-image"
            />
          </div>

          <div className="why-choose-card-container">
            <div className="image-why-choose-container">
              <img
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186828/Ellipse_14_odqfmc.png"
                className="certification-image"
              />
              <h1 className="nabl-heading-text">Value experience</h1>
              <p className="certification-text">
                Get accurate and safe results from our NABL-certified lab
                partners.{' '}
              </p>
            </div>
            <AiOutlineCaretDown className="down-icon" />
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186828/Ellipse_14_odqfmc.png"
              className="large-certification-image"
            />
          </div>

          <div className="why-choose-card-container why-choose-card4-container card3">
            <div className="image-why-choose-container">
              <img
                src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
                className="certification-image"
              />
              <div className="transperancy-details-container">
                <h1 className="nabl-heading-text">Transparency</h1>
                <p className="transperency-text">
                  Enjoy hassle free medical assistance with our transparent
                  approach. We prioritize transparency for your smooth
                  medical journey.
                </p>
              </div>
            </div>
            <RxCross2 className="cross-icon" />
            <img
              src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695186819/Ellipse_13_nqx09r.png"
              className="large-certification-image"
            />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695187720/expressive-young-woman-posing-studio-removebg-preview-transformed_1_og8xpk.png"
          className="doctor-image"
        />
      </div>
    </div>
  </div>
)

export default WhyChooseUs
