```typescript
import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import jwt from '@fastify/jwt';
import { connectDatabase, disconnectDatabase } from './config/database';
import { registerRoutes } from './routes';
import { env } from './config/env';
import { logger } from './utils/logger';
import { globalErrorHandler } from './middleware/errorHandler';

const app = fastify({ logger });

async function startServer() {
  try {
    await connectDatabase();
    
    app.register(cors, { origin: env.FRONTEND_URL });
    app.register(helmet);
    app.register(jwt, { secret: env.JWT_SECRET });
    
    app.setErrorHandler(globalErrorHandler);
    
    await registerRoutes(app);
    
    const PORT = env.PORT || 8001;
    await app.listen({ host: '0.0.0.0', port: Number(PORT) });
    logger.info(`Server listening on port ${PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

process.on('SIGTERM', async () => {
  await app.close();
  await disconnectDatabase();
});

process.on('SIGINT', async () => {
  await app.close();
  await disconnectDatabase();
});

startServer();
```