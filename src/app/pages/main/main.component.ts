import { Component } from '@angular/core';
import { SolutionsComponent } from "../../Components/solutions/solutions.component";
import { RussiaComponent } from "../../Components/russia/russia.component";
import { RegistrComponent } from "../../Components/registr/registr.component";
import { FootersComponent } from "../../Components/footers/footers.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { NumbersComponent } from "../../Components/numbers/numbers.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [SolutionsComponent, RussiaComponent, RegistrComponent, FootersComponent, NavbarComponent, NumbersComponent]
})
export class MainComponent {
}
