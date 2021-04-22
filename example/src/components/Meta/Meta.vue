<template>
	<div class="meta" :class="type">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Meta' })
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: String }) public readonly type!: string;
}
</script>

<style lang="scss" scoped>
.meta {
	//
}
</style>
