import { useState } from "react";
import { copy_to_clipboard } from "/src/utilities/";

const BlogDetail = ({ blog, id, BASE_URL, history }) => {
	const [blogMenuElement, setBlogMenuElement] = useState(false);

	const copyBlogID = id => {
		const element = document.getElementById("copyBlogIdElement");
		copy_to_clipboard(id);
		element.innerText = "Copied..!! ✅";
		setTimeout(() => {
			element.innerText = "Copy ID";
			setBlogMenuElement(prev => !prev);
		}, 300);
	};

	const copyPageLink = () => {
		const element = document.getElementById("copyPageLinkElement");
		copy_to_clipboard(window.document.location.href);
		element.innerText = "Copied..!! ✅";
		setTimeout(() => {
			element.innerText = "Copy Link";
			setBlogMenuElement(prev => !prev);
		}, 300);
	};

	const handleShareBlog = () => {
		(async () => {
			try {
				await navigator.share({
					text: `${blog.author}:\n${blog.title}\n`,
					url: window.document.location.href
				});
			} catch (err) {
				alert(
					"Something went wrong.\nMaybe this browser doesn't support sharing functionalities.\nOr you might have cancelled the operation manually..!!"
				);
			}
			setBlogMenuElement(prev => !prev);
		})();
	};

	const handleDeleteBlog = () => {
		const element = document.getElementById("deleteBlogElement");
		element.innerText = "Deleting...";

		const deleteBlog = async pass => {
			if (!pass) {
				element.innerText = "Delete";
				alert("❌ You didn't provided the password");
				setBlogMenuElement(prev => !prev);
				return;
			}

			if (pass !== "🔥") {
				alert("Password is wrong..!! 😂");
				element.innerText = "Delete";
				setBlogMenuElement(prev => !prev);
				return;
			}
			try {
				// this ID is from useParams
				const response = await fetch(`${BASE_URL}/blogs/${id}`, {
					method: "DELETE"
				});
				alert("The blog has been Deleted...");
				history.push("/blogs");
			} catch (err) {
				console.error(
					`Something weird happened while deleting "${id}" this blog...\n${err}`
				);
			}
		};
		setTimeout(() => {
			const password = prompt("What's the password..??");
			deleteBlog(password);
		}, 300);
	};
	
	if (blog) window.document.title = blog.title;
	
	return (
		<div className="w-full h-auto grow flex flex-col gap-5">
			<article className="font-Poppins flex flex-col gap-4">
				<div className="flex">
					<div className="flex gap-3 grow">
						<img
							src={
								blog.profilePic
									? blog.profilePic
									: "/svg/logo.svg"
							}
							alt="Profile Pic"
							className="w-2/12 ring ring-red-300 rounded-full p-[2px]"
						/>
						<div className="font-Quicksand">
							<h3 className="text-lg font-bold">{blog.author}</h3>
							<p className="text-md whitespace-pre-wrap">
								{blog.time
									? new Date(blog.time).toLocaleString()
									: "Time"}
							</p>
						</div>
					</div>

					<div className="flex items-start justify-center relative">
						<button
							onClick={() => {
								setBlogMenuElement(prev => !prev);
							}}
							className="w-5 h-0 text-xl"
						>
							<i className="bi bi-three-dots"></i>
						</button>
						{blogMenuElement && (
							<ul className="w-[65svw] absolute top-8 right-0 bg-white rounded-lg border shadow-2xl ">
								<li
									onClick={() => copyBlogID(blog.id)}
									className="text-center text-xl font-medium py-3 flex items-center justify-start gap-5 px-6 transition-all ease-in-out duration-50 active:bg-slate-50"
								>
									<span>💨</span>
									<span id="copyBlogIdElement">Copy ID</span>
								</li>
								<li
									onClick={() => copyPageLink()}
									className="text-center text-xl font-medium py-3 flex items-center justify-start gap-5 px-6 transition-all ease-in-out duration-50 active:bg-slate-50"
								>
									<span>🌐</span>
									<span id="copyPageLinkElement">
										Copy Link
									</span>
								</li>
								<li
									onClick={() => handleShareBlog()}
									className="text-center text-xl font-medium py-3 flex items-center justify-start gap-5 px-6 transition-all ease-in-out duration-50 active:bg-slate-50"
								>
									<span>🔗</span>
									<span>Share</span>
								</li>
								<li
									onClick={() => handleDeleteBlog()}
									className="text-center text-xl font-medium py-3 flex items-center justify-start gap-5 px-6 transition-all ease-in-out duration-50 active:bg-slate-50"
								>
									<span>🔥</span>
									<span id="deleteBlogElement">Delete</span>
								</li>
								<li
									onClick={() =>
										setBlogMenuElement(prev => !prev)
									}
									className="text-center text-xl font-medium py-3 flex items-center justify-start gap-5 px-6 transition-all ease-in-out duration-50 active:bg-slate-50"
								>
									<span>🚫</span>
									<span>Close Menu</span>
								</li>
							</ul>
						)}
					</div>
				</div>

				<div className="w-full h-auto flex flex-col gap-3">
					<h3 className="w-full h-auto text-3xl font-bold">
						{blog.title}
					</h3>
					<div className="w-full h-auto whitespace-pre-wrap grow">
						{blog.body}
					</div>
					<div>{blog.tags ? blog.tags : `#${blog.id}`}</div>
				</div>
			</article>
		</div>
	);
};

export default BlogDetail;
