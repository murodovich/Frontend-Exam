import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
    selector: 'app-subcategory',
    standalone: true,
    templateUrl: './subcategory.component.html',
    styleUrl: './subcategory.component.scss',
    imports: [NavbarComponent]
})
export class SubcategoryComponent {

}
