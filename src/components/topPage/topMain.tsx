import React, { FC } from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, InputBase } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import bgImage from "../../assets/images/mainBg.jpg";

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      height: "100vh",
    },
    paper: {
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "45%",
    },
    inputbase: {
      width: "80%",
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="検索する文字を入力してください"
          className={classes.inputbase}
        />
      </Paper>
    </div>
  );
};

export default TopMain;
