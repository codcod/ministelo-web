import {type Context, Hono} from 'hono';
import {serveStatic} from 'hono/bun';

const app = new Hono();

app.use('/*', serveStatic({root: './public'}));

app.get('/version', (c: Context) => {
  return c.text(Bun.version);
});

app.get('/messages', async (c: Context) => {
  const resp = await fetch('http://localhost:8000/messages');
  const messages = await resp.json();
  return c.json(messages);
});

export default app;
