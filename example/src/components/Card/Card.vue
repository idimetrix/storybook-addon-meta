<template>
	<div class="card">
		<div class="card__header">{{ title }}</div>
		<div class="card__body">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Card' })
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: String }) public readonly title!: string;
}
</script>

<style lang="scss" scoped>
.card {
	border: 1px solid #41ccb4;
	border-radius: 4px;
	display: flex;
	position: relative;
	width: 100%;

	&__header {
		background: #f9f9f9;
		color: #41ccb4;
		display: flex;
		font-size: 12px;
		margin-left: 15px;
		padding: 5px;
		position: absolute;
		text-transform: uppercase;
		transform: translateY(-50%);
	}

	&__body {
		display: flex;
		padding: 20px 15px 15px;
	}
}
</style>
