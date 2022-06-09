import { Link } from "react-router-dom";

import css from "./Nav.module.css";

type Props = {
	active: boolean;
	onActive: () => void;
};
const Nav = ({ active, onActive }: Props) => {
	return (
		<nav className={css["menu-list-wrapper"]}>
			<ul
				className={`${css["menu-list"]} ${active && css["nav-active"]}`}
			>
				<li>
					<Link to="/characters" onClick={onActive}>
						Characters
					</Link>
				</li>
				<li>
					<Link to="/favourites" onClick={onActive}>
						Favourite
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Nav };
