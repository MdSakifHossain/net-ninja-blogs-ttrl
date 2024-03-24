import { useParams, Link, useHistory } from "react-router-dom";
import useFetch from "/src/hooks/useFetch.js";
import {
	BlogDetail,
	ErrorElement,
	FullWidthBtn,
	Loading
} from "/src/components/";
import { BASE_URL } from "/src/constants/";

const BlogDetailPage = () => {
	const { id } = useParams();
	const history = useHistory();

	const {
		data: blog,
		loadingState,
		error
	} = useFetch(`${BASE_URL}/blogs/${id}`);

	
	return (
		<div className="w-full h-auto px-4 py-4 grow flex flex-col gap-5">
			{!blog && <ErrorElement imgPath="/svg/404.svg" />}
			{loadingState && <Loading />}
			{blog && <BlogDetail blog={blog} id={id} BASE_URL={BASE_URL} history={history}/>}
			<FullWidthBtn to="..">Go Back</FullWidthBtn>
		</div>
	);
};

export default BlogDetailPage;
