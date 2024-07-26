import moment from "moment";
import lodash from "lodash";
import Axios from "axios";
import jwt from "jsonwebtoken";

export interface PluginsTypes {
    moment: moment;
    lodash: lodash;
    axios: Axios;
    jwt: jwt;
}