```typescript
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string().min(1),
  PORT: z.string().min(1),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  FRONTEND_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
```