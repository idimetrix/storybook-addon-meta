<template>
	<div v-show="dataVisiable">
		<span class="vjs-tree__brackets" @click.stop="toggleBrackets">
			{{ bracketsFormatter(Array.isArray(data) ? ']' : '}') }}
		</span>
	</div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import bracketsMixin from '../mixins/brackets-mixin';

@Component({})
export default class extends Mixins(bracketsMixin) {}
</script>
