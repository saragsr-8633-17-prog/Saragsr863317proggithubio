import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ImageProvider } from "./components/ImageManager";

export default function App() {
  return (
    <ImageProvider>
      <RouterProvider router={router} />
    </ImageProvider>
  );
}
