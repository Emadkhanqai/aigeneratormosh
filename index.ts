import concurrently from 'concurrently';

// Launch both client and server projects
concurrently([
  { command: 'bun run dev', name: 'server', cwd: './packages/server', prefixColor: 'blue' },
  { command: 'bun run dev', name: 'client', cwd: './packages/client', prefixColor: 'green' }
], {
  prefix: 'name',
  killOthers: ['failure'],
  restartTries: 3
});

