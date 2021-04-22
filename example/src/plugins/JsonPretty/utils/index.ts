export function getDataType(value: any): string {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
