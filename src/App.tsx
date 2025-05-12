import { Toaster } from "react-hot-toast";

import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailPage } from "./components/pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <DetailPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster></Toaster>
    </>
  );
}

export default App;
