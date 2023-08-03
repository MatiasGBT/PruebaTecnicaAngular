import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public menuAbierto: boolean = false;
  @ViewChild("listaNav") listaNav!: ElementRef;

  constructor(private renderer2: Renderer2) { }

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
}
