import React, { Component } from "react";

import Logo from "../../Logo";

// import Modal from "../Modal/Modal";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  // TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import { TextField } from "@rmwc/textfield";
import { Avatar } from "@rmwc/avatar";
import { Button } from "@rmwc/button";
import { Typography } from "@rmwc/typography";

// CSS
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@rmwc/avatar/avatar.css";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => {
      return { open: !state.open };
    });
  }
  render() {
    return (
      <>
        {/* <Modal open={this.state.open} toggle={this.toggle} /> */}
        <TopAppBar id="nav-bar">
          <TopAppBarRow className="nav-bar-content">
            <TopAppBarSection alignStart>
              {/* <Button onClick={this.toggle}> */}
              <Logo />
              {/* </Button> */}

              {/* <TopAppBarActionItem icon="mood" /> */}
              <TopAppBarTitle>
                <Typography use="headline4">gamerSafe</Typography>
              </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection>
              <TextField fullwidth label="search database" id="search" />
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              {/* <TopAppBarActionItem icon="favorite" /> */}
              <TopAppBarActionItem
                icon={
                  <Avatar
                    src={require("../../images/avatar.png")}
                    size="large"
                    name="SilentHill"
                  />
                }
              />
              {/* {/* <TopAppBarActionItem icon="star" /> */}
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>

        <TopAppBarFixedAdjust />
      </>
    );
  }
}
