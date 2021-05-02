import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

// NavItem for Navbar
const NavItem = ({ href, children }) => {
    // get current path
    const { pathname } = useRouter()

    return (
        <Link {...{ href }}>
            <a
                draggable="false"
                className={clsx(
                    'flex items-center p-3 text-lg hover:bg-gray-300',
                    { 'bg-gray-300': pathname === href } // set bg if current path === item link
                )}
            >
                {children}
            </a>
        </Link>
    )
}

// Navbar
const Header = () => {
    return (
        <nav className="flex flex-row items-stretch relative overflow-x-auto border-b-4 border-black">
            <span className="select-none text-3xl p-4">Idleon Guild Sheet</span>
            <NavItem href="/crop-setting">Crop Setting</NavItem>
            <NavItem href="/upload">Upload Screenshots</NavItem>
        </nav>
    )
}

export default Header
