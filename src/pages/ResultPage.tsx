import React, { FC } from "react";
import ResultImageList from "../components/resultPage/ResultImageList";
import TopHeader from "../components/topPage/TopHeader";

const ResultPage: FC = () => {
  return (
    <div>
      <TopHeader />
      <ResultImageList />
    </div>
  );
};

export default ResultPage;
