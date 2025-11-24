import type { ImageMetadata } from "astro";
import BlogPlaceholder1 from "../assets/blog-placeholder-1.jpg";
import BlogPlaceholder2 from "../assets/blog-placeholder-2.jpg";
import BlogPlaceholder3 from "../assets/blog-placeholder-3.jpg";
import BlogPlaceholder4 from "../assets/blog-placeholder-4.jpg";
import BlogPlaceholder5 from "../assets/blog-placeholder-5.jpg";
import Grupo4036 from "../assets/Grupo 4036.png";

export interface Article {
	id: string;
	title: string;
	excerpt: string;
	image: ImageMetadata;
	category: string;
	categoryName: string;
	hasBlueBackground: boolean;
	imagePosition: 'left' | 'right';
	author: string;
	pubDate: Date;
	content: string;
}

export const articlesData: Article[] = [
	{
		id: 'aire-limpio',
		title: 'Aire limpio, ambientes más sanos.',
		excerpt: 'El aire que respiramos en espacios cerrados influye directamente en nuestra salud y',
		image: BlogPlaceholder3,
		category: 'cuidados',
		categoryName: 'Cuidados',
		hasBlueBackground: false,
		imagePosition: 'left',
		author: 'Equipo Voltiak',
		pubDate: new Date('2024-05-17'),
		content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
	},
	{
		id: 'hogar-sano',
		title: 'Un hogar más sano para tu mejor amigo.',
		excerpt: 'La alegría que un perro o un gato trae a casa es incomparable, pero junto con el amor y la compañía,',
		image: BlogPlaceholder1,
		category: 'salud-y-cuidados',
		categoryName: 'Salud y cuidados',
		hasBlueBackground: false,
		imagePosition: 'right',
		author: 'Equipo Voltiak',
		pubDate: new Date('2024-04-15'),
		content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
	},
	{
		id: 'calidad-aire',
		title: 'Más allá del Aire: La Importancia de la Calidad del Aire.',
		excerpt: 'En ambientes donde la precisión lo es todo, el aire no puede ser una variable más. En Daikin,',
		image: BlogPlaceholder2,
		category: 'ambientes',
		categoryName: 'Ambientes',
		hasBlueBackground: false,
		imagePosition: 'left',
		author: 'Equipo Voltiak',
		pubDate: new Date('2024-03-20'),
		content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
	},
	{
		id: 'elegir-equipo',
		title: 'Cómo Elegir el Adecuado para tu Industria',
		excerpt: 'Mantener procesos eficientes y un consumo energético controlado en cualquier industria',
		image: BlogPlaceholder4,
		category: 'elegir-mi-equipo',
		categoryName: 'Elegir mi equipo',
		hasBlueBackground: true,
		imagePosition: 'left',
		author: 'Equipo Voltiak',
		pubDate: new Date('2024-02-10'),
		content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
	},
	{
		id: 'hogar-sano-2',
		title: 'Un hogar más sano para tu mejor amigo.',
		excerpt: 'La alegría que un perro o un gato trae a casa es incomparable, pero junto con el amor y la compañía,',
		image: BlogPlaceholder1,
		category: 'salud-y-cuidados',
		categoryName: 'Salud y cuidados',
		hasBlueBackground: false,
		imagePosition: 'right',
		author: 'Equipo Voltiak',
		pubDate: new Date('2024-01-25'),
		content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
	},
	{
		id: 'calidad-aire-2',
		title: 'Más allá del Aire: La Importancia de la Calidad del Aire.',
		excerpt: 'En ambientes donde la precisión lo es todo, el aire no puede ser una variable más. En Daikin,',
		image: BlogPlaceholder2,
		category: 'ambientes',
		categoryName: 'Ambientes',
		hasBlueBackground: false,
		imagePosition: 'left',
		author: 'Equipo Voltiak',
		pubDate: new Date('2024-01-10'),
		content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
	},
];

// Mapeo de categorías a slugs
export const categoryMap: Record<string, string> = {
	'todos': 'todos',
	'elegir-mi-equipo': 'elegir-mi-equipo',
	'cuidados': 'cuidados',
	'ambientes': 'ambientes',
	'salud-y-cuidados': 'salud-y-cuidados',
	'compromiso-ambiental': 'compromiso-ambiental',
};

