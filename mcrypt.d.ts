export function getAlgorithmNames(): Array<string>;
export function getModeNames(): Array<string>;

type algorithmNames = "cast-128" | "gost" | "rijndael-128" | "twofish" | "arcfour" | "cast-256" | "loki97" | "rijndael-192" | "saferplus" | "wake" | "blowfish-compat" | "des" | "rijndael-256" | "serpent" | "xtea" | "blowfish" | "enigma" | "rc2" | "tripledes";
type modes = "cbc" | "cfb" | "ctr" | "ecb" | "ncfb" | "nofb" | "ofb" | "stream";

export class MCrypt {
	constructor(algorithm: algorithmNames, mode: modes);
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
	getAlgorithmName(): algorithmNames;
	getModeName(): modes;
}
