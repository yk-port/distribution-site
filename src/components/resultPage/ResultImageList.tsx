import React, { FC, useState, useEffect } from "react";
import { TileData } from "../../types/types";

import firebase from "../../firebase";
// useParams: URLの値を取得するためのreact-router-domの関数
import { useParams, useHistory } from "react-router-dom";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "80%",
      textAlign: "center",
      marginTop: "2%",
    },
    tileImage: {
      height: "218px",
      width: "218px",
    },
  })
);

const ResultImageList: FC = () => {
  const [data, setData] = useState<TileData[]>([]);

  // URLに含まれるkeywordの部分を取得するための記述
  const { keyword } = useParams<any>();
  // react-router-domを使った画面遷移の処理をするための記述
  const history = useHistory();

  const classes = useStyles();

  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection("tileData");
    // tileData collectionから条件にマッチするデータを取得する記述
    // 第1:探すfieldを指定 第2:検索の条件(array-containsは第3引数の値とマッチする全てのdocumentの中から探すという条件) 第3:探したい文字列
    const searchedData = tileDataRef.where(
      "keyword",
      "array-contains",
      searchWord
    );
    const snapShot = await searchedData.get();
    const temporaryData: object[] = [];

    snapShot.docs.map((doc) => {
      return temporaryData.push(doc.data());
    });

    // temporaryDataの中に格納されている値をTileDataで定義した型に変換する書き方
    setData(temporaryData as TileData[]);
  };

  useEffect(() => {
    getData(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.root}>
      {data.map((tile) => (
        <div>
          <Button onClick={() => history.push(`/download/${tile.title}`)}>
            <img
              className={classes.tileImage}
              src={tile.image}
              alt={tile.title}
            />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ResultImageList;
