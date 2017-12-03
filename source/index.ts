import { readdir, PathLike } from 'fs';
import * as Promise from 'bluebird';

export type VamtigerReadDirectoryPath = PathLike | string;

export type VamtigerReadDirectoryEntry = string;

export type VamtigerReadDirectoryEntries = VamtigerReadDirectoryEntry[];

export type VamtigerReadDirectoryOptions = VamtigerReadDirectoryOptionsObject | BufferEncoding;

export interface VamtigerReadDirectoryOptionsObject {
    encoding?: BufferEncoding;
}

export type VamtigerReadDirectory = (path: VamtigerReadDirectoryPath, options?: VamtigerReadDirectoryOptions) => Promise<VamtigerReadDirectoryEntries>;

export default Promise.promisify(readdir);