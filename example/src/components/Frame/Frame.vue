<script lang="ts">
import _Vue, { CreateElement, VNode } from 'vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Frame' })
export default class extends Vue {
	// --- data

	private app: any = null;
	private interval: number = null;

	// --- hooks

	render(h: CreateElement): VNode {
		return h('iframe', {
			on: {
				load: (): void => {
					const el: HTMLIFrameElement = this.$el as HTMLIFrameElement;

					el.style.margin = '0';
					el.style.padding = '0';
					el.style.outline = '0';
					el.style.border = '0';

					const doc: Document = el.contentDocument;

					doc.open('text/html', 'replace');
					doc.write('<!DOCTYPE html><html><head><style>html, body { margin: 0; padding: 0; overflow: hidden; }</style></head><body><div></div></body></html>');
					doc.close();

					this.interval = window.setInterval((): void => {
						el.style.height = `${doc.body.getBoundingClientRect().height}px`;
					}, 1000 / 25);

					this.app = new _Vue({
						data: { children: this.$slots.default },
						render(h: CreateElement): VNode {
							return h('div', this.children);
						},
					});

					this.app.$mount(doc.body.getElementsByTagName('div')[0]);
				},
			},
		});
	}

	beforeUpdate(): void {
		if (this.app) {
			this.app.children = this.$slots.default;
		}
	}

	beforeDestroy(): void {
		window.clearInterval(this.interval);
	}
}
</script>
