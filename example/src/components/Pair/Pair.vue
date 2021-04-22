<template>
	<div class="pair">
		<div v-if="$slots.prefix" class="prefix">
			<slot name="prefix"></slot>
		</div>
		<div v-if="$slots.default" class="content">
			<slot></slot>
		</div>
		<div v-if="$slots.suffix" class="suffix">
			<slot name="suffix"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Button' })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.pair {
	align-items: center;
	display: flex;
	flex-direction: row;

	> div {
		display: flex;

		&.content {
			flex: 1;
		}
	}
}
</style>
