import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/notfound/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompanyComponent } from './pages/company/company.component';

export const routes: Routes = [
    {path:'main',component:MainComponent},
    {path:'product',component:ProductComponent},
    {path:'products',component:ProductsComponent},
    {path:'subcategory',component: SubcategoryComponent},
    {path:'contact',component: ContactComponent},
    {path:"",redirectTo:"main",pathMatch:'full'},
    {path:'company',component: CompanyComponent},
    {path:'**', component:NotFoundComponent}

];
 