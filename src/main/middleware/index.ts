import express from "express";
import fs from "fs";
import path from "path";
import { MiddlewareTypes } from "@Types/middlewares";


export class MiddlewareLoader {
	public appObj: express.Application;
	constructor(app: express.Application) {
		this.appObj = app;
	}

	public async index() {
		let config: MiddlewareTypes | any = {};
		const loaderClasses = await fs.readdirSync(__dirname)
			.filter(file =>
				((file.indexOf(".") !== 0) && (!file.includes("index")))
			);
		await Promise.all(
			loaderClasses.map(async file => {
				const result = await this.importModule(file);
				return config[file] = result;
			})
		);

		return config;
	}

	public async importModule(file: string) {
		let importModuleClass = await import(path.join(__dirname, file))
			.then((module: any) => {
				return module.default; //module.default;
			});
		return importModuleClass;
	}

}