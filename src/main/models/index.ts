import fs from "fs";
import path from "path";

export class MysqlDbModel {
	constructor() {
	}

	public async index() {
		const response = {};
		try {
			const loaderClasses = await fs.readdirSync(__dirname)
				.filter(file =>
					((file.indexOf(".") !== 0) && (!file.includes("index")))
				);
			await Promise.all(
				loaderClasses.map(async file => {
					file = file.replace(".ts", "");
					const result = await this.importModule(file);
					response[file] = result;
				})
			);
			return response;


		} catch (err) {
			console.log("connection loader", err);
		}
	}

	public async importModule(file: string) {
		const importModuleClass = await import(path.join(__dirname, file))
			.then(module => {
				return module?.default;
			});
		return importModuleClass;
	}

}