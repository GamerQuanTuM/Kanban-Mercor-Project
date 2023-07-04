import "./globals.css";
import { Inter } from "next/font/google";
import { ContextProvider } from "@/store";
import { Header, Sidebar, Navbar } from "@/utils/index";

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban Clone",
  description: "Project Submission",
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <main className="flex w-full">
            <Sidebar />
            <div className="flex flex-col w-full border-gray-300">
              <Navbar />
              <hr className="border-t border-gray-300" />
              <div className=" mx-4 md:mx-8 lg:mx-12 mt-5">
                <Header />
                <div className="mt-10">{children}</div>
              </div>
            </div>
          </main>
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
