import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FootersComponent } from "../../Components/footers/footers.component";
import { RegistrComponent } from "../../Components/registr/registr.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [NavbarComponent, FootersComponent, RegistrComponent]
})
export class ProductComponent {

}
