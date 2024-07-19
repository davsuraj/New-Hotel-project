import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelService } from './hotel-service/hotel.service';
import { HttpClientModule } from '@angular/common/http';


import { HotelRoutingModule } from './hotel-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SitingmanagmentComponent } from './siting-managment/sitingmanagment/sitingmanagment.component';
import { AddtableComponent } from './siting-managment/addtable/addtable.component';
import { TablereportComponent } from './siting-managment/tablereport/tablereport.component';
import { BookingmanagmentComponent } from './booking-managment/bookingmanagment/bookingmanagment.component';
import { BooktableComponent } from './booking-managment/booktable/booktable.component';
import { BookedtableComponent } from './booking-managment/bookedtable/bookedtable.component';
import { BookingreportComponent } from './booking-managment/bookingreport/bookingreport.component';
import { OrdermanagmentComponent } from './Order-managment/ordermanagment/ordermanagment.component';
import { AddmenuComponent } from './Order-managment/addmenu/addmenu.component';
import { MenutableComponent } from './Order-managment/menutable/menutable.component';
import { OrderfoodComponent } from './Order-managment/orderfood/orderfood.component';
import { OrderfoodreportComponent } from './Order-managment/orderfoodreport/orderfoodreport.component';
import { SttafmanagmentComponent } from './staff-managment/sttafmanagment/sttafmanagment.component';
import { RegistrationPersonalInformationComponent } from './staff-managment/registration-personal-information/registration-personal-information.component';
import { RegistrationDocumentDetailComponent } from './staff-managment/registration-document-detail/registration-document-detail.component';
import { RegistrationPhotoSignatureComponent } from './staff-managment/registration-photo-signature/registration-photo-signature.component';
import { AttendanceComponent } from './staff-managment/attendance/attendance.component';
import { AttendanceReportComponent } from './staff-managment/attendance-report/attendance-report.component';
import { DepartmentComponent } from './staff-managment/department/department.component';
import { DepartmentFrontOfficeComponent } from './staff-managment/department-front-office/department-front-office.component';
import { EmployeeDetailComponent } from './staff-managment/employee-detail/employee-detail.component';
import { InventoryManagmentComponent } from './inventory/inventory-managment/inventory-managment.component';
import { InventoryAddProductComponent } from './inventory/inventory-add-product/inventory-add-product.component';
import { InventoryAllowProductComponent } from './inventory/inventory-allow-product/inventory-allow-product.component';
import { InventoryReportComponent } from './inventory/inventory-report/inventory-report.component';
import { InventoryAddTableComponent } from './inventory/inventory-add-table/inventory-add-table.component';
import { InventoryAllowTableComponent } from './inventory/inventory-allow-table/inventory-allow-table.component';
// import { HttpClientModule } from '@angular/common/http';

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
// import { NgChartjsModule } from 'ng-chartjs';
import { BaseChartDirective } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';
import {MatDividerModule} from '@angular/material/divider';
import { SeatingPictureComponent } from './settings/seating-picture/seating-picture.component';
import { BookingPictureComponent } from './settings/booking-picture/booking-picture.component';
import { OrderPictureComponent } from './settings/order-picture/order-picture.component';
import { SttafPictureComponent } from './settings/sttaf-picture/sttaf-picture.component';
import { InventoryPictureComponent } from './settings/inventory-picture/inventory-picture.component';


@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    DashbordComponent,
    SidebarComponent,
    TopbarComponent,
    SitingmanagmentComponent,
    AddtableComponent,
    TablereportComponent,
    BookingmanagmentComponent,
    BooktableComponent,
    BookedtableComponent,
    BookingreportComponent,
    OrdermanagmentComponent,
    AddmenuComponent,
    MenutableComponent,
    OrderfoodComponent,
    OrderfoodreportComponent,
    SttafmanagmentComponent,
    RegistrationPersonalInformationComponent,
    RegistrationDocumentDetailComponent,
    RegistrationPhotoSignatureComponent,
    AttendanceComponent,
    AttendanceReportComponent,
    DepartmentComponent,
    DepartmentFrontOfficeComponent,
    EmployeeDetailComponent,
    InventoryManagmentComponent,
    InventoryAddProductComponent,
    InventoryAllowProductComponent,
    InventoryReportComponent,
    InventoryAddTableComponent,
    InventoryAllowTableComponent,
    ProfileComponent,
    IndexComponent,
    SeatingPictureComponent,
    BookingPictureComponent,
    OrderPictureComponent,
    SttafPictureComponent,
    InventoryPictureComponent,
  
],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    MatCardModule,
    MatIconModule,
    // ChartModule
    //BaseChartDirective
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule

  ],
  providers: [HotelService],

})
export class HotelModule {
  readonly startDate = new Date(1990, 0, 1);
 }
