import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" alt="" />
      </div>
      <div className="l_header_menu">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/hero">Heros</Link>
        </div>
        <div> <Link to="/niko">GTA</Link>
        </div>
        <div> <Link to="/timber">Dota</Link>
        </div>
        <div>
          <p>Otros</p>
        </div>
      </div>
    </div>
  )
}

export default Header


/*

                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |

*/