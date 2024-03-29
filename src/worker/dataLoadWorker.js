const { getItemsByPage, getAll, getItems } = require("@/api/dataGenerator");

self.onmessage = async (event) => {
	const { firstAmount } = event.data;


	const resp = await getItems(10000);
	
	self.postMessage(resp.data.data.slice(firstAmount - 1));
};
