import css from "./SearchBar.module.css";

type Props = {
	onChange: (query: string) => void;
	query: string;
};

const SearchBar = ({ onChange, query }: Props) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};
	return (
		<div className={css.wrapper}>
			<input
				className={css.search}
				type="text"
				value={query}
				placeholder="Search"
				onChange={handleChange}
			/>
		</div>
	);
};

export { SearchBar };
