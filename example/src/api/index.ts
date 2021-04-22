import axios from 'axios';

export default class Api {
	static async example(): Promise<void> {
		return await axios.get('http://example.com/', {});
	}
}
