<template>
	<div>
		<slot />

		<span v-show="dataVisiable" class="vjs-tree__brackets" @click.stop="toggleBrackets">
			{{ Array.isArray(data) ? '[' : '{' }}
		</span>

		<span v-show="!dataVisiable">
			<span class="vjs-tree__brackets" @click.stop="toggleBrackets">
				{{ closedBracketsGenerator(data) }}
			</span>

			<span v-if="showLength" class="vjs-comment">
				{{ lengthGenerator(data) }}
			</span>
		</span>
	</div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import bracketsMixin from '../mixins/brackets-mixin';

@Component({})
export default class extends Mixins(bracketsMixin) {
	// --- props

	@Prop({ default: false, type: Boolean }) public readonly showLength!: boolean;

	// --- methods

	closedBracketsGenerator(data: any): string {
		return this.bracketsFormatter(Array.isArray(data) ? '[...]' : '{...}');
	}

	lengthGenerator(data: any): string {
		return ` // ${Array.isArray(data) ? `${data.length} items` : `${Object.keys(data).length} keys`}`;
	}
}
</script>
