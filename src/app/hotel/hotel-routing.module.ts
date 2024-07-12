import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
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
import { InventoryAddTableComponent } from './inventory/inventory-add-table/inventory-add-table.component';
import { InventoryAllowTableComponent } from './inventory/inventory-allow-table/inventory-allow-table.component';
import { InventoryReportComponent } from './inventory/inventory-report/inventory-report.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  {path:'', component: MainComponent, children:[
  {path:'dashboard',component:DashbordComponent},
  {path:'sitingmanagment',component:SitingmanagmentComponent},
  {path:'add-table',component:AddtableComponent},
  {path:'table-report',component:TablereportComponent},
  {path:'bookin-gmanagment',component:BookingmanagmentComponent},
  {path:'book-table',component:BooktableComponent},
  {path:'booked-table',component:BookedtableComponent},
  {path:'booking-report',component:BookingreportComponent},
  {path:'order-managment',component:OrdermanagmentComponent},
  {path:'add-menu',component:AddmenuComponent},
  {path:'menu-table',component:MenutableComponent},
  {path:'order-food',component:OrderfoodComponent},
  {path:'order-food-report',component:OrderfoodreportComponent},
  {path:'sttaf-managment',component:SttafmanagmentComponent},
  {path:'registration-personal-information',component:RegistrationPersonalInformationComponent},
  {path:'registration-document-detail',component:RegistrationDocumentDetailComponent},
  {path:'registration-photo-signature',component:RegistrationPhotoSignatureComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'attendance-report',component:AttendanceReportComponent},
  {path:'department',component:DepartmentComponent},
  {path:'department-Front-Office',component:DepartmentFrontOfficeComponent},
  {path:'employee-detail',component:EmployeeDetailComponent},
  {path:'inventory-managment',component:InventoryManagmentComponent},
  {path:'inventroy-add-product',component:InventoryAddProductComponent},
  {path:'inventroy-allow-product',component:InventoryAllowProductComponent},
  {path:'inventroy-add-table',component:InventoryAddTableComponent},
  {path:'inventroy-allow-table',component:InventoryAllowTableComponent},
  {path:'inventroy-report',component:InventoryReportComponent},
  {path:'profile',component:ProfileComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
