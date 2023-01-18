export function groupBy(arr, key, transformer) {
	const grouped = {};
	arr.forEach((a) => {
		const _key = transformer ? transformer(a[key]) : a[key];
		if (grouped[_key]) grouped[_key].push(a);
		else grouped[_key] = [a];
	});

	return grouped;
}
