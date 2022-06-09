import { useParams } from "react-router-dom";

import { PageContent } from "components/PageContent/PageContent";
import { Loader } from "components/PageContent/Loader";

import { Character } from "./Character";
import { SearchBar } from "./Search/SearchBar";
import { Details } from "./Details/Details";

import { useCharacters } from "./useCharacters";
import { useFavoriteToggle } from "./useFavouriteToggle";

import css from "./Characters.module.css";

const Characters = () => {
	const { id } = useParams();
	const { handleFavoriteChange, favourites } = useFavoriteToggle();
	const { characters, query, isLoading, handleSearchChange } =
		useCharacters();

	return (
		<PageContent>
			<SearchBar query={query} onChange={handleSearchChange} />
			<ul className={css.cards}>
				{characters.map(({ id, name, image }) => {
					const isFavourite = favourites.indexOf(id) !== -1;
					return (
						<Character
							key={id}
							id={id}
							name={name}
							image={image}
							onFavouriteChange={handleFavoriteChange}
							isFavourite={isFavourite}
							isChangeDisabled={false}
						/>
					);
				})}
			</ul>
			{isLoading && <Loader />}
			{id && <Details id={Number(id)} />}
		</PageContent>
	);
};
export { Characters };
