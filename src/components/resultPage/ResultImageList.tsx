import React, { FC, useState } from "react";
import firebase from "../../firebase";
import { TileData } from "../../types/types";

const ResultImageList: FC = () => {
  const [data, setData] = useState<TileData[]>([]);

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

  return <div></div>;
};

export default ResultImageList;
