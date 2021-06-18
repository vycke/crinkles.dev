import groupByYear from '$lib/utils/groupByYear';
import { excerps } from './_articles';

export function get() {
	return {
		body: groupByYear(excerps)
	};
}
