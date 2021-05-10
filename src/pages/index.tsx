import React from "react";

import { Header } from "@components/organisms/header";
import { Footer } from "@components/organisms/footer";
import { Cards } from "@components/molecules/cards";
import { Main } from "@components/molecules/main";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
