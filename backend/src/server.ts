import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT as string;

new App().start(PORT);
