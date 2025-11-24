import { useState, useEffect, useRef } from 'react';

interface MenuItem {
	href: string;
	label: string;
	iconPaths: string[];
}

const menuItems: MenuItem[] = [
	{
		href: '/wp-admin',
		label: 'Escritorio',
		iconPaths: [
			'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
		],
	},
	{
		href: '/wp-admin/posts',
		label: 'Artículos',
		iconPaths: [
			'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		],
	},
	{
		href: '/wp-admin/media',
		label: 'Medios',
		iconPaths: [
			'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
		],
	},
	{
		href: '/wp-admin/products',
		label: 'Productos',
		iconPaths: [
			'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
		],
	},
	{
		href: '/wp-admin/pages',
		label: 'Páginas',
		iconPaths: [
			'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		],
	},
	{
		href: '/wp-admin/comments',
		label: 'Comentarios',
		iconPaths: [
			'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
		],
	},
	{
		href: '/wp-admin/appearance',
		label: 'Apariencia',
		iconPaths: [
			'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
		],
	},
	{
		href: '/wp-admin/plugins',
		label: 'Plugins',
		iconPaths: [
			'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
		],
	},
	{
		href: '/wp-admin/users',
		label: 'Usuarios',
		iconPaths: [
			'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
		],
	},
	{
		href: '/wp-admin/settings',
		label: 'Configuración',
		iconPaths: [
			'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
			'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
		],
	},
];

export default function SidebarWP() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const toggleRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Cerrar menú al hacer clic fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				toggleRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				!toggleRef.current.contains(event.target as Node)
			) {
				closeMenu();
			}
		};

		if (isMenuOpen) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isMenuOpen]);

	// Prevenir scroll del body cuando el menú está abierto
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	return (
		<div id="sidebar" className="flex  z-50">
			{/* Menu Items - Desktop */}
			<nav className="mt-0 md:mt-0 hidden md:block min-h-screen min-w-64 w-64 bg-[#1d2327] text-white transition-transform duration-300 z-40 overflow-y-auto -translate-x-full md:translate-x-0 border-r p-4 md:p-6">
				<ul className="space-y-0.5 md:space-y-1 px-1.5 md:px-4">
					{menuItems.map((item, index) => (
						<li key={index}>
							<a
								href={item.href}
								className="flex items-center px-2.5 md:px-3 py-2 text-xs md:text-sm text-[#b4b9be] hover:bg-[#2271b1] hover:text-white rounded transition-colors font-family-HelveticaNeue whitespace-nowrap bg-black"
							>
								<svg
									className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									{item.iconPaths.map((path, pathIndex) => (
										<path
											key={pathIndex}
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d={path}
										/>
									))}
								</svg>
								<span className="text-xs md:text-sm font-family-HelveticaNeue">
									{item.label}
								</span>
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Botón de hamburguesa (solo mobile) */}
			<button
				ref={toggleRef}
				id="mobile-menu-toggle"
				onClick={toggleMenu}
				className="md:hidden absolute top-3 left-3 z-50 p-2 rounded-lg bg-[#1d2327] text-white hover:bg-[#2271b1] transition-colors shadow-lg"
				aria-label="Toggle menu"
			>
				{isMenuOpen ? (
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</button>

            {/* Triangulo superior del menu desplegable */}
            {/* <div className="absolute top-[10px] left-[10px] w-4 h-4 bg-[#e16310] border-t-transparent border-l-transparent border-r-transparent border-b-[#1d2327] rotate-45"></div> */}
			{/* Menú desplegable (solo mobile) */}
			<div
				ref={menuRef}
				id="mobile-dropdown-menu"
				className={`md:hidden absolute top-16 left-4 w-64 bg-[#1d2327] rounded-lg shadow-xl z-40 border border-[#3c434a] overflow-hidden transition-all duration-200 origin-top-left ${
					isMenuOpen
						? 'scale-100 opacity-100 pointer-events-auto'
						: 'scale-95 opacity-0 pointer-events-none'
				}`}
			>
				<div className="max-h-[calc(100vh-80px)] overflow-y-auto">
					<ul className="py-2">
						{menuItems.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									onClick={closeMenu}
									className="flex items-center px-4 py-3 text-sm text-[#b4b9be] hover:bg-[#2271b1] hover:text-white transition-colors font-family-HelveticaNeue"
								>
									<svg
										className="w-5 h-5 mr-3 shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										{item.iconPaths.map((path, pathIndex) => (
											<path
												key={pathIndex}
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d={path}
											/>
										))}
									</svg>
									<span>{item.label}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

