<template>
	<modal :adaptive="true" height="auto" name="information">
		<div class="modal-information">Information</div>
	</modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'ModalInformation' })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.modal-information {
	//
}
</style>
