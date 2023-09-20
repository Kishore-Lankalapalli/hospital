import './index.css'

const LabsMenu = () => (
  <div className="labs-menu-main-container">
    <div className="achievment-showcase-container">
      <div className="achievment-container">
        <img
          className="achievment-image"
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695175934/Rectangle_80_kczh6i.png"
        />
        <h1 className="achievment-heading">NABL Accredited Labs</h1>
      </div>

      <div className="achievment-container">
        <img
          className="achievment-image"
          src="https://res.cloudinary.com/deh78ntmd/image/upload/v1695175938/Rectangle_81_wg2bh6.png"
        />
        <h1 className="achievment-heading">Free sample collection</h1>
      </div>
    </div>

    <h1 className="motive-heading-text">
      We Keep <span className="expanding-text">expanding</span>!
    </h1>
    <ul className="labs-achievment-container">
      <li className="list-item">
        <p className="count-text">5+</p>
        <p className="labs-text">Labs</p>
      </li>
      <li className="list-item">
        <p className="count-text">100+</p>
        <p className="labs-text">Collection Centers</p>
      </li>
      <li className="list-item">
        <p className="count-text">1000+</p>
        <p className="labs-text">Monthly Tests</p>
      </li>

      <li className="list-item">
        <p className="count-text">2000+</p>
        <p className="labs-text">Test menu</p>
      </li>

      <li className="list-item">
        <p className="count-text">5+</p>
        <p className="labs-text">Cities present in</p>
      </li>
    </ul>
  </div>
)

export default LabsMenu
