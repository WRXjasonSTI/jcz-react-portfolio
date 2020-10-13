import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jason F Cruz</h2>
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/201614_10150215340925081_7862634_o.jpg?_nc_cat=111&_nc_sid=de6eea&_nc_ohc=a3As28TJCGIAX_Gl1DA&_nc_ht=scontent-iad3-1.xx&oh=adb96442fec3c9f4c3df85a89d6b4c39&oe=5FA7E517"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Thanks for dropping by! Please feel free to contact me via email
              or through LinkedIn. I am open to learning new things or
              collaborating on projects specializing in the MERN stack or SQL
              database work.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a href="https://www.linkedin.com/in/jpfcruz/"> LinkedIn</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <a href="https://github.com/WRXjasonSTI"> WRXjasonSTI</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                    notjasonipromise
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
