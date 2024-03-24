import { useState, useEffect } from "react";

// constants
import { SiteName, BASE_URL } from "/src/constants/";

// custom hook
import useFetch from "/src/hooks/useFetch.js";

// components
import {
	Loading,
	BlogList,
	ErrorElement,
	FullWidthBtn
} from "/src/components/";

// main shit
const AllBlogsPage = () => {
	const {
		data: blogs,
		loadingState,
		error: apiError
	} = useFetch(`${BASE_URL}/blogs?_sort=time&_order=desc`);

	window.document.title = SiteName;

	return (
		<div className="w-full h-auto px-4 py-4 font-Quicksand grow flex flex-col gap-5">
			{apiError && <ErrorElement imgPath="/svg/error.svg" />}
			{loadingState && <Loading />}
			{blogs && <BlogList title="All Blogs" blogs={blogs} />}
			{apiError && <FullWidthBtn to="/">Go To Homepage</FullWidthBtn>}
		</div>
	);
};

export default AllBlogsPage;
