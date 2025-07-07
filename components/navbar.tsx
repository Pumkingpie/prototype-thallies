'use client';

import { OptimizedLink } from './OptimizedLink';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);

    // Función para alternar dropdowns en móvil
    const handleDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
            setOpenSubDropdown(null); // Cerrar subdropdowns también
        } else {
            setOpenDropdown(name);
            setOpenSubDropdown(null); // Cerrar otros subdropdowns
        }
    };

    // Función para alternar subdropdowns en móvil
    const handleSubDropdown = (name: string) => {
        if (openSubDropdown === name) {
            setOpenSubDropdown(null);
        } else {
            setOpenSubDropdown(name);
        }
    };

    // Función para manejar dropdowns en desktop
    const handleDesktopDropdown = (name: string) => {
        setDesktopDropdownOpen(desktopDropdownOpen === name ? null : name);
    };

    // Función para cerrar dropdowns cuando se hace clic en un enlace
    const handleLinkClick = () => {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setDesktopDropdownOpen(null);
    };

    // Cerrar dropdowns cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('.dropdown-container')) {
                setDesktopDropdownOpen(null);
            }
        };

        if (typeof window !== 'undefined') {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <OptimizedLink href="/" className="font-semibold text-xl text-[#001427]">
                    THALLIES
                </OptimizedLink>
                {/* Botón hamburguesa solo en móvil/tablet */}
                <button
                    className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Abrir menú"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </button>

                {/* Menú principal (desktop) */}
                <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4">
                    <Button variant="outline" size="sm" className='bg-[#BF0603] hover:bg-[#8B0000] text-white' asChild>
                        <OptimizedLink href="/">Home</OptimizedLink>
                    </Button>

                    {/* Dropdown 1: Who we are */}
                    <div className="relative group dropdown-container">
                        <button
                            type="button"
                            className="flex flex-col items-center px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none"
                            onClick={() => handleDesktopDropdown('whoWeAre')}
                        >
                            <span className="flex items-center">
                                Who we are
                                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen === 'whoWeAre' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                            </span>
                            <span className={`block h-1 w-6 bg-[#BF0603] rounded transition-transform duration-200 ${desktopDropdownOpen === 'whoWeAre' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </button>
                        <div className={`absolute right-0 top-full w-40 bg-white border rounded-md shadow-lg z-50 transition-all duration-200 origin-top min-w-max ${desktopDropdownOpen === 'whoWeAre' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'}`}>
                            <ul className="py-1">
                                <li>
                                    <OptimizedLink href="/about-us" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>About Us</OptimizedLink>
                                </li>
                                <li>
                                    <OptimizedLink href="/what-we-do" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>What we do</OptimizedLink>
                                </li>
                                <li>
                                    <OptimizedLink href="#project3" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>History of THALLIES</OptimizedLink>
                                </li>
                                <li>
                                    <OptimizedLink href="/faqs" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>FAQs</OptimizedLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Dropdown 2: Who we serve */}
                    <div className="relative group dropdown-container">
                        <button
                            type="button"
                            className="flex flex-col items-center px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none"
                            onClick={() => handleDesktopDropdown('whoWeServe')}
                        >
                            <span className="flex items-center">
                                Who we serve
                                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen === 'whoWeServe' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                            </span>
                            <span className={`block h-1 w-6 bg-[#BF0603] rounded transition-transform duration-200 ${desktopDropdownOpen === 'whoWeServe' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </button>
                        <div className={`absolute right-0 top-full w-48 bg-white border rounded-md shadow-lg z-50 transition-all duration-200 origin-top min-w-max ${desktopDropdownOpen === 'whoWeServe' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'}`}>
                            <ul className="py-1">
                                {/* Sub-dropdown Residential */}
                                <li className="relative group/sub">
                                    <div className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100">
                                        <span>Residential</span>
                                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="absolute left-full top-0 w-40 bg-white border rounded-md shadow-lg z-50 opacity-0 scale-95 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:pointer-events-auto transition-all duration-200 origin-top-left">
                                        <ul className="py-1">
                                            <li>
                                                <OptimizedLink href="/residential" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Single Family Homes</OptimizedLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* Sub-dropdown Enterprise */}
                                <li className="relative group/sub">
                                    <div className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100">
                                        <span>Enterprise</span>
                                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="absolute left-full top-0 w-40 bg-white border rounded-md shadow-lg z-50 opacity-0 scale-95 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:pointer-events-auto transition-all duration-200 origin-top-left">
                                        <ul className="py-1">
                                            <li>
                                                <OptimizedLink href="/enterprises/business" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Business</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="/enterprises/hospitality" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Hospitality</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="/enterprises/Student-housing" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Student Housing</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="/enterprises/Senior-Living-Solutions" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Senior Living</OptimizedLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Dropdown 3: Where we serve */}
                    <div className="relative group dropdown-container">
                        <button
                            type="button"
                            className="flex flex-col items-center px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none"
                            onClick={() => handleDesktopDropdown('whereWeServe')}
                        >
                            <span className="flex items-center">
                                Where we serve
                                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen === 'whereWeServe' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                            </span>
                            <span className={`block h-1 w-6 bg-[#BF0603] rounded transition-transform duration-200 ${desktopDropdownOpen === 'whereWeServe' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </button>
                        <div className={`absolute right-0 top-full w-40 bg-white border rounded-md shadow-lg z-50 transition-all duration-200 origin-top min-w-max ${desktopDropdownOpen === 'whereWeServe' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'}`}>
                            <ul className="py-1">
                                <li>
                                    <OptimizedLink href="#solution1" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Solution 1</OptimizedLink>
                                </li>
                                <li>
                                    <OptimizedLink href="#solution2" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={handleLinkClick}>Solution 2</OptimizedLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tres botones adicionales */}
                    <Button variant="outline" size="sm" className='bg-[#BF0603] hover:bg-[#8B0000] text-white' asChild>
                        <OptimizedLink href="/career">Carrers</OptimizedLink>
                    </Button>
                    <Button variant="outline" size="sm" className='bg-[#BF0603] hover:bg-[#8B0000] text-white' asChild>
                        <OptimizedLink href="/contact">Contact Us</OptimizedLink>
                    </Button>
                    <Button variant="outline" size="sm" className='bg-[#BF0603] hover:bg-[#8B0000] text-white' asChild>
                        <OptimizedLink href="/stormhub">Storm Hub</OptimizedLink>
                    </Button>
                </div>

                {/* Sidebar (móvil/tablet) */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.div
                            className="fixed inset-0 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Fondo oscuro solo debajo del navbar */}
                            <motion.div
                                className="fixed left-0 right-0 top-16 bottom-0 bg-black/40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                onClick={() => setSidebarOpen(false)}
                            />
                            {/* Panel lateral animado y central */}
                            <motion.aside
                                className="fixed left-1/2 top-16 -translate-x-1/2 w-[90vw] max-w-md h-[calc(100vh-4rem)] shadow-lg bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 rounded-b-2xl"
                                initial={{ y: -40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                {/* Línea animada superior */}
                                <motion.div
                                    className="absolute left-0 top-0 w-full h-1 bg-[#BF0603] rounded-t-2xl"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ originX: 0 }}
                                />
                                <button
                                    className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
                                    onClick={() => setSidebarOpen(false)}
                                    aria-label="Cerrar menú"
                                >
                                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                </button>

                                <OptimizedLink href="/" className="py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold" onClick={() => setSidebarOpen(false)}>Home</OptimizedLink>
                                {/* Dropdown Who we are */}
                                <div>
                                    <button
                                        className="w-full flex justify-between items-center py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold"
                                        onClick={() => handleDropdown('whoWeAre')}
                                    >
                                        Who we are
                                        <span>{openDropdown === 'whoWeAre' ? '▲' : '▼'}</span>
                                    </button>
                                    {openDropdown === 'whoWeAre' && (
                                        <ul className="pl-4">
                                            <li>
                                                <OptimizedLink href="/about-us" className="block py-2 text-base" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); }}>About Us</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="/what-we-do" className="block py-2 text-base" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); }}>What we do</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="/history-of-###" className="block py-2 text-base" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); }}>History of ###</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="/faqs" className="block py-2 text-base" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); }}>FAQs</OptimizedLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                {/* Dropdown Who we serve */}
                                <div>
                                    <button
                                        className="w-full flex justify-between items-center py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold"
                                        onClick={() => handleDropdown('whoWeServe')}
                                    >
                                        Who we serve
                                        <span>{openDropdown === 'whoWeServe' ? '▲' : '▼'}</span>
                                    </button>
                                    {openDropdown === 'whoWeServe' && (
                                        <ul className="pl-4">
                                            {/* Sub-dropdown Residential */}
                                            <li>
                                                <button
                                                    className="w-full flex justify-between items-center py-2 text-base"
                                                    onClick={() => handleSubDropdown('residentialSub')}
                                                >
                                                    Residential
                                                    <span>{openSubDropdown === 'residentialSub' ? '▲' : '▼'}</span>
                                                </button>
                                                {openSubDropdown === 'residentialSub' && (
                                                    <ul className="pl-4">
                                                        <li>
                                                            <OptimizedLink href="/residential" className="block py-2 text-sm" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); setOpenSubDropdown(null); }}>Single Family Homes</OptimizedLink>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            {/* Sub-dropdown Enterprise */}
                                            <li>
                                                <button
                                                    className="w-full flex justify-between items-center py-2 text-base"
                                                    onClick={() => handleSubDropdown('enterpriseSub')}
                                                >
                                                    Enterprise
                                                    <span>{openSubDropdown === 'enterpriseSub' ? '▲' : '▼'}</span>
                                                </button>
                                                {openSubDropdown === 'enterpriseSub' && (
                                                    <ul className="pl-4">
                                                        <li>
                                                            <OptimizedLink href="/enterprises/business" className="block py-2 text-sm" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); setOpenSubDropdown(null); }}>Business</OptimizedLink>
                                                        </li>
                                                        <li>
                                                            <OptimizedLink href="#enterprise-voip" className="block py-2 text-sm" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); setOpenSubDropdown(null); }}>Hospitality</OptimizedLink>
                                                        </li>
                                                        <li>
                                                            <OptimizedLink href="#enterprise-security" className="block py-2 text-sm" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); setOpenSubDropdown(null); }}>Student Housing</OptimizedLink>
                                                        </li>
                                                        <li>
                                                            <OptimizedLink href="#enterprise-support" className="block py-2 text-sm" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); setOpenSubDropdown(null); }}>Senior Living</OptimizedLink>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                {/* Dropdown Where we serve */}
                                <div>
                                    <button
                                        className="w-full flex justify-between items-center py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold"
                                        onClick={() => handleDropdown('whereWeServe')}
                                    >
                                        Where we serve
                                        <span>{openDropdown === 'whereWeServe' ? '▲' : '▼'}</span>
                                    </button>
                                    {openDropdown === 'whereWeServe' && (
                                        <ul className="pl-4">
                                            <li>
                                                <OptimizedLink href="#solution1" className="block py-2 text-base" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); }}>Solution 1</OptimizedLink>
                                            </li>
                                            <li>
                                                <OptimizedLink href="#solution2" className="block py-2 text-base" onClick={() => { setSidebarOpen(false); setOpenDropdown(null); }}>Solution 2</OptimizedLink>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <OptimizedLink href="/career" className="py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold" onClick={() => setSidebarOpen(false)}>Carrers</OptimizedLink>
                                <OptimizedLink href="/contact" className="py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold" onClick={() => setSidebarOpen(false)}>Contact Us</OptimizedLink>
                                <OptimizedLink href="/stormhub" className="py-3 px-3 rounded hover:bg-gray-100 text-lg font-semibold" onClick={() => setSidebarOpen(false)}>Storm Hub</OptimizedLink>
                            </motion.aside>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
