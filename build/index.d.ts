/// <reference types="node" />
/// <reference types="bluebird" />
import { PathLike } from 'fs';
import * as Promise from 'bluebird';
export declare type VamtigerReadDirectoryPath = PathLike | string;
export declare type VamtigerReadDirectoryEntry = string;
export declare type VamtigerReadDirectoryEntries = VamtigerReadDirectoryEntry[];
export declare type VamtigerReadDirectoryOptions = VamtigerReadDirectoryOptionsObject | BufferEncoding;
export interface VamtigerReadDirectoryOptionsObject {
    encoding?: BufferEncoding;
}
export declare type VamtigerReadDirectory = (path: VamtigerReadDirectoryPath, options?: VamtigerReadDirectoryOptions) => Promise<VamtigerReadDirectoryEntries>;
declare const _default: VamtigerReadDirectory;
export default _default;
