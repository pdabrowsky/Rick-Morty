import { useCallback, useState, useEffect, useRef } from "react";

type Response = {
	info: {
		count: number;
		next: null | string;
		pages: number;
		prev: null | string;
	};
	results: {
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
	}[];
};

type FetchProps = {
	query?: string;
	nextPage?: string;
};

const initialData = {
	info: {
		count: 0,
		next: null,
		pages: 0,
		prev: null,
	},
	results: [],
};

const useCharacters = () => {
	const [data, setData] = useState<Response>(initialData);
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const delayTimeout = useRef<ReturnType<typeof setTimeout>>();

	const info = data.info;
	const characters = data.results;

	const handleSearchChange = (query: string) => {
		clearTimeout(delayTimeout.current);
		setQuery(query);
		delayTimeout.current = setTimeout(() => {
			fetchCharacters({ query });
		}, 150);
	};

	const fetchCharacters = useCallback(
		async ({ query, nextPage }: FetchProps) => {
			try {
				const urlParams = new URLSearchParams();
				urlParams.set("name", query ?? "");
				setIsLoading(true);

				const res = await fetch(
					nextPage ??
						"https://rickandmortyapi.com/api/character/?" +
							urlParams.toString()
				);

				const data = await res.json();
				setIsLoading(false);
				if (data.error) {
					throw new Error(data.error);
				}
				if (nextPage) {
					setData((state) => ({
						...data,
						results: [...state.results, ...data.results],
					}));
				} else {
					setData(data);
				}
			} catch (error) {
				setData(initialData);
			} finally {
				setIsLoading(false);
			}
		},
		[]
	);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.scrollingElement?.scrollTop;
			const scrollHeight = document.scrollingElement?.scrollHeight;

			if (scrollHeight && scrollTop) {
				const isOnBottom =
					scrollHeight - scrollTop === window.innerHeight;

				if (isOnBottom && !isLoading) {
					fetchCharacters({ nextPage: info.next ?? undefined });
				}
			}
		};

		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [fetchCharacters, info.next, isLoading]);

	useEffect(() => {
		fetchCharacters({});
	}, [fetchCharacters]);

	return {
		info,
		characters,
		query,
		isLoading,
		handleSearchChange,
	};
};

export { useCharacters };
