import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import css from "./Character.module.css";

type Props = {
	id: number;
	name: string;
	image: string;
	onFavouriteChange?: (id: number) => void;
	isFavourite: boolean;
	isChangeDisabled: boolean;
};

const Character = ({
	id,
	name,
	image,
	onFavouriteChange,
	isFavourite,
	isChangeDisabled,
}: Props) => {
	const handleClick = () => {
		if (!isFavourite && !isChangeDisabled) {
			onFavouriteChange?.(id);
		}
		if (isFavourite && isChangeDisabled) {
			onFavouriteChange?.(id);
		}
	};

	return (
		<div className={css.card}>
			<img className={css.img} src={image} alt="character" />
			<div className={css.description}>
				<p className={css.name}>{name}</p>
				<div className={css.icons}>
					<FontAwesomeIcon
						className={`${css.heart} ${
							isFavourite && css.favourite
						}`}
						icon={faHeart}
						onClick={handleClick}
					/>
					<Link to={`/characters/${id}`}>
						<FontAwesomeIcon className={css.info} icon={faInfo} />
					</Link>
				</div>
			</div>
		</div>
	);
};
export { Character };
