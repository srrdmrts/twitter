import url from "url"
import { LoremIpsum } from "lorem-ipsum"
import { v4 } from "uuid"

const lorem = new LoremIpsum();

export function generateFleets(limit) {
	limit = Number.isInteger(Number(limit)) ? limit : 8
	let fleets = [];

	for (let i = 1; i <= limit; i++) {
		fleets.push(
			{
				id: v4(),
				slug: lorem.generateWords(1),
				pp: null
			}
		)
	}

	return fleets
}

export default (req, res) => {
	const { limit } = url.parse(req.url, true).query
	res.status(200).json(JSON.stringify(
		generateFleets(limit)
	))
}