import React, { Component } from "react";
import { List, CollapsibleList, SimpleListItem } from "@rmwc/list";
import { Typography } from "@rmwc/typography";

import "@material/list/dist/mdc.list.css";
import "@rmwc/list/collapsible-list.css";
import "./Trending.css";

export default class Trending extends Component {
  constructor() {
    super();
    this.state = {
      ps4Games: [
        "The Last of Us",
        "BioShock",
        "Red Dead Redemption",
        "Spiderman",
        "Bloodborne",
        "God of War",
        "Resident Evil 2 REMAKE",
        "Dark Souls III",
        "Ni No Kuni",
        "No Man's Sky"
      ],
      switchGames: [
        "Zelda",
        "Pokemon",
        "The Witcher 3",
        "Mario Builder",
        "Dark Souls Remastered",
        "Let's Go Pikachu",
        "Some other game",
        "Ni No Kuni",
        "Another Ported Game",
        "The end"
      ]
    };
  }
  render() {
    return (
      <>
        <List className="trending">
          <Typography use="headline4">Trending Games</Typography>
          <CollapsibleList
            handle={
              <SimpleListItem
                text="PS4"
                graphic="favorite"
                metaIcon="chevron_right"
              />
            }
            onOpen={() => console.log("open")}
            onClose={() => console.log("close")}
          >
            <SimpleListItem>1. {this.state.ps4Games[0]}</SimpleListItem>
            <SimpleListItem>2. {this.state.ps4Games[1]}</SimpleListItem>
            <SimpleListItem>3. {this.state.ps4Games[2]}</SimpleListItem>
            <SimpleListItem>4. {this.state.ps4Games[3]}</SimpleListItem>
            <SimpleListItem>5. {this.state.ps4Games[4]}</SimpleListItem>
            <SimpleListItem>6. {this.state.ps4Games[5]}</SimpleListItem>
            <SimpleListItem>7. {this.state.ps4Games[6]}</SimpleListItem>
            <SimpleListItem>8. {this.state.ps4Games[7]}</SimpleListItem>
            <SimpleListItem>9. {this.state.ps4Games[8]}</SimpleListItem>
            <SimpleListItem>10. {this.state.ps4Games[9]}</SimpleListItem>
          </CollapsibleList>

          <CollapsibleList
            handle={
              <SimpleListItem
                text="Nintendo Switch"
                graphic="local_pizza"
                metaIcon="chevron_right"
              />
            }
          >
            <SimpleListItem>1. {this.state.switchGames[0]}</SimpleListItem>
            <SimpleListItem>2. {this.state.switchGames[1]}</SimpleListItem>
            <SimpleListItem>3. {this.state.switchGames[2]}</SimpleListItem>
            <SimpleListItem>4. {this.state.switchGames[3]}</SimpleListItem>
            <SimpleListItem>5. {this.state.switchGames[4]}</SimpleListItem>
            <SimpleListItem>6. {this.state.switchGames[5]}</SimpleListItem>
            <SimpleListItem>7. {this.state.switchGames[6]}</SimpleListItem>
            <SimpleListItem>8. {this.state.switchGames[7]}</SimpleListItem>
            <SimpleListItem>9. {this.state.switchGames[8]}</SimpleListItem>
            <SimpleListItem>10. {this.state.switchGames[9]}</SimpleListItem>
          </CollapsibleList>

          <CollapsibleList
            handle={
              <SimpleListItem
                text="Icecream"
                graphic="star"
                metaIcon="chevron_right"
              />
            }
          >
            <SimpleListItem text="Vanilla" />
            <SimpleListItem text="Chocolate" />
            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Nested Collapsible"
                  graphic="touch_app"
                  metaIcon="chevron_right"
                />
              }
            >
              <SimpleListItem text="Orange" />
              <SimpleListItem text="Strawberry" />
              <SimpleListItem text="Blueberry" />
            </CollapsibleList>
          </CollapsibleList>

          <CollapsibleList
            open
            handle={
              <SimpleListItem
                text="Custom Content, forced open"
                graphic="help"
                metaIcon="chevron_right"
              />
            }
          ></CollapsibleList>
        </List>
      </>
    );
  }
}
