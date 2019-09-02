import React from "react";
import Trending from "../Trending/Trending";

import { Grid, GridInner, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

export default function SecondaryContent() {
  return (
    <Grid>
      <GridCell span={12}>
        <GridInner className="inner">
          <GridCell span={4}>
            <Trending />
          </GridCell>
          <GridCell span={6}>
            <Typography>Trending</Typography>
          </GridCell>
        </GridInner>
      </GridCell>
    </Grid>
  );
}
