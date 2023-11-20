import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-full flex p-3">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default DashboardLayout;
