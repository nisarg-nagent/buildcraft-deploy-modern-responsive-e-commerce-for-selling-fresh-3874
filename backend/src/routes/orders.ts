```typescript
import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import orderService from '../services/OrderService';

const ordersRoute: FastifyPluginAsync = async (app) => {
  app.post('/orders', {
    preValidation: [app.authenticate],
    schema: {
      body: z.object({
        userId: z.string(),
        cartId: z.string(),
      }),
    },
  }, async (request, reply) => {
    const { userId, cartId } = request.body;
    try {
      const order = await orderService.createOrder({ userId, cartId });
      reply.status(201).send({ success: true, data: order });
    } catch (error) {
      reply.status(400).send({ success: false, error: 'Order creation failed' });
    }
  });
};

export default ordersRoute;
```