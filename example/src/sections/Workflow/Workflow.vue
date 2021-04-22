<template>
	<div class="section">
		<Meta />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Meta } from '@/components/Meta';

@Component({ components: { Meta }, name: 'Trade' })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.section {
	display: flex;
	flex-direction: column;
}
</style>
