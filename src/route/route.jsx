import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout/RootLayout";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Blog from "../components/Blog/Blog";
import JobDetails from "../components/JobDetails/JobDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                loader: () => fetch('../../public/jobs.json'),
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/applied-jobs',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/featured-jobs/:id',
                loader: () => fetch('../../public/jobs.json'),
                element: <JobDetails></JobDetails>
            }
        ]
    }
])

export default router;