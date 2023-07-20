import { Component, OnInit } from '@angular/core';

import {OnExit} from '../../../guards/exit.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  constructor() { }

  
  onExit(){
    const rta = confirm("Desea Salir de verdad?")
    return rta;
  };
}
