import "./App.css";
import Experience from "./sections/experience/Experience";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Main from "./sections/main/Main";

const colorPalette = {
  white: "#ffffff",
  grayLight: "#f5f5f0",
  gray: "#808080",
  black: "#111111",
};

function App() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
