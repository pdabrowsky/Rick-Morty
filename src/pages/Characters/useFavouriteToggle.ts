import { useEffect, useState } from "react";

const localStorageFavoriteKey = "favorites";

const useFavoriteToggle = () => {
	const [favourites, setFavourites] = useState<number[]>([]);

	const handleFavoriteChange = (id: number) => {
		const json = localStorage.getItem(localStorageFavoriteKey) ?? "[]";
		const favouriteIds: number[] = JSON.parse(json);
		const index = favouriteIds.indexOf(id);

		if (index === -1) {
			favouriteIds.push(id);
		} else {
			favouriteIds.splice(index, 1);
		}
		localStorage.setItem(
			localStorageFavoriteKey,
			JSON.stringify(favouriteIds)
		);

		setFavourites(favouriteIds);
	};

	useEffect(() => {
		const json = localStorage.getItem(localStorageFavoriteKey) ?? "[]";
		const favoriteIds: number[] = JSON.parse(json);

		setFavourites(favoriteIds);
	}, []);
	return { handleFavoriteChange, favourites };
};

export { useFavoriteToggle };
