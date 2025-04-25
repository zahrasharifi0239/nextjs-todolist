import "@/styles/globals.scss";
import { Footer, Header } from "@/components";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
