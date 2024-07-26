import { PluginsTypes } from "@Types/plugins";


export class PluginsLoader {
    constructor() { }
    public async index() {
        return {
            moment: (await this.importModule("moment")),
            lodash: await this.importModule("lodash"),
            axios: (await this.importModule("axios")).default,
            jwt: (await this.importModule("jsonwebtoken"))

        } as PluginsTypes;
    }


    private async importModule(file: string) {
        const importModuleClass = await import(file)
            .then(module => {
                return module?.default;
            });
        return importModuleClass;
    }

}