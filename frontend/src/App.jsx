import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/NotFound";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import Protected from "./Components/Protected/Protected";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Data/userReducer";
import activityReducer from "./Data/activityReducer";
import AboutPage from "./Pages/AboutPage";

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: activityReducer,
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <HomePage />
        </Protected>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path:"/about",
      element:<AboutPage/>
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
