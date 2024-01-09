import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FootersComponent } from "./Components/footers/footers.component";
import { SolutionsComponent } from "./Components/solutions/solutions.component";
import { RussiaComponent } from "./Components/russia/russia.component";
import { RegistrComponent } from "./Components/registr/registr.component";
import { NotFoundComponent } from './pages/notfound/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,
              RouterOutlet, 
              MatToolbarModule,
              MatIconModule, 
              MatButtonModule, 
              NavbarComponent, 
              FootersComponent, 
              SolutionsComponent, 
              RussiaComponent, 
              RegistrComponent,
              NotFoundComponent,
              MainComponent,
              HttpClientModule,
            ]
})
export class AppComponent {
  title = 'Exam-Project';
}
