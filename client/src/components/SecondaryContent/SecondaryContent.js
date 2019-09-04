import React from "react";
import Trending from "../Trending/Trending";
import TabList from "../TabList/TabList";
import { Grid, GridInner, GridCell } from "@rmwc/grid";
import { Typography } from "@rmwc/typography";

// CSS
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "./SecondaryContent.css";

export default function SecondaryContent() {
  return (
    <Grid className="secondary-main">
      <GridCell span={4}>
        <Trending />
      </GridCell>
      <GridCell span={8} className="TBD">
        {/* <Typography use="headline2">TBD</Typography> */}
        <TabList />
      </GridCell>
    </Grid>
  );
}
