import { useState } from "react";

import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

import css from "./NavigationBar.module.css";

const NavigationBar = () => {
	const [active, setActive] = useState<boolean>(false);

	const handleToggle = () => {
		setActive((state) => !state);
	};
	const handleClose = () => {
		setActive(false);
	};

	return (
		<header className={css["navigation-bar"]}>
			<Logo />
			<Nav active={active} onActive={handleClose} />
			<Burger active={active} onActive={handleToggle} />
		</header>
	);
};

export { NavigationBar };
