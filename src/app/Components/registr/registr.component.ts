import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalculationserviceService } from '../../services/CalculationService/calculationservice.service';
import { FormGroup, Validators, FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { CalculationData } from '../../models/Calculation';

export interface FileInput {
  file?: File;
  fileName: string;
}


@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.scss'

})

export class RegistrComponent implements OnInit {
  data!: CalculationData;
  CalculationForm!: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private api: CalculationserviceService) {
  }

  ngOnInit() {
    this.CalculationForm = this.formBuilder.group({
      Name: ["", Validators.required],
      PhoneNumber: ["", Validators.required],
      Email: ["", Validators.required],
      FilePath: [File, Validators.required]
    });
  }

  globalval!: File;

  async AddCalculationsProject() {

    let res = this.CalculationForm.getRawValue();

    var result: CalculationData = {
      FilePath: this.globalval,
      Name: res.Name,
      Email: res.Email,
      PhoneNumber: res.PhoneNumber,
    };
    let komron = this.getFormData(res);

    // (await this.api.CreateCalculations(res))
    //   .subscribe(response => {
    //     console.log(response);
    //     this.CalculationForm.reset();
    //   })
    (await this.api.Kormon(komron))
      .subscribe(response => {
        console.log(response);
        this.CalculationForm.reset();
      })
  }


  method(event: any) {
    this.globalval = <File>event.target.files[0];
  }

  getFormData(object: any) {
    let data = new FormData();
    for (let [key, val] of Object.entries(object)) {
      if (key == "FilePath") {
        data.append('filePath', this.globalval)
      }
      else data.append(key, JSON.stringify(val));
    }
    return data;
  }
}
