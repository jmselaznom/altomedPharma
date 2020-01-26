
import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/pages/files/product-list/product.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/pages/files/product-list/sortable.directive';
import { ProductList } from 'src/app/pages/files/product-list/productList';

@Component({
  selector: "app-product",
  templateUrl: "files.sales-representative.component.html",
  providers: [ProductService, DecimalPipe] 
})

export class FilesSalesRepresentativeComponent{
  products$: Observable<ProductList[]>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ProductService) {
    this.products$ = service.products$;
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









export class FilesProductListComponent {
}