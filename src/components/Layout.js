import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen h-full flex flex-col justify-between">
      <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
