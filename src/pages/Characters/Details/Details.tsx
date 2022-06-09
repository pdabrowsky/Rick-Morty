import { useDetails } from "./useDetails";

import css from "./Details.module.css";
import cs from "classnames";

type Props = {
	id: number;
};

const Details = ({ id }: Props) => {
	const { character, handleOnClick } = useDetails(id);

	const statusClassNames = cs({
		[css.dead]: character?.status === "Dead",
		[css.alive]: character?.status === "Alive",
		[css.unknown]: character?.status === "unknown",
	});

	return (
		<>
			<div className={`${css.backdrop}`} onClick={handleOnClick}></div>
			<div className={css.modal}>
				<h2>{character?.name}</h2>
				<img src={character?.image} alt="character"></img>
				<p>{`Location: ${character?.location.name}`}</p>
				<span className={statusClassNames}>{character?.status}</span>
			</div>
		</>
	);
};

export { Details };
