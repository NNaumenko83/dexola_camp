import Theme from "./Theme/Theme";

import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";

function App() {
	return (
		<Theme>
			<Header />
			<Main>
				<Hero />
				<Features />
			</Main>
			<Footer />
		</Theme>
	);
}

export default App;
