import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import bgImage from "../../assets/images/mainBg.jpg";

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${bgImage})`,
      height: "100vh",
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();

  return <div className={classes.background}></div>;
};

export default TopMain;
