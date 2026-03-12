import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { BlogArticle } from "./components/BlogArticle";
import { Work } from "./components/Work";
import { ProjectDetail } from "./components/ProjectDetail";
import { Contact } from "./components/Contact";
import { Admin } from "./components/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: ProjectDetail },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogArticle },
      { path: "contact", Component: Contact },
      { path: "admin", Component: Admin },
    ],
  },
]);