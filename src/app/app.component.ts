import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FootersComponent } from "./Components/footers/footers.component";
import { RussiaComponent } from "./russia/russia.component";
import { SolutionsComponent } from "./solutions/solutions.component";
import { RegistrComponent } from "./registr/registr.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, NavbarComponent, FootersComponent, RussiaComponent, SolutionsComponent, RegistrComponent]
})
export class AppComponent {
  title = 'Exam-Project';
}
