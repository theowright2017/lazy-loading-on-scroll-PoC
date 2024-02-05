import { fetchData } from "./fetcher";

export async function getAll() {
	return await fetchData();
}

export async function getItems(amount) {
	return await fetchData(`?perPage=${amount}`);
}

export async function getItemsByPage(pageNum) {
	return await fetchData(`?page=${pageNum}`);
}
