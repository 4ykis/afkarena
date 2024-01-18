
import {Canvas, createCanvas, loadImage} from 'canvas';

const heroBg = await loadImage('/components/Frame/Transparency.png');
const starsBg = await loadImage('/components/Stars/StarTile.png');

const parseData = (data:Object) => {
	const ARR = [];

	for (let f in data) {
		// @ts-ignore
		for (let h in data[f]) {
			// @ts-ignore
			let hero = {faction: f, ...data[f][h]}

			if (hero.ascended === "None") {
				continue;
			}

			hero.stars = hero.ascended.split('_')[1]
			hero.frame = hero.ascended.split('_')[0]

			ARR.push(hero)
		}
	}

	return ARR;
}


export const useCanvas = () => {
	const drawHero = async (hero: { frame: string; signature_item: number; furniture: number; engrave: number; name: string; faction: string; stars: number; }) => {
		let text = "";
		if (hero.frame == "Ascended" || hero.frame == "Mythical" || hero.frame == "Mythical+") {
			text = `SI:${hero.signature_item} `
		}

		if (hero.frame == "Ascended") {
			text += `F:${hero.furniture} E:${hero.engrave}`
		} else {
			text += `F:0 E:0`
		}

		if (+hero.signature_item === 40) {
			hero.signature_item = 40;
		} else if (+hero.signature_item > 29) {
			hero.signature_item = 30
		} else if (+hero.signature_item > 19) {
			hero.signature_item = 20
		} else if (+hero.signature_item > 9) {
			hero.signature_item = 10
		} else {
			hero.signature_item = 0
		}

		if (+hero.engrave === 100) {
			hero.engrave = 100;
		} else if (+hero.engrave > 79) {
			hero.engrave = 80
		} else if (+hero.engrave > 59) {
			hero.engrave = 60
		} else if (+hero.engrave > 29) {
			hero.engrave = 30
		} else {
			hero.engrave = 0
		}

		if (+hero.furniture === 36) {
			hero.furniture = 36;
		} else if (+hero.furniture > 8) {
			hero.furniture = 9
		} else if (+hero.furniture > 2) {
			hero.furniture = 3
		} else {
			hero.furniture = 0
		}

		const img = createCanvas(270, 305);
		const ctx = img.getContext('2d');
		ctx.font = '500 30px Arial'

		const portrait = await loadImage(`/images/heroes/${hero.name}_Icon.jpg`);
		const frame = await loadImage(`/components/Frame/${hero.frame}.png`);
		const faction = await loadImage(`/components/Faction/${hero.faction}.png`);


		const si = (hero.signature_item > 0)
			? await loadImage(`/components/SI/${hero.signature_item}.png`)
			: null

		const stars = (hero.stars > 0)
			? await loadImage(`/components/Stars/${hero.engrave}/${hero.stars}.png`)
			: null;


		const furn = (hero.furniture > 0)
			? await loadImage(`/components/Furniture/${hero.furniture}.png`)
			: null

		const crown = (hero.furniture === 36)
			? await loadImage(`/components/Furniture/Crown.png`)
			: null

		ctx.drawImage(portrait, 19, 17)
		ctx.drawImage(heroBg, 19, 17, 250, 250)

		if (hero.frame === "Ascended" && hero.stars > 0) {
			ctx.drawImage(starsBg, 37, 204, 240, 45)
		}

		ctx.drawImage(frame, 19, 17)
		ctx.drawImage(faction, 23, 19)

		if (hero.frame === "Ascended") {
			if (hero.stars > 0 && stars) {
				ctx.drawImage(stars, 42, 203)
			}

			if (hero.furniture > 0 && hero.furniture) {
				// @ts-ignore
				ctx.drawImage(furn, 23, 96)
			}
		}

		if (
			(hero.frame == "Ascended" || hero.frame == "Mythical"	|| hero.frame == "Mythical+")
			&& si && hero.signature_item > 0
		) {
			ctx.drawImage(si, 5, 0)
		}

		if (hero.frame == "Ascended" && crown && hero.furniture == 36) {
			ctx.drawImage(crown, 5, 0)
		}

		ctx.fillStyle = "#ffffff";
		ctx.fillText(text, 24, 295);

		return img;
	}

	const drawRoster = async (data: Object) => {
		const DATA = parseData(data);
		const HERO_IMG_DATA_LIST = [];

		for (const hero of DATA) {
			let h = await useCanvas().drawHero(hero);

			HERO_IMG_DATA_LIST.push(h);
		}

		// 270 hero width - 305 hero height - 6 hero in a row - 10 distance between - 20 outer space
		const w:number = 270 * 6 + 10;
		const rows:number = Math.ceil(HERO_IMG_DATA_LIST.length / 6)
		const h:number =  rows * 305 + (rows - 1) * 10;

		const roster:Canvas = createCanvas(w, h);
		const ctx = roster.getContext('2d');

		ctx.fillStyle = "#000000"
		ctx.fillRect(0,0, w, h);

		const i = {row: 0, col: 0}

		for (const img of HERO_IMG_DATA_LIST) {
			let x:number, y:number;
			if (i.col < 6) {
				x = (i.col * 270);
				y = (i.row * 305);
				ctx.drawImage(img, x, y)
				i.col++
			} else {
				i.col = 0
				i.row++
				x = (i.col * 270);
				y = (i.row * 305);
				ctx.drawImage(img, x, y);
				i.col++
			}
		}

		return roster.toDataURL();
	}



	return {
		drawRoster,
		drawHero,
		parseData
	}
}
