import cs from "classnames";
import css from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={css.loader}>
			<div className={cs(css.dot, css.dot1)}></div>
			<div className={cs(css.dot, css.dot2)}></div>
			<div className={cs(css.dot, css.dot3)}></div>
		</div>
	);
};

export { Loader };
