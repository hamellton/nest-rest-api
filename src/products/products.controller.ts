import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product-dto';

@Controller('products')
export class ProductsController {
  @Get()
  @Redirect('https://www.google.com/', 301)
  getAll(): string {
    return 'get all products';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  create(@Body() CreateProductDto: CreateProductDto): string {
    return `Title: ${CreateProductDto.title}, Price: ${CreateProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Remove ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return `Update ${id}`;
  }
}
