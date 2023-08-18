import Theme from "./Theme/Theme";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <Theme>
      <>
        <Header />
        <Main>
          <Container>
            <p>Main</p>
          </Container>
        </Main>
      </>
      <Footer />
    </Theme>
  );
}

export default App;
