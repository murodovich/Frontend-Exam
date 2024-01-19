import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FootersComponent } from "../../Components/footers/footers.component";
import { NumbersComponent } from "../../Components/numbers/numbers.component";
import { RegistrComponent } from "../../Components/registr/registr.component";

@Component({
    selector: 'app-subcategory',
    standalone: true,
    templateUrl: './subcategory.component.html',
    styleUrl: './subcategory.component.scss',
    imports: [NavbarComponent, FootersComponent, NumbersComponent, RegistrComponent]
})
export class SubcategoryComponent {

}
