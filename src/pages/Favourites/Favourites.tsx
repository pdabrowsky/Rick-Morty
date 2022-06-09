import { PageContent } from "components/PageContent/PageContent";

import { Character } from "pages/Characters/Character";

import { useCharacters } from "pages/Characters/useCharacters";
import { useFavoriteToggle } from "pages/Characters/useFavouriteToggle";

import css from "./Favourites.module.css";

const Favourites = () => {
	const { handleFavoriteChange, favourites } = useFavoriteToggle();
	const { characters } = useCharacters();

	//todo filter -> fetch
	return (
		<PageContent className={css.wrapper}>
			<ul className={css.cards}>
				{characters
					.filter(
						({ id }: { id: number }) =>
							favourites.indexOf(id) !== -1
					)
					.map(({ id, name, image }) => {
						const isFavourite = favourites.indexOf(id) !== -1;
						return (
							<Character
								key={id}
								id={id}
								name={name}
								image={image}
								onFavouriteChange={handleFavoriteChange}
								isFavourite={isFavourite}
								isChangeDisabled={true}
							/>
						);
					})}
			</ul>
		</PageContent>
	);
};
export { Favourites };
