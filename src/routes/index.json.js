import { excerps } from './writing/_articles';

export function get() {
	return {
		body: excerps.slice(0, 4)
	};
}
