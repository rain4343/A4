import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: '../../lib/db/src/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://postgres:R%40in%40%23%40%234343@localhost:5432/A3',
  },
});