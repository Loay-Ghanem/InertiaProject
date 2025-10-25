import Navbar from "@/components/ui/nav-bar";
import CustomFooter from "@/components/ui/CustomFooter";
export default function Layout({ children }) {
    return (
        <div className="w-full">
            <header className="flex items-center w-full">
                <Navbar />
            </header>
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                {children}
            </main>
            <CustomFooter />
        </div>
    );
}