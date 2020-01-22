

import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS } from 'src/app/pages/files/product-list/products';
import { ProductService } from 'src/app/pages/files/product-list/product.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/pages/files/product-list/sortable.directive';
import { ProductList } from './productList';


@Component(
  { selector: 'ngbd-table-complete', templateUrl: 'files.product-list.component.html', providers: [ProductService, DecimalPipe] })


export class FilesProductListComponent {
  products$: Observable<ProductList[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ProductService) {
    this.products$ = service.products$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}