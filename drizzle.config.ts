import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',  
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://postgres:YOUR_PASSWORD@localhost:5432/A3',
  },
});