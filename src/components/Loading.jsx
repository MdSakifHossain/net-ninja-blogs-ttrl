const Loading = ({ imgPath }) => {
	return (
		<div className="w-full grow flex items-center justify-center flex-col gap-8">
			<p className="text-4xl font-black">Loading...</p>
			{false && <img
				src={imgPath}
				alt="Loading..."
				className="w-8/12 animate-[spin_1.2s_linear_infinite_reverse]"
			/>}
		</div>
	);
};

export default Loading;
