import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FootersComponent } from "../../Components/footers/footers.component";
import { RegistrComponent } from "../../Components/registr/registr.component";
import { ProductData } from '../../models/Product';
import { ProductService } from '../../services/productServices/product.service';
import { PiprsPipe } from "../../piprs.pipe";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [NavbarComponent, FootersComponent, RegistrComponent, PiprsPipe]
})

export class ProductComponent implements OnInit {
    data!: ProductData;
    constructor(
        private service: ProductService) {

    }
    ngOnInit() {
        this.getAllProduct();
    }

    getAllProduct() {
        this.service.getAllProduct().subscribe(
            (data: ProductData) => {
                this.data = data;

            })

    }
}
