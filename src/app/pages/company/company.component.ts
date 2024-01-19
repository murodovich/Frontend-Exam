import { Component } from '@angular/core';
import { FootersComponent } from "../../Components/footers/footers.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
    selector: 'app-company',
    standalone: true,
    templateUrl: './company.component.html',
    styleUrl: './company.component.scss',
    imports: [FootersComponent, NavbarComponent]
})
export class CompanyComponent {

}
