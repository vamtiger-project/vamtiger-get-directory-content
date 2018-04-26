import { readdir, PathLike } from 'fs';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

export default promisify && promisify(readdir) || BlueBird.promisify(readdir);