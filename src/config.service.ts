import { injectable } from "inversify";

@injectable()
export class ConfigService {
    public applicationHost = 'https://fcc-bcknd-file-metadata.herokuapp.com';
    public port = process.env.PORT || 8999;
}