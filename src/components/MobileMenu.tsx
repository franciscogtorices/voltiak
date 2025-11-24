import { useState, useEffect } from 'react';

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [isTiendaExpanded, setIsTiendaExpanded] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(60);

	// Efecto para obtener la altura del header
	useEffect(() => {
		const header = document.querySelector('header');
		if (header) {
			setHeaderHeight(header.offsetHeight);
		}
	}, []);

	// Efecto para manejar el overflow del body
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	// Efecto para escuchar clics en el botón hamburguesa y cambiar su icono
	useEffect(() => {
		const toggleButton = document.getElementById('mobile-menu-toggle');
		const buttonSvg = toggleButton?.querySelector('svg');
		
		const handleToggle = () => {
			setIsOpen(prev => !prev);
		};

		if (toggleButton) {
			toggleButton.addEventListener('click', handleToggle);
		}

		// Cambiar el icono del botón según el estado
		if (buttonSvg && toggleButton) {
			const hamburgerPath = toggleButton.querySelector('path[data-hamburger]') as HTMLElement;
			const closePath = toggleButton.querySelector('path[data-close]') as HTMLElement;
			
			if (isOpen) {
				// Mostrar X, ocultar hamburguesa
				if (hamburgerPath) hamburgerPath.style.display = 'none';
				if (closePath) closePath.style.display = 'block';
			} else {
				// Mostrar hamburguesa, ocultar X
				if (hamburgerPath) hamburgerPath.style.display = 'block';
				if (closePath) closePath.style.display = 'none';
			}
		}

		return () => {
			if (toggleButton) {
				toggleButton.removeEventListener('click', handleToggle);
			}
		};
	}, [isOpen]);

	const handleClose = () => {
		setIsOpen(false);
	};

	if (!isOpen) return null;

	return (
		<div 
			className="absolute top-28 left-0 w-full h-full z-50 bg-white border-l border-b border-black" 
			style={{ borderWidth: '1px', paddingTop: `${headerHeight}px` }}
		>
			{/* Menú de navegación */}
			<nav className="flex flex-col items-center pt-8 px-4 h-full overflow-y-auto">
				{/* Tienda con submenú */}
				<div className="w-full max-w-md">
					<button
						onClick={() => setIsTiendaExpanded(!isTiendaExpanded)}
						className="w-full flex items-center justify-center text-black text-xl font-medium font-family-HelveticaNeue py-4"
					>
						<span>Tienda</span>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={`transition-transform ${isTiendaExpanded ? 'rotate-180' : ''}`}
						>
							<path
								d="M4 6L8 10L12 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					{/* Subitems de Tienda */}
					{isTiendaExpanded && (
						<div className=" text-center">
							<a
								href="/store?filter=ventiladores-industriales"
								onClick={handleClose}
								className="block text-blue-600 text-base font-family-HelveticaNeue py-2"
							>
								Ventiladores Industriales
							</a>
							<a
								href="/store?filter=ventiladores-evaporativos"
								onClick={handleClose}
								className="block text-blue-600 text-base font-family-HelveticaNeue py-2"
							>
								Ventiladores Evaporativos
							</a>
						</div>
					)}
				</div>

				{/* Otros items del menú */}
				<a
					href="/about"
					onClick={handleClose}
					className="w-full max-w-md text-black text-xl font-medium font-family-HelveticaNeue py-4 text-center"
				>
					Nuestra Compañía
				</a>

				<a
					href="/blog"
					onClick={handleClose}
					className="w-full max-w-md text-black text-xl font-medium font-family-HelveticaNeue py-4 text-center"
				>
					Blog
				</a>

				<a
					href="/contact"
					onClick={handleClose}
					className="w-full max-w-md text-black text-xl font-medium font-family-HelveticaNeue py-4 text-center"
				>
					Contacto
				</a>
			</nav>
		</div>
	);
}

