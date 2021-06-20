import React, { FC } from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const TopHeader: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h2>Header</h2>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
