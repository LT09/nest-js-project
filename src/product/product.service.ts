import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/prodoct.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { id: 1, name: 'Red', price: 100 },
    { id: 2, name: 'Blue', price: 200 },
    { id: 3, name: 'Yellow', price: 300 },
    { id: 4, name: 'Green', price: 400 },
  ];
  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  findByCondition(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((product) => predicate(product));
  }
}
