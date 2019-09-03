import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import { Card, CardMedia, CardPrimaryAction } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/typography/dist/mdc.typography.css";

import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

import "./ArticleGrid.css";

export default function ArticleGrid() {
  return (
    <Grid className="article-main">
      <GridCell desktop={3} tablet={6} className="article-main-cell">
        <Card className="card">
          <CardPrimaryAction>
            <CardMedia sixteenByNine className="article-picture" />
            <Typography use="headline5" tag="h2" className="title">
              A game title
            </Typography>
          </CardPrimaryAction>
        </Card>
      </GridCell>
      <GridCell desktop={3} tablet={6} className="article-main-cell">
        <Card className="card">
          <CardPrimaryAction>
            <CardMedia sixteenByNine className="article-picture" />
            <Typography use="headline5" tag="h2" className="title">
              A game title
            </Typography>
          </CardPrimaryAction>
        </Card>
      </GridCell>
      <GridCell desktop={3} tablet={6} className="article-main-cell">
        <Card className="card">
          <CardPrimaryAction>
            <CardMedia sixteenByNine className="article-picture" />
            <Typography use="headline5" tag="h2" className="title">
              A game title
            </Typography>
          </CardPrimaryAction>
        </Card>
      </GridCell>
      <GridCell desktop={3} tablet={6} className="article-main-cell">
        <Card className="card">
          <CardPrimaryAction>
            <CardMedia sixteenByNine className="article-picture">
              <Typography use="headline5" tag="h2" className="title">
                A game title
              </Typography>
            </CardMedia>
          </CardPrimaryAction>
        </Card>
      </GridCell>
    </Grid>
  );
}
