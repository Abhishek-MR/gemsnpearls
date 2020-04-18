import React from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Head>
        <title>Gems N Pearls</title>
      </Head>
      <nav>
        <div className="navi">
          <div className="ld">
            <Link to="/">
              <img src="/logo.png" />
            </Link>
          </div>
          <div className="lk">
            <Link to="/">Home</Link>
            <Link to="/amenities">Amenities</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <div className="fx"></div>
      <div className="footer">
        <div className="ftb">
          <div className="ftl">
            <div className="ftl-l">
              <div>
                <h3>Get around</h3>
              </div>
              <div>
                <a href="#"></a>
              </div>
              <div>
                <a href="#">Admission</a>
              </div>
              <div>
                <a href="#">Packages</a>
              </div>
              <div>
                <a href="#">Demo classes</a>
              </div>
            </div>
          </div>
          <div className="ftl">
            <div className="ftl-l">
              <div>
                <h3>Courses</h3>
              </div>
              <div>
                <a href="#">Aspiring Vocalist</a>
              </div>
              <div>
                <a href="#">Extreme Artist</a>
              </div>
              <div>
                <a href="#">Little Speaker</a>
              </div>
              <div>
                <a href="#">Easy Maths</a>
              </div>
            </div>
          </div>
          <div className="ftr">
            <div className="social">
              <h3>Social</h3>
              <div>
                <a href="#">
                  <img src="/whatsapp.png" />
                </a>
                <a href="#">
                  <img src="/twitter.png" />
                </a>
                <a href="#">
                  <img src="/instagram.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ftf">
          &copy; 2020 Gems n Pearls
        </div>
      </div>
    </Root>
  )
}

export default App
