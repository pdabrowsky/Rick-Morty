import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Characters } from "pages/Characters/Characters";
import { Favourites } from "pages/Favourites/Favourites";

import { NavigationBar } from "components/NavigationBar/NavigationBar";

function App() {
	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/characters" element={<Characters />} />
				<Route path="/characters/:id" element={<Characters />} />
				<Route path="/favourites" element={<Favourites />} />
				<Route path="*" element={<Characters />} />
			</Routes>
		</Router>
	);
}

export default App;
