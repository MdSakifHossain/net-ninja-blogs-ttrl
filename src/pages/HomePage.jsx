import { Link } from "react-router-dom";
import { SiteName, SocialLinks } from "/src/constants/";

const HomePage = () => {
	window.document.title = SiteName;
	return (
		<div className="w-full h-auto font-Poppins grow flex flex-col items-center justify-center gap-20">
			<div id="top" className="p-0 m-0"></div>
			<div className="w-full h-[90svh] p-4 flex items-center justify-center flex-col gap-10">
				<h1 className="text-[3.40rem] font-extrabold font-Poppins">
					Welcome
				</h1>
				<img className="w-12/12" src="/svg/welcome.svg" alt="Image" />
				<p className="text-sm text-slate-600 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div className="bg-slate-50 w-full h-svh p-4 flex items-center justify-evenly flex-col gap-8">
				<h1 className="text-5xl font-extrabold font-Poppins">
					Be Creative
				</h1>
				<img
					className="w-12/12"
					src="/svg/be-creative.svg"
					alt="Image"
				/>
				<p className="text-sm text-slate-600 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
					tincidunt interdum nunc. Integer tempus pellentesque neque
					in faucibus. Nunc odio sem, accumsan vel lacinia at,
					ullamcorper et nibh. Etiam nec.
				</p>
			</div>
			<div className="w-full h-svh p-4 flex items-center justify-evenly flex-col gap-8">
				<h1 className="text-5xl font-extrabold font-Poppins">
					Share Ideas
				</h1>
				<img
					className="w-12/12"
					src="/svg/share-ideas.svg"
					alt="Image"
				/>
				<p className="text-sm text-slate-600 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
					tincidunt interdum nunc. Integer tempus pellentesque neque
					in faucibus. Nunc odio sem, accumsan vel lacinia at,
					ullamcorper et nibh. Etiam nec.
				</p>
			</div>
			<div className="bg-slate-50 w-full h-svh p-4 flex items-center justify-evenly flex-col gap-8">
				<h1 className="text-5xl font-extrabold font-Poppins">
					Don't be Evil
				</h1>
				<img className="w-12/12" src="/svg/evil.svg" alt="Image" />
				<p className="text-sm text-slate-600 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
					tincidunt interdum nunc. Integer tempus pellentesque neque
					in faucibus. Nunc odio sem, accumsan vel lacinia at,
					ullamcorper et nibh. Etiam nec.
				</p>
			</div>
			<div className="w-full h-svh p-4 flex items-center justify-evenly flex-col gap-8">
				<h1 className="text-4xl font-extrabold font-Poppins">
					Be Yourself <span className="text-red-500">NOT</span>{" "}
					Somebody else
				</h1>
				<img className="w-12/12" src="/svg/yourself.svg" alt="Image" />
				{false && (
					<p className="text-sm text-slate-600 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam tincidunt interdum nunc. Integer tempus pellentesque
						neque in faucibus. Nunc odio sem, accumsan vel lacinia
						at, ullamcorper et nibh. Etiam nec.
					</p>
				)}
			</div>
			<footer className="bg-slate-200 font-Quicksand w-full h-auto flex flex-col items-center py-10 gap-7">
				<a href="#top">
					<i className="bi bi-chevron-double-up"></i>
				</a>
				<p>&copy; {new Date().getFullYear()} All rights reserved</p>
				<ul className="w-full px-4 text-2xl text-black flex items-center justify-around">
					{SocialLinks.map(link => (
						<li>
							<a href={link.href} target="_blank">
								<i
									className={`bi bi-${link.name.toLowerCase()}`}
								></i>
							</a>
						</li>
					))}
				</ul>
				<p>Have you prayed your today's prayer?</p>
			</footer>
		</div>
	);
};

export default HomePage;
