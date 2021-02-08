import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import bgImage from "../../assets/images/bg.jpg";

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
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = () => {
    history.push(`/search/${keyword}`);
  };

  return (
    <div className={classes.background}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.inputbase}
          placeholder="検索する文字を入力して下さい"
          onChange={handleChange}
        />
      </Paper>
    </div>
  );
};

export default TopMain;
