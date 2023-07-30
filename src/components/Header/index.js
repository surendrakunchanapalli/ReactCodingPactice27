// Write your JS code here
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="nav-bar-container">
          <div className="nav-bar-mobile-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <button type="button" className="nav-mobile-btn">
              <img
                className="nav-bar-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-out-img.png"
                alt="nav logout"
              />
            </button>
          </div>
          <div className="nav-bar-desktop-container">
            <div className="nav-bar-desktop-container-text">
              <ul className="nav-menu-items-list">
                <li className="nav-menu-item">Home</li>
                <li className="nav-menu-item">Products</li>
                <li className="nav-menu-item">Cart</li>
              </ul>
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav-menu">
          <ul className="mobile-nav-items">
            <li className="mobile-nav-item">
              <img
                className="nav-bar-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
              />
            </li>
            <li className="mobile-nav-item">
              <img
                className="nav-bar-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
              />
            </li>
            <li className="mobile-nav-item">
              <img
                className="nav-bar-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header
