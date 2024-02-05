export function getIsoDuration(id) {
	return isoDuration(id);
}

function isoDuration(id) {
	let date = "";

	Array.from({ length: 100 }, (_, i) => i).forEach((ind) => {
		const parse = new Date('04 Dec 1995 00:12:00 GMT').toUTCString()
		date = `${id}__${parse}`;
	});

	return { date };
}
