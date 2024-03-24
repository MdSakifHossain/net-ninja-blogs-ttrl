const ErrorElement = ({ message, imgPath = "/svg/backup.svg" }) => {
	return (
		<div className="w-full h-auto grow flex flex-col gap-5">
			<div className="w-full h-auto grow flex flex-col items-center justify-center gap-4">
				<img
					className="w-12/12"
					src={imgPath}
					alt={!message ? "Error" : message}
				/>
				{message && (
					<p className="text-md font-medium text-center whitespace-pre-wrap">
						Error: {message}
					</p>
				)}
			</div>
		</div>
	);
};

export default ErrorElement;
