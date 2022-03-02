import "./App.css";
import FAQs from "./component/FAQs/FAQs";
import Features from "./component/Features/Features";
import Footer from "./component/Footer/Footer";
import LineBreak from "./component/LineBreak/LineBreak";
import Main from "./component/Main/Main";

function App() {
  return (
    <>
      {" "}
      <Main />
      <LineBreak />
      <Features />
      <FAQs />
      <LineBreak />
      <Footer />
    </>
  );
}

export default App;
