import Loadable from 'react-loadable';

import DownloadLoader from './components/General/prealoader';

const FourOFour = Loadable({
	loader: () => import(/* webpackChunkName: "404" */ "./pages/404"),
	loading: DownloadLoader,
	modules: ["404"]
});

const Home = Loadable({
	loader: () => import(/* webpackChunkName: "home" */ "./pages/Home"),
	loading: DownloadLoader,
	modules: ["home"]
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
	loader: () => import(/* webpackChunkName: "portfolio-archives" */ "./pages/PortfolioArchive"),
	loading: DownloadLoader,
	modules: ["portfolio-archives"]
});

const routes = [
	{
		path: "/",
		exact: true,
		element: Home
	},
	{
		path: "/portfolio/",
		exact: true,
		element: PortfolioArchive
	},
	{
		path: "/portfolio/:slug/",
		exact: true,
		element: PortfolioSingle
	},
	{
		path: "/p/:slug/",
		element: Page
	},
	{
		path: "*",
		element: FourOFour
	}
];

export default routes;
