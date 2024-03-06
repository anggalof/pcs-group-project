import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import pcsData from "../data/pcs.json";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    setNotification(pcsData.data.notification);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>PCS Group</title>
        <meta name="description" content="Component Website." />
        <meta name="author" content="@gagaalp" />
        <meta property="og:title" content="PCS Group" key="ogtitle" />+{" "}
        <meta property="og:description" content="Component Website." key="ogdesc" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div className="max-w-480 mx-auto">
        <Navigation data={notification} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </React.Fragment>
  );
}
