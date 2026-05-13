```typescript
import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import productService from '../services/ProductService';

const adminRoute: FastifyPluginAsync = async (app) => {
  app.post('/products', {
    preValidation: [app.authenticate],
    schema: {
      body: z.object({
        name: z.string(),
        categoryId: z.string(),
        description: z.string().optional(),
        price: z.number(),
        availability: z.boolean(),
        imageUrl: z.string().optional(),
      }),
    },
  }, async (request, reply) => {
    try {
      const product = await productService.createProduct(request.body);
      reply.status(201).send({ success: true, data: product });
    } catch (error) {
      reply.status(403).send({ success: false, error: 'Unauthorized access' });
    }
  });

  app.get('/dashboard', {
    preValidation: [app.authenticate],
  }, async (request, reply) => {
    // Fetch admin analytics here
  });
};

export default adminRoute;
```