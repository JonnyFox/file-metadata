import "reflect-metadata";
import { Container } from 'inversify';
import { ConfigService } from './services';

var container = new Container();
container.bind<ConfigService>(ConfigService).toSelf().inSingletonScope();
export default container;