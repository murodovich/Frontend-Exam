import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FootersComponent } from "../../Components/footers/footers.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [NavbarComponent, FootersComponent]
})
export class ProductsComponent {

}
