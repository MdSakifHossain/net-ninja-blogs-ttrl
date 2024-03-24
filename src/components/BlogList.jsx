import { SingleBlog } from "/src/components/";

const BlogList = ({ title, blogs, showCount=true }) => {
	return (
		<div className="w-full grow flex flex-col gap-5">
			<h2 className="border-l-8 border-red-500 pl-3 text-4xl font-semibold capitalize">
				{title}
			</h2>
			
			{showCount && <p className="font-medium">{blogs.length} Blogs</p>}

			<ul className="w-full flex flex-col gap-3">
				{blogs.map(blog => (
					<li key={blog.id}>
						<SingleBlog blog={blog} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogList;
