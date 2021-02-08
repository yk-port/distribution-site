import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopHeader from "./TopHeader";
import TopMain from "./TopMain";

const TopPage: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
        <Route exact path="/search/:keyword">
          検索結果
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default TopPage;
