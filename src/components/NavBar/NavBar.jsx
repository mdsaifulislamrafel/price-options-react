import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/404', name: 'NotFound' }
    ];
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoIosCloseCircleOutline /> : <HiMenuAlt1 />
                }
                
            </div>
            <ul className={`md:flex absolute md:static bg-yellow-200 px-6 duration-1000 ${open ? 'top-20': '-top-60'}`}>
                {
                    routes.map((route) => {
                        return (
                            <Link key={route.id} route={route}>

                            </Link>
                        );
                    })
                }
            </ul>
        </nav>
    );
};

export default NavBar;