import { Link } from "react-router-dom";

const NavigationBar = ({
	siteName = "name me..!! 😐",
	providedLinks = [
		{ output: "link 1", href: "#", id: 1 },
		{ output: "link 2", href: "#", id: 2 },
		{ output: "link 3", href: "#", id: 3 },
		{ output: "link 4", href: "#", id: 4 }
	]
}) => {
	const closeNavMenu = () => {
		const nav_menu = document.getElementById("nav_menu");
		nav_menu.style.display = "none";
		nav_menu.classList.remove("backdrop-blur-none");
	};
	const toggleNavMenu = () => {
		const nav_menu = document.getElementById("nav_menu");
		nav_menu.style.display = "block";
		nav_menu.style.width = "100%";
		nav_menu.classList.add("backdrop-blur-md");
	};

	return (
		<>
			<nav className="flex items-center justify-between p-3 sticky top-0 z-[1] backdrop-blur-md">
				<div className="capitalize text-2xl font-bold text-red-500">
					<Link to="/">{siteName}</Link>
				</div>
				<button
					className="text-red-500 text-xl font-bold border border-2 border-red-500 px-3 py-1.5 rounded-lg transition ease-in duration-150 hover:bg-red-500 hover:text-white"
					onClick={() => toggleNavMenu()}
				>
					&#9776;
				</button>
			</nav>
			<div
				id="nav_menu"
				className="bg-red-500 text-slate-200 w-full h-full z-[2] fixed top-0 right-0 hidden flex flex-col"
			>
				<div className="flex justify-end p-3">
					<button
						className="text-4xl border border-2 px-3 rounded-xl"
						onClick={() => closeNavMenu()}
					>
						&times;
					</button>
				</div>
				<div className="w-full min-h-full h-auto">
					<div className="w-full h-full px-10 py-12 flex flex-col gap-5">
						{providedLinks.map(link => {
							return (
								<Link
									key={link.id}
									to={link.href}
									className="w-full border border-transparent text-3xl px-4 rounded-lg py-4 font-bold hover:bg-red-400"
									onClick={() => closeNavMenu()}
								>
									{link.output}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default NavigationBar;
