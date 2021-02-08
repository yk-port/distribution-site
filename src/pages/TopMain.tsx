import React, { FC } from "react";
import {
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import pencil from "../assets/images/pencil.jpg";

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
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
          className={classes.inputbase}
          placeholder="検索する文字を入力して下さい"
        />
      </Paper>
    </div>
  );
};

export default TopMain;
