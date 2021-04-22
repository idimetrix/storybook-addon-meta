import { Logger } from 'logvis';

const log: Logger = new Logger('META');

process.env.NODE_ENV !== 'production' ? log.enableAll() : log.disableAll();

export { log };
