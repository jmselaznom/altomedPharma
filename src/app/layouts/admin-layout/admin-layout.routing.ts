import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { FilesComponent } from 'src/app/pages/files/files.component';
import { FilesSuppliersComponent } from 'src/app/pages/files/suppliers/files.suppliers.component';
import { FilesDoctorsComponent } from 'src/app/pages/files/doctors/files.doctors.component';
import { FilesAreaComponent } from 'src/app/pages/files/area/files.area.component';
import { FilesSubAreaComponent } from 'src/app/pages/files/sub-area/files.sub-area.component';
import { FilesCustomerComponent } from 'src/app/pages/files/customer/files.customer.component';
import { FilesProductComponent } from 'src/app/pages/files/product/files.product.component';
import { FilesProductListComponent } from 'src/app/pages/files/product-list/files.product-list.component';
import { FilesProductPriceComponent } from 'src/app/pages/files/product-price/files.product-price.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "files", component: FilesComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "files/suppliers", component: FilesSuppliersComponent },
  { path: "files/doctors", component: FilesDoctorsComponent },
  { path: "files/area", component: FilesAreaComponent },
  { path: "files/sub-area", component: FilesSubAreaComponent },
  { path: "files/customer", component: FilesCustomerComponent },
  { path: "files/product", component: FilesProductComponent },
  { path: "files/product-list", component: FilesProductListComponent },
  { path: "files/product-price", component: FilesProductPriceComponent },
];
