import css from "./Burger.module.css";

type Props = {
	active: boolean;
	onActive: () => void;
};

const Burger = ({ active, onActive }: Props) => {
	return (
		<div className={css.burger} onClick={onActive}>
			<div className={`${active && css.line1}`}></div>
			<div className={`${active && css.line2}`}></div>
			<div className={`${active && css.line3}`}></div>
		</div>
	);
};
export { Burger };
