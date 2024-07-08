import { CardProps } from "../types/Card";

const randomName = ["num1", "num2", "Num3", "num4"]
const randomPrice = ["10", "20", "40", "20"]

const generate_data = (Num: number) => {
	let jsonArray: CardProps[] = [];

	for (let i = 0; i < Num; i++) {
		let temp: CardProps = {
			"name": randomName[Math.floor(Math.random() * randomName.length)],
			"price": randomPrice[Math.random()],
			"image": ""
		};
		jsonArray.push(temp)
	}

	return jsonArray
}


export { generate_data };
