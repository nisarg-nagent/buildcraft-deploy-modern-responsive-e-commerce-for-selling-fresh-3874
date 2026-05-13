```typescript
import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export const globalErrorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  const statusCode = error.statusCode || 500;
  const response = {
    success: false,
    error: {
      message: error.message || 'Internal Server Error',
      code: error.code || 'INTERNAL_ERROR',
    },
  };
  reply.status(statusCode).send(response);
};
```