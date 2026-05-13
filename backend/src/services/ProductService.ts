```typescript
import prisma from '../prisma';
import { Prisma } from '@prisma/client';
import { AppError } from '../utils/errors';

class ProductService {
  async getAllProducts(filters: any) {
    try {
      return await prisma.products.findMany({
        where: {
          ...(filters.category && { categoryId: filters.category }),
          ...(filters.search && { name: { contains: filters.search, mode: 'insensitive' } }),
        },
        take: filters.limit || 10,
      });
    } catch (error) {
      throw new AppError('Failed to fetch products');
    }
  }

  async getProductById(productId: string) {
    const product = await prisma.products.findUnique({
      where: { productId },
    });
    if (!product) {
      throw new AppError('Product not found');
    }
    return product;
  }

  async createProduct(data: Prisma.ProductsCreateInput) {
    try {
      return await prisma.products.create({ data });
    } catch (error) {
      throw new AppError('Failed to create product');
    }
  }
}

export default new ProductService();
```