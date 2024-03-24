import { Link } from "react-router-dom";
import { ErrorElement, FullWidthBtn } from "/src/components/";
import { SiteName } from "/src/constants/"

const NotFound = () => {
	window.document.title = "Not Found";
	return (
		<div className="w-full h-auto px-4 py-4 grow flex flex-col gap-5">
			<ErrorElement imgPath="/svg/404.svg" />
			<FullWidthBtn to="/">Go To Homepage</FullWidthBtn>
		</div>
	);
};

export default NotFound;
