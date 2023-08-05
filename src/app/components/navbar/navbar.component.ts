import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuAbierto: boolean = false;
  @ViewChild("listaNav") listaNav!: ElementRef;
  public cantidadElementosCarrito: number = 0;
  public badgeOculta: boolean = true;

  constructor(private renderer2: Renderer2,
    private productService: ProductoService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.productService.eventoAgregarAlCarrito.subscribe(() => {
      this.cantidadElementosCarrito++;
      if (this.badgeOculta) this.badgeOculta = false;
    })
  }

  public alternarMenu(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1038) {
      this.menuAbierto = !this.menuAbierto;
      this.menuAbierto ? this.abrirMenu() : this.cerrarMenu();
    }
  }

  private abrirMenu(): void {
    this.renderer2.addClass(this.listaNav.nativeElement, "menu-abierto");
  }

  private cerrarMenu(): void {
    this.renderer2.removeClass(this.listaNav.nativeElement, "menu-abierto");
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1038) {
      this.menuAbierto = false;
      this.cerrarMenu();
    }
  }

  public cerrarSesion(): void {
    this.authService.cerrarSesion();
  }
}
