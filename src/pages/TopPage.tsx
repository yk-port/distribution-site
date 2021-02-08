import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ResultPage from "./ResultPage";
import TopHeader from "../components/topPage/TopHeader";
import TopMain from "../components/topPage/TopMain";

const TopPage: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
        <Route exact path="/search/:keyword">
          <ResultPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default TopPage;
