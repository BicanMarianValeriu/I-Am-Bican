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

const PortfolioSingle = Loadable({
	loader: () => import(/* webpackChunkName: "portfolio-single" */ "./pages/PortfolioSingle"),
	loading: DownloadLoader,
	modules: ["portfolio-single"]
});

const PortfolioArchive = Loadable({
	loader: () => import(/* webpackChunkName: "portfolio-archive" */ "./pages/PortfolioArchive"),
	loading: DownloadLoader,
	modules: ["portfolio-archive"]
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
		component: PortfolioArchive
	},
	{
		path: "/portfolio/:slug",
		exact: true,
		component: PortfolioSingle
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
