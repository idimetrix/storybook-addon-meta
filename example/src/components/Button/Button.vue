<template>
	<a class="button" :class="type">
		<slot></slot>
	</a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Button' })
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: String }) public readonly type!: string;
}
</script>

<style lang="scss" scoped>
.button {
	align-items: center;
	appearance: none;
	background: #41ccb4;
	border: 0;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	display: inline-flex;
	font-size: 1rem;
	font-weight: 500;
	justify-content: center;
	line-height: inherit;
	outline: none;
	padding: 15px 30px;
	text-decoration: none !important;
	transition: all 0.3s;

	&.danger {
		background: #f35c27;

		&:hover {
			background: rgba(#f35c27, 0.8);
		}
	}

	&.info {
		background: #409eff;
		color: #fff;

		&:hover {
			background: #66b1ff;
			color: #fff;
		}
	}

	> svg {
		height: 16px;
		margin-left: 10px;
	}

	&[disabled],
	&:disabled {
		cursor: inherit;
		opacity: 0.7;
		pointer-events: none;
	}

	&:active,
	&:hover {
		background: #30b49d;
	}
}
</style>
