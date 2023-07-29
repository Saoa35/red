import React from "react";
import "src/assets/css/filter.css";

interface Props {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	duration: string;
	setDuration: React.Dispatch<React.SetStateAction<string>>;
	level: string;
	setLevel: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = ({
	search,
	setSearch,
	duration,
	setDuration,
	level,
	setLevel,
}) => {
	return (
		<section className="trips-filter">
			<h2 className="visually-hidden">Trips filter</h2>
			<form className="trips-filter__form" autoComplete="off">
				<label className="trips-filter__search input">
					<span className="visually-hidden">Search by name</span>
					<input
						id="search-input"
						name="search"
						type="search"
						placeholder="search by title"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</label>
				<label className="select">
					<span className="visually-hidden">Search by duration</span>
					<select
						name="duration"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
					>
						<option value="">duration</option>
						<option value="0_x_5">&lt; 5 days</option>
						<option value="5_x_10">&lt; 10 days</option>
						<option value="10_x">&ge; 10 days</option>
					</select>
				</label>
				<label className="select">
					<span className="visually-hidden">Search by level</span>
					<select
						name="level"
						value={level}
						onChange={(e) => setLevel(e.target.value)}
					>
						<option value="">level</option>
						<option value="easy">easy</option>
						<option value="moderate">moderate</option>
						<option value="difficult">difficult</option>
					</select>
				</label>
			</form>
		</section>
	);
};

export default Filter;
