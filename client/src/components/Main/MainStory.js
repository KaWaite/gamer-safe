import React from "react";
import { Grid, GridInner, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";
import { Card, CardMedia, CardPrimaryAction } from "@rmwc/card";

import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/typography/dist/mdc.typography.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

import "./MainStory.css";

export default function MainStory() {
  return (
    <Grid className="main">
      <GridCell desktop={8} tablet={12} className="main-cell">
        <GridInner className="inner">
          <GridCell span={3}>
            <Typography use="headline4" className="title">
              The Last Of Us Pt.II Release Date Reveiled
            </Typography>
          </GridCell>
        </GridInner>
      </GridCell>
      <GridCell desktop={4} tablet={12} className="main-cell-secondary">
        <GridInner className="inner">
          <GridCell span={4}>
            <Typography use="headline4">
              Cyberpunk 2077 gets a last minute overhaul
            </Typography>
          </GridCell>
        </GridInner>
      </GridCell>
    </Grid>
  );
}
