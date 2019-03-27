import Loadable from "react-loadable";

import Home from "./pages/Home";  
import DownloadLoader from "./components/General/download-loader";  

const FourOFour = Loadable({
	loader: () => import(/* webpackChunkName: "404" */ "./pages/404"),
	loading: DownloadLoader,
	modules: ["404"]
});

const Page = Loadable({
	loader: () => import(/* webpackChunkName: "page" */ "./pages/Page"),
	loading: DownloadLoader,
	modules: ["page"]
});

const Portfolio = Loadable({
	loader: () => import(/* webpackChunkName: "portfolio" */ "./pages/Portfolio"),
	loading: DownloadLoader,
	modules: ["portfolio"]
});

const Projects = Loadable({
	loader: () => import(/* webpackChunkName: "projects" */ "./pages/Projects"),
	loading: DownloadLoader,
	modules: ["projects"]
});

const routes = [
	{
		path: "/",
		exact: true,
		component: Home
	}, 
	{
		path: "/portfolio",
		exact: true,
		component: Projects 
	},
	{
		path: "/portfolio/:slug",
		exact: true,
		component: Portfolio
	},
	{
		path: "/p/:slug",
		component: Page
	},
	{
		path: "*",
		component: FourOFour
	}
];

export default routes;
