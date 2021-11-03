import {
	BajuDepan1, BajuDepan2, BajuDepan3, BajuDepan4, BajuDepan5, BajuDepan6,
	BajuBelakang1, BajuBelakang2, BajuBelakang3, BajuBelakang4, BajuBelakang5,
	BajuBelakang6, Cloth, Medicane, Electronics, MakeUp
} from '../../../assets';

export const dummyListProduct = [
	{
		id: 1,
		name: 'KAOS POLOS ABU-ABU MURAH',
		image: [BajuDepan1, BajuBelakang1],
		category:{
			id: 1,
			nama: 'Baju',
			image: Cloth
		}, 
		price: 35000,
		weight: 0.25,
		jenis: 'Coton Combat 360s',
		size: ["S", "M", "L", "XL", "XXL"],
		ready: true
	},
	{
		id: 2,
		name: 'KAOS POLOS PUTIH MURAH',
		image: [BajuDepan2, BajuBelakang2],
		category:{
			id: 1,
			nama: 'Baju',
			image: Cloth
		}, 
		price: 40000,
		weight: 0.25,
		jenis: 'Coton Combat 360s',
		size: ["S", "M", "L", "XL", "XXL"],
		ready: true
	},
	{
		id: 3,
		name: 'WALDOUT BAJU DISTRO PREMIUM',
		image: [BajuDepan3, BajuBelakang3],
		category:{
			id: 1,
			nama: 'Baju',
			image: Cloth
		}, 
		price: 150000,
		weight: 0.25,
		jenis: 'Coton Combat 360s',
		size: ["S", "M", "L", "XL", "XXL"],
		ready: true
	},
	{
		id: 4,
		name: 'PSDOC BAJU DISTRO PREMIUM',
		image: [BajuDepan4, BajuBelakang4],
		category:{
			id: 1,
			nama: 'Baju',
			image: Cloth
		}, 
		price: 135000,
		weight: 0.25,
		jenis: 'Coton Combat 360s',
		size: ["S", "M", "L", "XL", "XXL"],
		ready: true
	},
	{
		id: 5,
		name: 'MEATH HEAD COTON 360S',
		image: [BajuDepan5, BajuBelakang5],
		category:{
			id: 1,
			nama: 'Baju',
			image: Cloth
		}, 
		price: 100000,
		weight: 0.25,
		jenis: 'Coton Combat 360s',
		size: ["S", "M", "L", "XL", "XXL"],
		ready: true
	},
	{
		id: 6,
		name: 'BAJU OBLONG PUTIH UNISEX',
		image: [BajuDepan6, BajuBelakang6],
		category:{
			id: 1,
			nama: 'Baju',
			image: Cloth
		}, 
		price: 60000,
		weight: 0.25,
		jenis: 'Coton Combat 360s',
		size: ["S", "M", "L", "XL", "XXL"],
		ready: true
	},
]