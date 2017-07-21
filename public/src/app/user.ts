export class User {

	constructor(
		public first_name: string = '',
		public last_name: string = '',
		public username: string = '',
		public email: string = '',
		public password: string = '',
		public birthday: string = null,
		public questions: Array<any> = [],
		public answers: Array<any> = [],
		) {}
}
