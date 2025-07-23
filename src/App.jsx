import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/app-layout";

import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/post-job";
import JobListing from "./pages/job-listing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-job";
import JobPage from "./pages/job";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          
            <Onboarding />
        
        ),
      },
      {
        path: "/jobs",
        element: (
          
            <JobListing />
       
        ),
      },
      {
        path: "/post-job",
        element: (
      
            <PostJob />
         
        ),
      },
      {
        path: "/my-jobs",
        element: (
         
            <MyJobs />
      
        ),
      },
      {
        path: "/saved-jobs",
        element: (
        
            <SavedJobs />
        
        ),
      },
      {
        path: "/job/:id",
        element: (
          
            <JobPage />
        
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;