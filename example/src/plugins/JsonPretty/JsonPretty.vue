<template>
	<div
		:class="{
			'vjs-tree': true,
			'has-selectable-control': isMultiple || showSelectController,
			'is-root': currentDeep === 1,
			'is-selectable': selectable,
			'is-selected': isSelected,
			'is-highlight-selected': isSelected && highlightSelectedNode,
			'is-mouseover': isMouseover,
		}"
		@click="handleClick"
		@mouseout.stop="handleMouseout"
		@mouseover.stop="handleMouseover"
	>
		<template v-if="showSelectController && selectable">
			<vue-checkbox v-if="isMultiple" v-model="currentCheckboxVal" @change="handleValueChange('checkbox')" />
			<vue-radio v-else-if="isSingle" v-model="model" :path="path" @change="handleValueChange('radio')" />
		</template>

		<template v-if="Array.isArray(data) || isObject(data)">
			<brackets-left
				:collapsed-on-click-brackets="collapsedOnClickBrackets"
				:data="data"
				:show-comma="notLastKey"
				:show-length="showLength"
				:visible.sync="visible"
			>
				<span v-if="currentDeep > 1 && !Array.isArray(parentData)" class="vjs-key"> {{ keyFormatter(currentKey) }}: </span>
			</brackets-left>

			<div
				v-for="(item, key) in data"
				v-show="visible"
				:key="key"
				:class="{
					'vjs-tree__content': true,
					'has-line': showLine,
				}"
			>
				<json-pretty
					v-model="model"
					:collapsed-on-click-brackets="collapsedOnClickBrackets"
					:current-deep="currentDeep + 1"
					:current-key="key"
					:custom-value-formatter="customValueFormatter"
					:data="item"
					:deep="deep"
					:highlight-mouseover-node="highlightMouseoverNode"
					:highlight-selected-node="highlightSelectedNode"
					:parent-data="data"
					:path="path + (Array.isArray(data) ? `[${key}]` : `.${key}`)"
					:path-selectable="pathSelectable"
					:select-on-click-node="selectOnClickNode"
					:selectable-type="selectableType"
					:show-double-quotes="showDoubleQuotes"
					:show-length="showLength"
					:show-line="showLine"
					:show-select-controller="showSelectController"
					@change="handleItemChange"
					@click="handleItemClick"
				/>
			</div>

			<brackets-right :collapsed-on-click-brackets="collapsedOnClickBrackets" :data="data" :show-comma="notLastKey" :visible.sync="visible" />
		</template>

		<simple-text
			v-else
			:current-key="currentKey"
			:custom-value-formatter="customValueFormatter"
			:data="data"
			:parent-data="parentData"
			:show-comma="notLastKey"
			:show-double-quotes="showDoubleQuotes"
		>
			<span v-if="parentData && currentKey && !Array.isArray(parentData)" class="vjs-key"> {{ keyFormatter(currentKey) }}: </span>
		</simple-text>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { getDataType } from './utils';
import BracketsLeft from './components/brackets-left.vue';
import BracketsRight from './components/brackets-right.vue';
import SimpleText from './components/simple-text.vue';
import VueCheckbox from './components/checkbox.vue';
import VueRadio from './components/radio.vue';

@Component({
	components: {
		BracketsLeft,
		BracketsRight,
		SimpleText,
		VueCheckbox,
		VueRadio,
	},
	name: 'JsonPretty',
})
export default class extends Vue {
	// --- props
	@Prop({ default: true, type: Boolean }) public readonly collapsedOnClickBrackets!: boolean;
	@Prop({ default: 1, type: Number }) public readonly currentDeep!: number;
	@Prop({ default: '', type: [Number, String] }) public readonly currentKey!: number | string;
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
	public readonly data!: any;
	@Prop({ default: Infinity, type: Number }) public readonly deep!: number;
	@Prop({ default: false, type: Boolean }) public readonly highlightMouseoverNode!: boolean;
	@Prop({ default: true, type: Boolean }) public readonly highlightSelectedNode!: boolean;
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
	public readonly parentData!: boolean;
	@Prop({ default: 'root', type: String }) public readonly path!: string;
	@Prop({ default: () => true, type: Function }) public readonly pathSelectable!: Function;
	@Prop({ default: true, type: Boolean }) public readonly selectOnClickNode!: boolean;
	@Prop({ default: '', type: String }) public readonly selectableType!: string;
	@Prop({ default: true, type: Boolean }) public readonly showDoubleQuotes!: boolean;
	@Prop({ default: false, type: Boolean }) public readonly showLength!: boolean;
	@Prop({ default: true, type: Boolean }) public readonly showLine!: boolean;
	@Prop({ default: false, type: Boolean }) public readonly showSelectController!: boolean;
	@Prop({ default: () => '', type: [Array, String] }) public readonly value!: string | string[];

	// --- data

	public currentCheckboxVal: boolean = Array.isArray(this.value) ? this.value.includes(this.path) : false;
	public isMouseover: boolean = false;
	public visible: boolean = this.currentDeep <= this.deep;

	// --- computed

	get isMultiple(): boolean {
		return this.selectableType === 'multiple';
	}

	get isSelected(): boolean {
		if (this.isMultiple) {
			return this.model.includes(this.path);
		} else if (this.isSingle) {
			return this.model === this.path;
		} else {
			return false;
		}
	}

	get isSingle(): boolean {
		return this.selectableType === 'single';
	}

	get lastKey(): string | number {
		if (Array.isArray(this.parentData)) {
			return this.parentData.length - 1;
		} else if (this.isObject(this.parentData)) {
			const arr: string[] = Object.keys(this.parentData);

			return arr[arr.length - 1];
		}
		return '';
	}

	get model(): string | string[] {
		const defaultVal: string | string[] = this.selectableType === 'multiple' ? [] : this.selectableType === 'single' ? '' : null;

		return this.value || defaultVal;
	}

	set model(value: string | string[]) {
		this.$emit('input', value);
	}

	get notLastKey(): boolean {
		return this.currentKey !== this.lastKey;
	}

	get propsError(): string {
		const error: boolean = this.selectableType && !this.selectOnClickNode && !this.showSelectController;
		return error
			? 'When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.'
			: '';
	}

	get selectable(): boolean {
		return this.pathSelectable(this.path, this.data) && (this.isMultiple || this.isSingle);
	}

	// --- watch

	@Watch('deep')
	onDeepChanged(val: number): void {
		this.visible = this.currentDeep <= val;
	}

	@Watch('propsError', { immediate: true })
	onPropsErrorChanged(message: string): void {
		if (message) {
			throw new Error(`[json-pretty] ${message}`);
		}
	}

	// --- methods

	handleClick(): void {
		this.$emit('click', this.path, this.data);
		if (this.selectable && this.selectOnClickNode) {
			this.handleValueChange('tree');
		}
	}

	handleItemChange(newVal: string | string[], oldVal: string | string[]): void {
		if (this.selectable) {
			this.$emit('change', newVal, oldVal);
		}
	}

	handleItemClick(path: string, data: any): void {
		this.$emit('click', path, data);
	}

	handleMouseout(): void {
		this.highlightMouseoverNode && (this.selectable || this.selectableType === '') && (this.isMouseover = false);
	}

	handleMouseover(): void {
		this.highlightMouseoverNode && (this.selectable || this.selectableType === '') && (this.isMouseover = true);
	}

	handleValueChange(emitType: string): void {
		if (this.isMultiple && (emitType === 'checkbox' || emitType === 'tree')) {
			const index: number = (this.model as string[]).findIndex((item: string) => item === this.path);
			const oldVal: string[] = [...this.model];

			if (index !== -1) {
				(this.model as string[]).splice(index, 1);
			} else {
				(this.model as string[]).push(this.path);
			}

			if (emitType !== 'checkbox') {
				this.currentCheckboxVal = !this.currentCheckboxVal;
			}

			this.$emit('change', this.model, oldVal);
		} else if (this.isSingle && (emitType === 'radio' || emitType === 'tree')) {
			if (this.model !== this.path) {
				const oldVal: string = this.model as string;
				const newVal: string = this.path;
				this.model = newVal;
				this.$emit('change', newVal, oldVal);
			}
		}
	}

	isObject(value: any): boolean {
		return getDataType(value) === 'object';
	}

	keyFormatter(key: string): string {
		return this.showDoubleQuotes ? `"${key}"` : key;
	}
}
</script>

<style lang="scss">
@import './assets/styles/index';
</style>
