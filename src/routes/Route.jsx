import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Contact = () => {
	return <div>Contact us page</div>;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
]);

export default router;
