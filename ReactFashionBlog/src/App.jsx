import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image="./blog-image-1.jpg"
          alt="A woman in orange walking beside a blue wall"
          content="Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor?..."
        />
        <Article
          date="11/10/20"
          title="A Walk Through Queens"
          image="./blog-image-2.jpg"
          alt="City street view in Queens"
          content="Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor?..."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
