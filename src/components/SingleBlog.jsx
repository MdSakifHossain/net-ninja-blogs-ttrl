import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
	return (
		<div className="group border-2 border-red-200 rounded-xl px-3 pt-2 pb-4 flex flex-col gap-2 shadow-md transition ease-in-out duration-500 hover:shadow-2xl hover:border-red-500">
			<div className="w-full py-2 flex gap-3">
				<img
					src={blog.profilePic ? blog.profilePic : "/svg/logo.svg"}
					alt="Profile Pic"
					className="rounded-full w-[2.70rem] ring ring-red-300 p-[2px] group-hover:ring-red-400"
				/>
				<div>
					<p className="text-base font-bold">{blog.author}</p>
					<p className="text-sm font-medium">
						{new Date(blog.time).toLocaleString()}
					</p>
				</div>
			</div>
			<div className="pb-3 flex flex-col gap-2">
				<p className="text-[1.40rem] font-semibold group-hover:text-red-500">
					{blog.title}
				</p>
				<p className="text-black font-normal">#{blog.id}</p>
			</div>
			<div className="w-full flex items-center justify-end">
				<Link
					to={`/blogs/${blog.id}`}
					className="border border-red-500 bg-red-500 text-white text-sm py-2 px-5 rounded-md font-semibold transition-all ease-in-out duration-200 hover:bg-red-600 hover:ring hover:ring-red-300 hover:color-red-400"
				>
					Read
				</Link>
			</div>
		</div>
	);
};

export default SingleBlog;
