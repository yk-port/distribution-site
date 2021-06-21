import React, { FC } from "react";
// BrowserRouterモジュールをRouterという名前で使用するための記述
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResultPage from "./ResultPage";
import TopHeader from "../components/topPage/TopHeader";
import TopMain from "../components/topPage/TopMain";

const TopPage: FC = () => {
  return (
    <Router>
      {/* URLで切り替える処理をするためにはSwitchで囲う */}
      <Switch>
        {/* / に一致する場合は以下のコンポーネントを表示 */}
        <Route path="/" exact>
          <TopHeader />
          <TopMain />
        </Route>
        {/* /search/:keyword に一致する場合は以下のコンポーネントを表示 */}
        <Route path="/search/:keyword" exact>
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default TopPage;
