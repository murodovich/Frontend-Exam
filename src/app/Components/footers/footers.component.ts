import { Component, OnInit } from '@angular/core';
import { AddressDate } from '../../models/Address';
import { AddressService } from '../../services/AddressService/address.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footers.component.html',
  styleUrl: './footers.component.scss'
})

export class FootersComponent implements OnInit {
  data! : AddressDate;
  
  constructor(private service: AddressService){
    
  }

  ngOnInit() {
    this.getAllAddreses()
    
  }

  getAllAddreses(){
    this.service.getAllAddress().subscribe(
      (data:AddressDate) => {
        this.data = data;
        
      })
    
  }

}


