import React from 'react';
import Head from "next/head";
import "@styles/global.css";

export const metadata = {
    title: "Placeam",
    description: "Buy and Sell"
} 

const layout = ({ children }) => {
  return (
    <html lang="en">
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/placeam_logo.png"/>
        </Head>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
};

export default layout;
