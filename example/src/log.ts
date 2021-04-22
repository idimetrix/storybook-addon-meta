import { Logger } from 'logvis';

const logger: Logger = new Logger('EXAMPLE');

process.env.NODE_ENV !== 'production' ? logger.enableAll() : logger.disableAll();

export default logger;
