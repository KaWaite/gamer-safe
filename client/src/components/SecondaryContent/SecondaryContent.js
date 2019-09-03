import React from "react";
import Trending from "../Trending/Trending";
import { Grid, GridInner, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

// CSS
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "./SecondaryContent.css";

export default function SecondaryContent() {
  return (
    <Grid>
      <GridCell span={12}>
        <GridInner className="inner">
          <GridCell span={4}>
            <Trending />
          </GridCell>
          <GridCell span={8} className="TBD">
            <Typography use="headline2">TBD</Typography>
          </GridCell>
        </GridInner>
      </GridCell>
    </Grid>
  );
}
