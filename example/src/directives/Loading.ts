import { DirectiveBinding } from 'vue/types/options';
import { DirectiveOptions } from 'vue';
import { VNode } from 'vue/types/vnode';

import log from '@/log';

const map: WeakMap<HTMLElement, any> = new WeakMap<HTMLElement, HTMLElement>();

const directive: DirectiveOptions = {
	bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {
		log.log('bind', { binding, el, oldVnode, vnode });

		if (!map.has(el)) {
			const loading: HTMLDivElement = el.appendChild(document.createElement('div'));

			loading.className = 'v-loading';
			loading.style.position = 'absolute';
			loading.style.left = '0';
			loading.style.top = '0';
			loading.style.right = '0';
			loading.style.bottom = '0';
			loading.style.background = 'rgba(255, 255, 255, 0.5)';
			loading.style.display = binding.value ? 'block' : 'none';
			loading.style.zIndex = '100';

			map.set(el, loading);
		}
	},
	componentUpdated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {
		log.log('componentUpdated', { binding, el, oldVnode, vnode });
	},
	inserted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {
		log.log('inserted', { binding, el, oldVnode, vnode });
	},
	unbind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {
		log.log('unbind', { binding, el, oldVnode, vnode });

		if (map.has(el)) {
			el.removeChild(map.get(el));
		}
	},
	update(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {
		log.log('update', { binding, el, oldVnode, vnode });

		if (map.has(el)) {
			const loading: HTMLElement = map.get(el);

			loading.style.display = binding.value ? 'block' : 'none';
		}
	},
};

export default directive;
