import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
	// --- props

	@Prop({ default: false, type: Boolean }) public readonly collapsedOnClickBrackets!: boolean;
	@Prop({ default: false, type: Boolean }) public readonly showComma!: boolean;
	@Prop({ default: true, type: Boolean }) public readonly visible!: boolean;
	@Prop({ required: true, type: [String, Number, Boolean, Array, Object] }) public readonly data!: any;

	// --- computed

	get dataVisiable(): boolean {
		return this.visible;
	}

	set dataVisiable(val: boolean) {
		if (this.collapsedOnClickBrackets) {
			this.$emit('update:visible', val);
		}
	}

	// --- methods

	bracketsFormatter(brackets: string): string {
		return this.showComma ? `${brackets},` : brackets;
	}

	toggleBrackets(): void {
		this.dataVisiable = !this.dataVisiable;
	}
}
