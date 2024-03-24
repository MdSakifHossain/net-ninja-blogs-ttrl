import { Link } from "react-router-dom";

const FullWidthBtn = ({ to, children }) => {
	return (
		<Link
			to={to}
			className="border border-red-500 bg-red-500 text-xl text-white text-center py-4 font-semibold rounded-xl capitalize"
		>
			{children}
		</Link>
	);
};

export default FullWidthBtn;
