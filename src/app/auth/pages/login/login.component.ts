import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fb:FormBuilder, private authService:AuthService,
               private router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    const {email, password} = this.miFormulario.value;
    const res = this.authService.login(email,password);
    if(res !== ''){
      Swal.fire('Error',res,'error')
    }else{
      this.router.navigateByUrl('/main/home')
    }
  }


}
