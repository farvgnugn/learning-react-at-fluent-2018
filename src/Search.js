import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

// => implicit return
// => ( denotes a multi line expression
const Search = () => (
	<div className="search">
		<div>
			{preload.shows.map(tvShow => (
				<ShowCard
					key={tvShow.imdbID}
					title={tvShow.title}
					year={tvShow.year}
					description={tvShow.description}
				/>
			))}
		</div>
	</div>
);

export default Search;
