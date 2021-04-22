import { register } from 'register-service-worker';

import log from './log';

if (process.env.NODE_ENV === 'production') {
	register(`${process.env.BASE_URL}service-worker.ts`, {
		cached(): void {
			log.log('Content has been cached for offline use.');
		},
		error(error: Error): void {
			log.error('Error during service worker registration:', error);
		},
		offline(): void {
			log.log('No internet connection found. App is running in offline mode.');
		},
		ready(): void {
			log.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
		},
		registered(): void {
			log.log('Service worker has been registered.');
		},
		updated(): void {
			log.log('New content is available; please refresh.');
		},
		updatefound(): void {
			log.log('New content is downloading.');
		},
	});
}
