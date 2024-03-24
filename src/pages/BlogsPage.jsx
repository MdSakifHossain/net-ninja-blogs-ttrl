import { useState } from "react";

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
const BlogsPage = () => {
	const {
		data: blogs,
		loadingState,
		error: apiError
	} = useFetch(`${BASE_URL}/blogs?_sort=time&_order=desc&_start=0&_end=20`);

	window.document.title = "Recent Blogs";

	return (
		<div className="w-full h-auto px-4 py-4 font-Quicksand grow flex flex-col gap-5">
			{apiError && <ErrorElement imgPath="/svg/error.svg" />}
			{loadingState && <Loading />}
			{blogs && (
				<BlogList title="Blogs" blogs={blogs} showCount={false} />
			)}
			{apiError && <FullWidthBtn to="/">Go To Homepage</FullWidthBtn>}
		</div>
	);
};

export default BlogsPage;
