import React, { FC, useState } from "react";

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
    inputBase: {
      width: "80%",
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();

  const [keyword, setKeyword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.inputBase}
          placeholder="検索する文字を入力してください"
          value={keyword}
          onChange={handleChange}
        />
      </Paper>
    </div>
  );
};

export default TopMain;
