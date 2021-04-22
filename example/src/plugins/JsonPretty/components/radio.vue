<template>
	<label :class="['vjs-radio', model === currentPath ? 'is-checked' : '']" @click.stop>
		<span class="vjs-radio__inner" />
		<input v-model="model" class="vjs-radio__original" type="radio" :value="currentPath" @blur="focus = false" @change="change" @focus="focus = true" />
	</label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
	// --- data

	public focus: boolean = false;

	// --- props

	@Prop({ default: '', type: String }) public readonly value!: string;
	@Prop({ default: '', type: String }) public readonly path!: string;

	// --- computed

	get model(): string {
		return this.value;
	}

	set model(value: string) {
		this.$emit('input', value);
	}

	get currentPath(): string {
		return this.path;
	}

	// --- methods

	public change(): void {
		this.$emit('change', this.model);
	}
}
</script>
