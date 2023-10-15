import React, { useState, useEffect } from "react";
import Head from "next/head";
// import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

interface Prop {
  Component: () => React.JSX.Element;
}

const App = ({ Component }: Prop) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Haru Camping</title>
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(App);
