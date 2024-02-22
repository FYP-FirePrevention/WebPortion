import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header/>
                <section>
                    { children }
                </section>
            </div>
        </div>
    )
}