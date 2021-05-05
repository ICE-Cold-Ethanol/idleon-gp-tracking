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
                    'flex items-center p-3 text-xl hover:bg-gray-300',
                    { 'bg-gray-300': pathname === href } // set bg if current path === item link
                )}
            >
                {children}
            </a>
        </Link>
    )
}

// item for redirect to external link
const ExternalItem = ({ href, children }) => {
    return (
        <a
            href={href}
            rel="noreferrer"
            target="_blank"
            draggable="false"
            className="flex items-center p-3 text-xl hover:bg-gray-300"
        >
            {children}
        </a>
    )
}

// Navbar
const Header = () => {
    return (
        <nav className="flex flex-row items-stretch overflow-x-auto border-b-4 border-black sticky top-0 bg-white">
            <span className="select-none text-3xl p-4">Idleon GP tracking</span>
            <NavItem href="/">Instruction</NavItem>
            <NavItem href="/convert">Convert Data</NavItem>
            <ExternalItem href="https://docs.google.com/spreadsheets/d/1kddJbUFcvV8HqbkTjHAlzpkmn-3j7lkPQ2oUq-XIu8g/edit?usp=sharing">
                Google Sheet Template
            </ExternalItem>
        </nav>
    )
}

export default Header
