import processFiles from '$lib/utils/process-files';
import path from 'path';

const __dirname = path.resolve();
const location = path.join(__dirname, 'src/content');
export const articles = processFiles(location);
export const excerps = processFiles(location, false);
