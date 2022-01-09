import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FootersComponent } from "../../Components/footers/footers.component";
import { AddressDate } from '../../models/Address';
import { AddressService } from '../../services/AddressService/address.service';
import { QuestionData } from '../../models/Questions';
import { QuestionsService } from '../../services/Questions/questions.service';
import {  FormGroup,FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [NavbarComponent, FootersComponent]
})



    
export class ContactComponent implements OnInit {
    questionsform!: FormGroup;
    data! : AddressDate;
    quest!:QuestionData;
    constructor(
        private formbuilder: FormBuilder,
        private service: AddressService,
        private question:QuestionsService,
        private formGroup: FormGroup){
      
    }
  
    ngOnInit() {
      this.getAllAddreses()
      // this.Address = {
      //   PhoneNumber: '123'
      // }
    }
  
    getAllAddreses(){
      this.service.getAllAddress().subscribe(
        (data:AddressDate) => {
          this.data = data
        })
      
    }

    addQuestion(){

    }
  
  }
  
  
  
