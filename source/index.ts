import { readdir, PathLike } from 'fs';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

const getDirectoryContent = promisify && promisify(readdir) || BlueBird.promisify(readdir);

export default getDirectoryContent;