export interface Element {
	create: () => void;
	id: string;
	timeout?: number;
}
