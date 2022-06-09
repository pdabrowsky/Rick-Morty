import { useCallback, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

type Character = {
	created: string;
	episode: string[];
	gender: "unknown" | "Female" | "Male" | "Genderless";
	id: number;
	image: string;
	location: {
		name: string;
		url: string;
	};
	name: string;
	origin: {
		name: string;
		url: string;
	};
	species: string;
	status: "Dead" | "Alive" | "unknown";
	type: string;
	url: string;
};

const useDetails = (id: number) => {
	const [character, setCharacter] = useState<Character>();
	const navigate = useNavigate();

	const handleOnClick = useCallback(
		() => navigate("/characters", { replace: true }),
		[navigate]
	);

	const fetchCharacters = useCallback(async () => {
		try {
			const res = await fetch(
				`https://rickandmortyapi.com/api/character/${id}`
			);

			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}
			setCharacter(data);
		} catch (error) {}
	}, [id]);

	useEffect(() => {
		fetchCharacters();
	}, [fetchCharacters]);

	return { character, handleOnClick };
};

export { useDetails };
