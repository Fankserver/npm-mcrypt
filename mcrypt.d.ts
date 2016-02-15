export function getAlgorithmNames(): Array<string>;
export function getModeNames(): Array<string>;

export class MCrypt {
	constructor(algorithm: string, mode: string);
	open(key: string, iv?: string | Buffer): void;
	encrypt(plaintext: string | Buffer): Buffer;
	decrypt(ciphertext: Buffer): Buffer;
	generateIv(): Buffer;
	validateKeySize(value: boolean): void;
	validateIvSize(value: boolean): void;
	selfTest(): void;
	isBlockAlgorithmMode(): boolean;
	isBlockAlgorithm(): boolean;
	isBlockMode(): boolean;
	getBlockSize(): number;
	getKeySize(): number;
	getSupportedKeySizes(): Array<number>;
	getIvSize(): number;
	hasIv(): boolean;
	getAlgorithmName(): string;
	getModeName(): string;
}
