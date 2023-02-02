import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})
export class FormStudentsComponent {
  frmStudent: FormGroup;

  constructor(){
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexSoloNumeros: string = '^([0-9])*$';
    let controls: any = {
      
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      documentType: new FormControl('Documento Nacional de Identidad',[]),
      document: new FormControl('',[Validators.required, Validators.pattern(regexSoloNumeros)]),
      gender: new FormControl('',[Validators.required]),
      adress: new FormControl('',[Validators.required, Validators.pattern(regexCorreo)]),
      phoneNumber: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(10),Validators.pattern(regexSoloNumeros)])
    }

    this.frmStudent = new FormGroup(controls);
  }

  submit(){
    console.log(this.frmStudent);
  }

  get name() {return this.frmStudent.get('name')};
  get surname() {return this.frmStudent.get('surname')};
  get documentType() {return this.frmStudent.get('documentType')};
  get document() {return this.frmStudent.get('document')};
  get gender() {return this.frmStudent.get('gender')};
  get adress() {return this.frmStudent.get('adress')};
  get phoneNumber() {return this.frmStudent.get('phoneNumber')};
}
