import type { ImageMetadata } from "astro";
import Grupo4030 from "../assets/Grupo 4030.png";
import Grupo4036 from "../assets/Grupo 4036.png";
import BlogPlaceholder3 from "../assets/blog-placeholder-3.jpg";

export interface Product {
	id: number;
	slug: string;
	name: string;
	subtitle: string;
	category: string;
	image: ImageMetadata;
	description: string;
	airFlow: string;
	airFlowUnit: string;
	airFlowDescription: string;
	features: Array<{
		icon: string;
		text: string;
	}>;
	motorTitle: string;
	motorDescription: string;
	noiseLevel: string;
	noiseDescription: string;
	applications: Array<{
		name: string;
		image: ImageMetadata;
	}>;
	faqs: Array<{
		question: string;
		answer: string;
	}>;
	specifications: {
		title: string;
		description: string;
		models: Array<{
			model: string;
			diameter: string;
			speedRange: string;
			maxAirVolume: string;
			motor: string;
			motorPower: string;
			voltage: string;
			amperage: string;
			noiseLevel: string;
			weight: string;
		}>;
	};
}

export const productsData: Record<string, Product> = {
	"airfree": {
		id: 1,
		slug: "airfree",
		name: "AirFree",
		subtitle: "Tecnología y aerodinámica.",
		category: "Ventiladores Industriales",
		image: Grupo4030,
		description: "Diseñado para mover grandes volúmenes de aire con el mínimo consumo, para que plantas, naves y espacios de alto rendimiento operen sin detenerse.",
		airFlow: "888,000",
		airFlowUnit: "M³/H",
		airFlowDescription: "Flujo de aire para reducir sensación térmica y estabilizar el ambiente sin enfriamiento costoso.",
		features: [
			{
				icon: "thermometer",
				text: "Baja velocidad, alto volumen, menos calor.",
			},
			{
				icon: "battery",
				text: "Ahorro energético vs climatización tradicional.",
			},
			{
				icon: "factory",
				text: "Operación estable en espacios de gran escala.",
			},
		],
		motorTitle: "Motor PMSM sin escobillas",
		motorDescription: "Control inteligente integrado y aerodinámica industrial de aspas extralargas para lograr un movimiento de aire continuo y sin mantenimiento frecuente, incluso en operación prolongada.",
		noiseLevel: "40",
		noiseDescription: "Flujo masivo de aire con un nivel sonoro inferior a 40 dB, casi imperceptible en operación.",
		applications: [
			{ name: "Aeropuertos", image: BlogPlaceholder3 },
			{ name: "Gimnasios", image: BlogPlaceholder3 },
			{ name: "Restaurantes", image: BlogPlaceholder3 },
			{ name: "Logística", image: BlogPlaceholder3 },
		],
		faqs: [
			{
				question: "¿La instalación es difícil?",
				answer: "La instalación es sencilla y puede ser realizada por personal técnico calificado.",
			},
			{
				question: "¿Se puede personalizar la altura o configuración?",
				answer: "Sí, ofrecemos opciones de personalización según las necesidades del espacio.",
			},
			{
				question: "¿Necesita mantenimiento?",
				answer: "Requiere mantenimiento mínimo gracias a su diseño sin escobillas.",
			},
			{
				question: "¿Por qué elegir un PMSM vs uno evaporativo?",
				answer: "Los motores PMSM ofrecen mayor eficiencia energética y menor mantenimiento comparado con sistemas evaporativos.",
			},
		],
		specifications: {
			title: "Una serie, múltiples diámetros – misma precisión.",
			description: "Elegí el diámetro según el volumen del espacio y el área de cobertura requerida. Todos con el mismo estándar industrial.",
			models: [
				{
					model: "D6AAA49",
					diameter: "4.9 m / 16 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "888,000 M³/H",
					motor: "PMSM",
					motorPower: "2.2 kW",
					voltage: "220 V / 3P",
					amperage: "6.5 A",
					noiseLevel: "< 40 dB",
					weight: "85 kg",
				},
				{
					model: "D6AAA51",
					diameter: "5.1 m / 17 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "950,000 M³/H",
					motor: "PMSM",
					motorPower: "2.5 kW",
					voltage: "220 V / 3P",
					amperage: "7.2 A",
					noiseLevel: "< 40 dB",
					weight: "92 kg",
				},
				{
					model: "D6AAA56",
					diameter: "5.6 m / 18 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "1,100,000 M³/H",
					motor: "PMSM",
					motorPower: "3.0 kW",
					voltage: "220 V / 3P",
					amperage: "8.5 A",
					noiseLevel: "< 40 dB",
					weight: "105 kg",
				},
				{
					model: "D6AAA73",
					diameter: "7.3 m / 24 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "1,500,000 M³/H",
					motor: "PMSM",
					motorPower: "4.0 kW",
					voltage: "220 V / 3P",
					amperage: "11.0 A",
					noiseLevel: "< 40 dB",
					weight: "135 kg",
				},
			],
		},
	},
	"notus": {
		id: 2,
		slug: "notus",
		name: "Notus",
		subtitle: "Tecnología y aerodinámica.",
		category: "Ventiladores Industriales",
		image: Grupo4036,
		description: "Diseñado para mover grandes volúmenes de aire con el mínimo consumo, para que plantas, naves y espacios de alto rendimiento operen sin detenerse.",
		airFlow: "750,000",
		airFlowUnit: "M³/H",
		airFlowDescription: "Flujo de aire para reducir sensación térmica y estabilizar el ambiente sin enfriamiento costoso.",
		features: [
			{
				icon: "thermometer",
				text: "Baja velocidad, alto volumen, menos calor.",
			},
			{
				icon: "battery",
				text: "Ahorro energético vs climatización tradicional.",
			},
			{
				icon: "factory",
				text: "Operación estable en espacios de gran escala.",
			},
		],
		motorTitle: "Motor PMSM sin escobillas",
		motorDescription: "Control inteligente integrado y aerodinámica industrial de aspas extralargas para lograr un movimiento de aire continuo y sin mantenimiento frecuente, incluso en operación prolongada.",
		noiseLevel: "38",
		noiseDescription: "Flujo masivo de aire con un nivel sonoro inferior a 38 dB, casi imperceptible en operación.",
		applications: [
			{ name: "Aeropuertos", image: BlogPlaceholder3 },
			{ name: "Gimnasios", image: BlogPlaceholder3 },
			{ name: "Restaurantes", image: BlogPlaceholder3 },
			{ name: "Logística", image: BlogPlaceholder3 },
		],
		faqs: [
			{
				question: "¿La instalación es difícil?",
				answer: "La instalación es sencilla y puede ser realizada por personal técnico calificado.",
			},
			{
				question: "¿Se puede personalizar la altura o configuración?",
				answer: "Sí, ofrecemos opciones de personalización según las necesidades del espacio.",
			},
			{
				question: "¿Necesita mantenimiento?",
				answer: "Requiere mantenimiento mínimo gracias a su diseño sin escobillas.",
			},
			{
				question: "¿Por qué elegir un PMSM vs uno evaporativo?",
				answer: "Los motores PMSM ofrecen mayor eficiencia energética y menor mantenimiento comparado con sistemas evaporativos.",
			},
		],
		specifications: {
			title: "Una serie, múltiples diámetros – misma precisión.",
			description: "Elegí el diámetro según el volumen del espacio y el área de cobertura requerida. Todos con el mismo estándar industrial.",
			models: [
				{
					model: "D6AAA49",
					diameter: "4.9 m / 16 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "750,000 M³/H",
					motor: "PMSM",
					motorPower: "2.0 kW",
					voltage: "220 V / 3P",
					amperage: "5.8 A",
					noiseLevel: "< 38 dB",
					weight: "80 kg",
				},
			],
		},
	},
	"eurus-iii": {
		id: 6,
		slug: "eurus-iii",
		name: "Eurus III",
		subtitle: "Tecnología y aerodinámica.",
		category: "Ventiladores Industriales",
		image: Grupo4036,
		description: "Diseñado para mover grandes volúmenes de aire con el mínimo consumo, para que plantas, naves y espacios de alto rendimiento operen sin detenerse.",
		airFlow: "888,000",
		airFlowUnit: "M³/H",
		airFlowDescription: "Flujo de aire para reducir sensación térmica y estabilizar el ambiente sin enfriamiento costoso.",
		features: [
			{
				icon: "thermometer",
				text: "Baja velocidad, alto volumen, menos calor.",
			},
			{
				icon: "battery",
				text: "Ahorro energético vs climatización tradicional.",
			},
			{
				icon: "factory",
				text: "Operación estable en espacios de gran escala.",
			},
		],
		motorTitle: "Motor PMSM sin escobillas",
		motorDescription: "Control inteligente integrado y aerodinámica industrial de aspas extralargas para lograr un movimiento de aire continuo y sin mantenimiento frecuente, incluso en operación prolongada.",
		noiseLevel: "40",
		noiseDescription: "Flujo masivo de aire con un nivel sonoro inferior a 40 dB, casi imperceptible en operación.",
		applications: [
			{ name: "Aeropuertos", image: BlogPlaceholder3 },
			{ name: "Gimnasios", image: BlogPlaceholder3 },
			{ name: "Restaurantes", image: BlogPlaceholder3 },
			{ name: "Logística", image: BlogPlaceholder3 },
		],
		faqs: [
			{
				question: "¿La instalación es difícil?",
				answer: "La instalación es sencilla y puede ser realizada por personal técnico calificado.",
			},
			{
				question: "¿Se puede personalizar la altura o configuración?",
				answer: "Sí, ofrecemos opciones de personalización según las necesidades del espacio.",
			},
			{
				question: "¿Necesita mantenimiento?",
				answer: "Requiere mantenimiento mínimo gracias a su diseño sin escobillas.",
			},
			{
				question: "¿Por qué elegir un PMSM vs uno evaporativo?",
				answer: "Los motores PMSM ofrecen mayor eficiencia energética y menor mantenimiento comparado con sistemas evaporativos.",
			},
		],
		specifications: {
			title: "Una serie, múltiples diámetros – misma precisión.",
			description: "Elegí el diámetro según el volumen del espacio y el área de cobertura requerida. Todos con el mismo estándar industrial.",
			models: [
				{
					model: "D6AAA49",
					diameter: "4.9 m / 16 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "888,000 M³/H",
					motor: "PMSM",
					motorPower: "2.2 kW",
					voltage: "220 V / 3P",
					amperage: "6.5 A",
					noiseLevel: "< 40 dB",
					weight: "85 kg",
				},
				{
					model: "D6AAA51",
					diameter: "5.1 m / 17 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "950,000 M³/H",
					motor: "PMSM",
					motorPower: "2.5 kW",
					voltage: "220 V / 3P",
					amperage: "7.2 A",
					noiseLevel: "< 40 dB",
					weight: "92 kg",
				},
				{
					model: "D6AAA56",
					diameter: "5.6 m / 18 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "1,100,000 M³/H",
					motor: "PMSM",
					motorPower: "3.0 kW",
					voltage: "220 V / 3P",
					amperage: "8.5 A",
					noiseLevel: "< 40 dB",
					weight: "105 kg",
				},
				{
					model: "D6AAA73",
					diameter: "7.3 m / 24 ft",
					speedRange: "30-120 RPM",
					maxAirVolume: "1,500,000 M³/H",
					motor: "PMSM",
					motorPower: "4.0 kW",
					voltage: "220 V / 3P",
					amperage: "11.0 A",
					noiseLevel: "< 40 dB",
					weight: "135 kg",
				},
			],
		},
	},
};

