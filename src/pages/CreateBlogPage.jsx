import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FullWidthBtn } from "/src/components/";
import { BASE_URL } from "/src/constants/";

const CreateBlogPage = () => {
	const [authorName, setAuthorName] = useState("");
	const [blogTitle, setBlogTitle] = useState("");
	const [blogBody, setBlogBody] = useState("");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	window.document.title = "Create New Blog";

	const handleSubmit = event => {
		event.preventDefault();

		const blogObj = {
			author: authorName.trim(),
			title: blogTitle.trim(),
			body: blogBody.trim(),
			time: new Date().getTime()
		};

		(async () => {
			if (!authorName) return;
			if (!blogTitle) return;
			if (!blogBody) return;
			setIsPending(prev => !prev);
			try {
				const response = await fetch(`${BASE_URL}/blogs`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(blogObj)
				});
				if (!response.ok) {
					throw new Error(`HTTP error: ${response.status}`);
				}
				setIsPending(prev => !prev);
				setAuthorName("");
				setBlogTitle("");
				setBlogBody("");
			} catch (error) {
				alert("Error adding blog:", error);
			}
			history.push("/blogs");
		})();
	};

	return (
		<div className="w-full h-auto px-4 py-4 grow flex flex-col gap-5">
			<h1 className="text-4xl font-Poppins font-extrabold">
				Create New Blog
			</h1>

			<div className="w-full h-auto grow">
				<form
					onSubmit={handleSubmit}
					className="w-full h-auto flex flex-col gap-4"
				>
					<div className="w-full flex flex-col gap-2">
						<label className="text-lg font-medium leading-none">
							Author Name:
						</label>
						<input
							className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-md font-medium focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="Enter your name"
							required
							disabled={isPending}
							value={authorName}
							onChange={event =>
								setAuthorName(event.target.value)
							}
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<label className="text-lg font-medium leading-none">
							Blog Title:
						</label>
						<input
							className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-md font-medium focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="Enter Blog Title"
							required
							disabled={isPending}
							value={blogTitle}
							onChange={event => setBlogTitle(event.target.value)}
						/>
					</div>
					<div className="w-full grow flex flex-col gap-2">
						<label className="text-lg font-medium leading-none">
							Blog Body:
						</label>
						<textarea
							className="flex w-full h-24 rounded-md border border-black/30 bg-transparent px-3 py-2 text-md font-medium focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="Blogs Body"
							required
							disabled={isPending}
							value={blogBody}
							onChange={event => setBlogBody(event.target.value)}
						></textarea>
					</div>
					<div className="w-full flex items-center justify-end gap-4">
						<button
							disabled={isPending}
							className="w-6/12 border border-red-500 bg-red-500 text-white text-lg font-semibold px-5 py-3 rounded-xl transition ease-in duration-150 disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isPending ? "Adding..." : "Add Blog"}
						</button>
					</div>
				</form>
			</div>
			<FullWidthBtn to="/" disabled={isPending}>
				Go to Homepage
			</FullWidthBtn>
		</div>
	);
};

export default CreateBlogPage;
