<template>
	<label :class="['vjs-checkbox', value ? 'is-checked' : '']" @click.stop>
		<span class="vjs-checkbox__inner" />
		<input v-model="model" class="vjs-checkbox__original" type="checkbox" @blur="focus = false" @change="$emit('change', model)" @focus="focus = true" />
	</label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
	// --- data

	public focus: boolean = false;

	// --- props

	@Prop({ default: false, type: Boolean }) public readonly value!: boolean;

	// --- computed

	get model(): boolean {
		return this.value;
	}

	set model(value: boolean) {
		this.$emit('input', value);
	}
}
</script>
