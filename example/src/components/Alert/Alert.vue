<template>
	<a class="alert" :class="type">
		<slot></slot>
	</a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Alert' })
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: String }) public readonly type!: string;
}
</script>

<style lang="scss" scoped>
.alert {
	align-items: center;
	appearance: none;
	background: #ffeacc;
	border: 0;
	border-radius: 4px;
	color: #ff9600;
	cursor: pointer;
	display: inline-flex;
	font-size: 12px;
	font-weight: 500;
	line-height: inherit;
	outline: none;
	padding: 10px 20px;
	text-decoration: none !important;
	transition: all 0.3s;

	a {
		color: inherit;
	}

	&.error {
		background: #f35c27;
		color: #fff;
	}
}
</style>
