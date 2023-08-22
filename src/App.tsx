import Theme from "./Theme/Theme";
import { Container } from "./components/Container/Container";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";

function App() {
	return (
		<Theme>
			<>
				<Header />
				<Main>
					<Container>
						<Hero />
						<Features />
					</Container>
				</Main>
			</>
			<Footer />
		</Theme>
	);
}

export default App;
