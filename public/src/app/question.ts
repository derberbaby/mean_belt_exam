export class Question {
	constructor(
		public content: string = '',
		public desc: string = '',
		public _User: string = '',
		public answers: Array<any> = [],
		) {}
}
