<template>
	<div id="app">
		<ModalMeta />
		<ModalInformation />

		<Workflow />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { ModalInformation } from '@/modals/Information';
import { ModalMeta } from '@/modals/Meta';

import { Workflow } from '@/sections/Workflow';

@Component({
	components: {
		ModalInformation,
		ModalMeta,
		Workflow,
	},
})
export default class extends Vue {
	// --- hooks

	mounted(): void {
		//
	}

	destroyed(): void {
		//
	}
}
</script>

<style lang="scss"></style>
