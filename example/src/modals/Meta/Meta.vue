<template>
	<modal :adaptive="true" height="auto" name="modal-meta" @before-close="beforeClose" @before-open="beforeOpen">
		<div v-loading="loading" class="modal-meta">Meta</div>
	</modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Alert } from '@/components/Alert';
import { Button } from '@/components/Button';

import { Meta } from '../../../../src';

@Component({ components: { Alert, Button }, name: 'ModalMeta' })
export default class extends Vue {
	// --- data

	public loading: boolean = false;
	public error: string = null;
	public done: any = null;

	// --- methods

	// --- methods

	public async beforeOpen({ params = {} }: { params: any }): Promise<void> {
		try {
			this.loading = true;

			//

			this.loading = false;

			this.done = params?.done;
		} catch {
			//
		}
	}

	public async beforeClose(): Promise<void> {
		//
	}
}
</script>

<style lang="scss" scoped>
.modal-meta {
	//
}
</style>
