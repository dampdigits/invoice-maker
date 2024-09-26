import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <div className="ml-96 w-full mt-20">{children}</div>
    </div>
  );
}
