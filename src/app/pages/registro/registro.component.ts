import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public formularioRegistro: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    dni: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmacion: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      apellido: ['', [Validators.required, Validators.maxLength(40)]],
      dni: ['', [Validators.required, Validators.max(99999999)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^((\d{2}\s\d{4}-\d{4})|(\d{3}\s\d{3}-\d{4})|(\d{4}\s\d{2}-\d{4}))$/)]],
      password: ['', [Validators.required, Validators.maxLength(18)]],
      passwordConfirmacion: ['', [Validators.required, Validators.maxLength(18), this.confirmarPass.bind(this)]]
    });
  }

  ngOnInit() {
    if (this.authService.usuarioEstaLogueado) {
      this.router.navigate(['inicio']);
    }
  }

  public registrarUsuario(): void {
    if (!this.formularioRegistro.invalid) {
      let usuario = {
        'nombre': this.formularioRegistro.controls['nombre'].value,
        'apellido': this.formularioRegistro.controls['apellido'].value,
        'dni': this.formularioRegistro.controls['dni'].value,
        'email': this.formularioRegistro.controls['email'].value,
        'telefono': this.formularioRegistro.controls['telefono'].value,
      }
      this.authService.registrarse(usuario);
      this.router.navigate(['/inicio']);
    }
  }
  
  //#region Validaciones formulario
  public obtenerErrorNombre(): string {
    if (this.formularioRegistro.controls['nombre'].hasError('required')) {
      return 'El campo nombre es requerido';
    }
    return this.formularioRegistro.controls['nombre'].hasError('maxLength') ? 'El campo nombre no puede superar los 40 carácteres' : '';
  }
  
  public obtenerErrorApellido(): string {
    if (this.formularioRegistro.controls['apellido'].hasError('required')) {
      return 'El campo apellido es requerido';
    }
    return this.formularioRegistro.controls['apellido'].hasError('maxLength') ? 'El campo apellido no puede superar los 40 carácteres' : '';
  }
  
  public obtenerErrorDni(): string {
    if (this.formularioRegistro.controls['dni'].hasError('required')) {
      return 'El campo DNI es requerido';
    }
    return this.formularioRegistro.controls['dni'].hasError('max') ? 'DNI no válido' : '';
  }

  public obtenerErrorEmail(): string {
    if (this.formularioRegistro.controls['email'].hasError('required')) {
      return 'El campo email es requerido';
    }
    return this.formularioRegistro.controls['email'].hasError('email') ? 'Email no válido' : '';
  }

  public obtenerErrorTelefono(): string {
    if (this.formularioRegistro.controls['telefono'].hasError('required')) {
      return 'El campo teléfono es requerido';
    }
    return this.formularioRegistro.controls['telefono'].hasError('pattern') ? 'Teléfono no válido' : '';
  }

  public obtenerErrorPass(): string {
    if (this.formularioRegistro.controls['password'].hasError('required')) {
      return 'El campo contraseña es requerido';
    }
    return this.formularioRegistro.controls['password'].hasError('maxLength') ? 'El campo contraseña no puede superar los 18 carácteres' : '';
  }

  public obtenerErrorPassConfirmacion(): string {
    if (this.formularioRegistro.controls['passwordConfirmacion'].hasError('required')) {
      return 'El campo repetir contraseña es requerido';
    }
    if (this.formularioRegistro.controls['passwordConfirmacion'].hasError('maxLength')) {
      return 'El campo repetir contraseña no puede superar los 18 carácteres';
    }
    return this.formularioRegistro.controls['passwordConfirmacion'].hasError('noCoinciden') ? 'Las contraseñas no coinciden' : '';
  }

  private confirmarPass(control: AbstractControl) {
    const password = this.formularioRegistro.controls['password'].value;
    const passwordConfirmacion = this.formularioRegistro.controls['passwordConfirmacion'].value;
    return password && passwordConfirmacion && password !== passwordConfirmacion
      ? { noCoinciden: true }
      : null;
  }
  //#endregion
}
