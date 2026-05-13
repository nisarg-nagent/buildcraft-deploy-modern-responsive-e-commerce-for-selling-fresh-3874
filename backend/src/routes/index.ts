```typescript
import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import healthRoute from './health';
import productsRoute from './products';
import ordersRoute from './orders';
import usersRoute from './users';
import adminRoute from './admin';

export const registerRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.register(healthRoute, { prefix: '/api' });
  app.register(productsRoute, { prefix: '/api' });
  app.register(ordersRoute, { prefix: '/api' });
  app.register(usersRoute, { prefix: '/api' });
  app.register(adminRoute, { prefix: '/api/admin' });
};
```