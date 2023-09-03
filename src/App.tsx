import Theme from "./Theme/Theme";
import { AnimateSection } from "./components/AnimateSection/AnimateSection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { JoinUs } from "./components/JoinUs/JoinUs";
import { Main } from "./components/Main/Main";
import { TopNfts } from "./components/TopNfts/TopNfts";

function App() {
	return (
		<Theme>
			<Header />
			<Main>
				<Hero />
				<AnimateSection />
				<Features />
				<TopNfts />
				<JoinUs />
			</Main>
			<Footer />
			<ToastContainer />
		</Theme>
	);
}

export default App;
