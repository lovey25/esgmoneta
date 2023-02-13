import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import Panel from "./Panel";
import Main from "./Main";
import Main2 from "./Main2";
import { Footer } from "./Footer";

const St = {
  Container: styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: min-content min-content auto min-content;
    grid-template-areas:
      "head head"
      "panl main"
      "foot foot";
  `,
  Header: styled.div`
    grid-area: head;
  `,
  Panel: styled.div`
    grid-area: panl;
  `,
  Main: styled.div`
    grid-area: main;
  `,
  Footer: styled.div`
    grid-area: foot;
  `,
};

const App = () => {
  return (
    <St.Container>
      <St.Header>
        <Header />
      </St.Header>
      <St.Panel>
        <Panel />
      </St.Panel>
      <St.Main>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/111" element={<Main2 />} />
          </Routes>
        </BrowserRouter>
      </St.Main>

      <St.Footer>
        <Footer />
      </St.Footer>
    </St.Container>
  );
};

export default App;
