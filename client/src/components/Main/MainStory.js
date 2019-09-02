import React from "react";
import { Grid, GridInner, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/typography/dist/mdc.typography.css";

import "./MainStory.css";

export default function MainStory() {
  return (
    <Grid className="main">
      <GridCell span={12} className="cell">
        <GridInner className="inner">
          <GridCell span={4}>
            <Typography use="headline1" id="title">
              The Last Of Us Pt.II
            </Typography>
            <Typography use="subtitle1">
              Finally Naughty gives a release date for their highly anticipated
              sequel.
            </Typography>
          </GridCell>
          {/* <GridCell span={6}>
            <Typography>Trending</Typography>
          </GridCell> */}
        </GridInner>
      </GridCell>
    </Grid>
  );
}
