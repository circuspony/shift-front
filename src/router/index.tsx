import Balance from '../pages/balance';
import EditProfile from '../pages/profile/editprofile';
import Home from '../pages/home';
import Profile from '../pages/profile/profile';
import Project from '../pages/project';
import Layout from '../components/layout';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import ProjectCreate from '../pages/profile/projectCreate';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: 'balance',
        element: <Balance />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'profile/edit',
        element: <EditProfile />
      },
      {
        path: 'project/:id',
        element: <Project />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '*',
        element: <Home />
      },
      {
        path: 'profile/projectcreate',
        element: <ProjectCreate />
      }
    ]
  }
]);

export default router;
