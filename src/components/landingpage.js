import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/201614_10150215340925081_7862634_o.jpg?_nc_cat=111&_nc_sid=de6eea&_nc_ohc=a3As28TJCGIAX_Gl1DA&_nc_ht=scontent-iad3-1.xx&oh=adb96442fec3c9f4c3df85a89d6b4c39&oe=5FA7E517"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML | CSS | JavaScript/jQuery | Bootstrap | Bulma | NodeJS |
                Express | MongoDB | React.js
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jpfcruz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/WRXjasonSTI"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://instagram.com/notjasonipromise"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
