import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-editable',
  templateUrl: 'files.product-price.component.html'
})
export class FilesProductPriceComponent implements OnInit {
    editField: string;
    personList: Array<any> = [
      { id: 1, code: '100100', productName: 'Product # 1', unit: 'BOX', conversion: '0', productPrice : 1110.11 },
      { id: 2, code: '200200', productName: 'Product # 2', unit: 'CAP', conversion: '0', productPrice : 2220.22 },
      { id: 3, code: '300300', productName: 'Product # 3', unit: 'BOX', conversion: '1', productPrice : 3330.33 },
      { id: 4, code: '400400', productName: 'Product # 4', unit: 'PCS', conversion: '0', productPrice : 4440.44 },
      { id: 5, code: '500500', productName: 'Product # 5', unit: 'BOTTLES', conversion: '0', productPrice : 5550.55 },
    ];

    awaitingPersonList: Array<any> = [
      { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
      { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
      { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
      { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
      { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
    
  constructor() { }

  ngOnInit() { }
}