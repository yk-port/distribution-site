import { AppBar, Toolbar } from "@material-ui/core";
import React, { FC } from "react";

const TopHeader: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <h2>header</h2>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
