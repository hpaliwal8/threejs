import { useState } from 'react'

// Constants
import { navLinks } from '../constants'

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, name, href }) => {
                if (name.toLowerCase() === 'resume') {
                    return (
                        <li key={id} className='nav-li'>
                            <a href={`https://drive.google.com/file/d/10nQ4Vj3mQRWN1zzEctmTUkvQGGacqSJz/view?usp=drive_link`} target="_blank" rel="noopener noreferrer" className='nav-li_a' onClick={() => { }}>{name}</a>
                        </li>
                    )
                } else {
                    return (
                        <li key={id} className='nav-li'>
                            <a href={`${href}`} className='nav-li_a' onClick={() => { }}>{name}</a>
                        </li>
                    )
                }

            })}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <header className='fixed left-0 right-0 top-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href='/' className='text-neutral-400 font-bold hover:text-white transition-colors flex justify-center items-center gap-2'>
                        <img src="assets/hp_logo_sun.svg" alt="logo" className='w-10 h-10' />
                        Hitansh
                    </a>
                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
                        aria-label='Toggle menu'>
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt='toggle' className='w-6 h-6' />
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>

                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
