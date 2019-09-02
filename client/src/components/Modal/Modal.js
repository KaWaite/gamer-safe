// All necessary Imports
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import {
  Drawer,
  DrawerHeader,
  DrawerContent
  // DrawerSubtitle
} from "@rmwc/drawer";
import { List, ListItem, SimpleListItem, CollapsibleList } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

import Trending from "../Trending/Trending";

// Component CSS
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "@rmwc/list/collapsible-list.css";
import "../../App.css";
import "./Modal.css";

function Modal(props) {
  return (
    <>
      <Drawer modal id="drawer" open={props.open} onClose={props.toggle}>
        <DrawerHeader
          style={{
            padding: "0.4rem 0.9rem"
          }}
        >
          <Logo />
        </DrawerHeader>
        <DrawerContent style={{ padding: "1rem" }}>
          <Trending />
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Modal;
