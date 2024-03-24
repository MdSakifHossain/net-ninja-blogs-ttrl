import { useState } from "react";
import { BlogList } from "/src/components/";
import { BASE_URL } from "/src/constants/";
import useFetch from "/src/hooks/useFetch.js";

const SearchApp = () => {
	const [searchInputValue, setSearchInputValue] = useState("");

	const {
		data: blogs,
		loadingState,
		error: apiError
	} = useFetch(`${BASE_URL}/blogs?q=`);

	return (
		<div className="w-full h-auto px-4 py-4 grow flex flex-col gap-10">
			<div className="flex w-full items-center space-x-2">
				<input
					className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
					type="search"
					placeholder="Search..."
					value={searchInputValue}
					onChange={() => setSearchInputValue(event.target.value)}
				></input>
				<button
					type="button"
					className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
				>
					Search
				</button>
			</div>

			{blogs && (
				<BlogList
					title="Search Result"
					blogs={blogs}
					showCount={true}
				/>
			)}
		</div>
	);
};

export default SearchApp;
