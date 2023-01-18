import { groupBy } from '$lib/features/groupby';
import { projects } from '$lib/projects';

export async function get() {
	return { body: { projects: groupBy(projects, 'tech') } };
}
