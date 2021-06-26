import React, { FC, useState } from "react";
// ページ遷移をするために必要なモジュール
import { useHistory } from "react-router-dom";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, InputBase } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import bgImage from "../../assets/images/mainBg.jpg";

const useStyles = makeStyles(() =>
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
  const classes = useStyles();
  // importしたuseHistoryモジュールをコンポーネント内で呼び出せるようにhistoryに代入する
  const history = useHistory();

  const [keyword, setKeyword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = () => {
    // useHistoryモジュールから生成したインスタンスに対してpushメソッドを使うと遷移できる
    history.push(`/search/${keyword}`);
  };

  return (
    <div className={classes.background}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
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
