// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { NavigationBar } from "./components/";

// pages
import {
	HomePage,
	BlogsPage,
	AllBlogsPage,
	CreateBlogPage,
	BlogDetailPage,
	NotFound,
	SearchPage
} from "./pages/";

// constants
import { SiteName, NavLinks, SocialLinks } from "./constants/";

const App = () => {
	document.title = SiteName;

	const metaThemeTag = document.querySelector(`meta[name='theme-color']`);
	metaThemeTag.content = "";

	return (
		<Router>
			<div id="app" className="w-svw min-h-svh h-auto font-Quicksand flex flex-col">
				<NavigationBar siteName={SiteName} providedLinks={NavLinks} />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/blogs">
						<BlogsPage />
					</Route>
					<Route exact path="/create">
						<CreateBlogPage />
					</Route>
					<Route exact path="/blogs/:id">
						<BlogDetailPage />
					</Route>
					<Route exact path="/all">
						<AllBlogsPage />
					</Route>
					<Route exact path="/search">
						<SearchPage />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
