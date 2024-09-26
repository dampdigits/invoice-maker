import Navbar from "@/components/Navbar";

export default function DashLayout({ children }) {
  return (
    <div className="flex">
      <Navbar />
      <div className="max-w-7xl mx-auto w-full mt-20">{children}</div>
    </div>
  );
}
