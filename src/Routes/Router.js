import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Faq from '../components/Faq';
import Home from '../components/Home';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])