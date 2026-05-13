```typescript
import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import productService from '../services/ProductService';

const productsRoute: FastifyPluginAsync = async (app) => {
  app.get('/products', {
    schema: {
      querystring: z.object({
        category: z.string().optional(),
        search: z.string().optional(),
        limit: z.number().min(1).max(100).optional(),
      }),
    },
  }, async (request, reply) => {
    const { category, search, limit } = request.query as any;
    const products = await productService.getAllProducts({ category, search, limit });
    reply.send({ success: true, data: products });
  });

  app.get('/products/:productId', {
    schema: {
      params: z.object({
        productId: z.string(),
      }),
    },
  }, async (request, reply) => {
    const { productId } = request.params as any;
    try {
      const product = await productService.getProductById(productId);
      reply.send({ success: true, data: product });
    } catch (error) {
      reply.status(404).send({ success: false, error: 'Product not found' });
    }
  });
};

export default productsRoute;
```