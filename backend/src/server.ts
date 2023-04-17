import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT as string;

new App().start(PORT);
