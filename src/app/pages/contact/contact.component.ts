import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FootersComponent } from "../../Components/footers/footers.component";
import { AddressDate } from '../../models/Address';
import { AddressService } from '../../services/AddressService/address.service';
import { QuestionData } from '../../models/Questions';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { QuestionsService } from '../../services/Questions/questions.service';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [
    NavbarComponent,
    FootersComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})




export class ContactComponent implements OnInit {
  questionsform!: FormGroup;
  data!: AddressDate;
  quest!: QuestionData;
  Contactform!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private service: AddressService,
    private api: QuestionsService,
  ) {

  }

  ngOnInit() {
    this.getAllAddreses()

    this.Contactform = this.formbuilder.group({
      name: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      questionies: ["", Validators.required]

    });

  }

  getAllAddreses() {
    this.service.getAllAddress().subscribe(
      (data: AddressDate) => {
        this.data = data
      })

  }

  async addQuestion() {
    if (this.Contactform.valid) {
      (await this.api.CreateQuestion(this.Contactform.getRawValue()))
        .subscribe(response => {
          console.log(response);
        })
    }
  }

}



