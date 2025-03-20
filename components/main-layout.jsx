import Navbar from "@/components/molecules/navbar/navbar";
import "../styles/app.scss";
function MainLayout({ children }) {
  return (
    <main>
      <Navbar></Navbar>
      <div>{children}</div>
    </main>
  );
}

export default MainLayout;
