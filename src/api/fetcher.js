import axios from "axios";

export async function fetchData(endpoint, options) {
	const token = "WjmXlkMGchdpf6VQREiUm52hjUJmtgkmTJ3hZhrE1c563e42";

	const config = {
		headers: { Authorization: `Bearer ${token}` },
		...options,
	};

		const resp = await axios.get(
			`https://api.pizzaparty.wtf/api/activity${endpoint}`,
			config
		);

		return resp;
}
