import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup =  this.fb.group({
    nombre:['', [Validators.required]],
    apellido:['', [Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })
  constructor( private fb: FormBuilder, private authService:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

  register(){
    const {nombre, apellido, email, password} = this.miFormulario.value;
    this.authService.register(nombre,apellido,email,password);
    this.router.navigateByUrl('/main/home');
  }

}
