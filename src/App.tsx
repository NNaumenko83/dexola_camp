import Theme from "./Theme/Theme";
import { Container } from "./components/Container/Container";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <Theme>
      <>
        <header>
          <Container>
            <p>Header</p>
          </Container>
        </header>
        <Main>
          <Container>
            <p>Main</p>
          </Container>
        </Main>
        <footer>
          <Container>
            <p>Footer</p>
          </Container>
        </footer>
      </>
    </Theme>
  );
}

export default App;
