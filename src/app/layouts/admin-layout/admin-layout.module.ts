import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FilesComponent } from 'src/app/pages/files/files.component';
import { FilesSuppliersComponent } from 'src/app/pages/files/suppliers/files.suppliers.component';
import { FilesDoctorsComponent } from 'src/app/pages/files/doctors/files.doctors.component';
import { FilesAreaComponent } from 'src/app/pages/files/area/files.area.component';
import { FilesSubAreaComponent } from 'src/app/pages/files/sub-area/files.sub-area.component';
import { FilesCustomerComponent } from 'src/app/pages/files/customer/files.customer.component';
import { FilesProductComponent } from 'src/app/pages/files/product/files.product.component';
import { FilesProductListComponent } from 'src/app/pages/files/product-list/files.product-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    FilesComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    FilesSuppliersComponent,
    FilesDoctorsComponent,
    FilesAreaComponent,
    FilesSubAreaComponent,
    FilesCustomerComponent,
    FilesProductComponent,
    FilesProductListComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
