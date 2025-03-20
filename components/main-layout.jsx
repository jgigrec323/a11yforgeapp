import Navbar from "@/components/molecules/navbar/navbar";
import "../styles/app.scss";
import { Toaster } from "react-hot-toast";
function MainLayout({ children }) {
  return (
    <main>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <div>{children}</div>
    </main>
  );
}

export default MainLayout;
