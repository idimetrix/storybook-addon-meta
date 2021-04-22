<template>
	<div>
		<slot />
		<span v-if="customValueFormatter" :class="valueClass" v-html="customFormatter(data)" />
		<span v-else :class="valueClass">{{ defaultFormatter(data) }}</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { getDataType } from '../utils';

@Component({})
export default class extends Vue {
	// --- props

	@Prop({ default: '', type: [Number, String] }) public readonly currentKey!: string | number;
	@Prop({ default: null, type: Function }) public readonly customValueFormatter!: Function;
	@Prop({
		default: null,
		type: [
			String,
			Number,
			Boolean,
			Array,
			Object,
			Buffer,
			Uint8Array,
			Uint8ClampedArray,
			Uint16Array,
			Uint32Array,
			Int8Array,
			Int16Array,
			Int32Array,
			Float32Array,
			Float64Array,
		],
	})
	public readonly data!: string | number | boolean;
	@Prop({
		default: null,
		type: [
			String,
			Number,
			Boolean,
			Array,
			Object,
			Buffer,
			Uint8Array,
			Uint8ClampedArray,
			Uint16Array,
			Uint32Array,
			Int8Array,
			Int16Array,
			Int32Array,
			Float32Array,
			Float64Array,
		],
	})
	public readonly parentData!: any;
	@Prop({ default: false, type: Boolean }) public readonly showComma!: boolean;
	@Prop({ default: false, type: Boolean }) public readonly showDoubleQuotes!: boolean;

	// --- computed

	get dataType(): string {
		return getDataType(this.data);
	}

	get valueClass(): string {
		return `vjs-value vjs-value__${this.dataType}`;
	}

	// --- methods

	customFormatter(data: any): string {
		return this.customValueFormatter
			? this.customValueFormatter(data, this.currentKey, this.parentData, this.defaultFormatter(data))
			: this.defaultFormatter(data);
	}

	defaultFormatter(data: any): string {
		let text: string = data + '';

		if (this.dataType === 'string') text = `"${text}"`;
		if (this.showComma) text += ',';

		return text;
	}
}
</script>
