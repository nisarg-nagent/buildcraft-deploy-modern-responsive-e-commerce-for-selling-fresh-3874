```typescript
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export const authenticate = async (app: FastifyInstance) => {
  app.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (error) {
      reply.send({ success: false, error: 'Unauthorized access' });
    }
  });
};
```