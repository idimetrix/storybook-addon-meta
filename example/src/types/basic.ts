export type IList<T> = Array<T>;
export type List<T> = Array<T>;

export interface IDictionary<TValue> {
	[key: string]: TValue;
}
export type Dictionary<TValue> = IDictionary<TValue>;

export interface IPair<TValue> {
	[key: string]: TValue;
}

export type Pair<TValue> = IPair<TValue>;

export interface IKeyValuePair<K extends string | number, V = unknown> {
	key: K;
	value: V;
}

export type KeyValuePair<K extends string | number, V = unknown> = IKeyValuePair<K, V>;
