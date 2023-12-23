import TopNavbar from '../TopNavBar/TopNav'
import SideBar from '../../Components/Side Bar//SideBar'

function Layout({ children }) {
    return (
        <div>

            {/* Mobile Navbar hidden on desktop  */}
            <div className=" md:hidden">
                <TopNavbar />
            </div>
            
            <div class="max-h-screen flex ">

                {/* Sidebar hidden on mobile */}
    <nav className="w-72 flex-none hidden md:block lg:hidden xl:block">
      <SideBar />
    </nav>

                {/* main content  */}
                <main className="flex-1 min-w-0 overflow-auto ...">
                    <div className=" flex  justify-center">
                        {children}
                    </div>
                </main>

            </div>
        </div>
    )
}

export default Layout