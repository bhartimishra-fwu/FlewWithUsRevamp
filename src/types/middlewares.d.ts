import { Auth } from "@Main/middleware/AUTH";
import { Crypto} from "@Main/middleware/CRYPTO"
export interface MiddlewareTypes {
    AUTH: Auth,
    CRYPTO: Crypto
}