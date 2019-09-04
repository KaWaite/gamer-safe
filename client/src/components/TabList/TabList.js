import React from "react";
import Tab from "../Tab/Tab";

import {
  List,
  ListItem,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText
} from "@rmwc/list";

export default function TabList() {
  return (
    <>
      <Tab />
      <List twoLine>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Pokemon Go!</ListItemPrimaryText>
            <ListItemSecondaryText>
              Finally has lost momentum
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Animal Crossing</ListItemPrimaryText>
            <ListItemSecondaryText>
              Highest Grossing Switch Game
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Avengers The Game</ListItemPrimaryText>
            <ListItemSecondaryText>
              New details on gameplay
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Pokemon Go!</ListItemPrimaryText>
            <ListItemSecondaryText>
              Finally has lost momentum
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Animal Crossing</ListItemPrimaryText>
            <ListItemSecondaryText>
              Highest Grossing Switch Game
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Avengers The Game</ListItemPrimaryText>
            <ListItemSecondaryText>
              New details on gameplay
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Pokemon Go!</ListItemPrimaryText>
            <ListItemSecondaryText>
              Finally has lost momentum
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Animal Crossing</ListItemPrimaryText>
            <ListItemSecondaryText>
              Highest Grossing Switch Game
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemPrimaryText>Avengers The Game</ListItemPrimaryText>
            <ListItemSecondaryText>
              New details on gameplay
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}
