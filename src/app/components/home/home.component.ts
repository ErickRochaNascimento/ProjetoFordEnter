import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// ...
export class HomeComponent {
  isCollapsed: boolean = false; // Propriedade para controlar o estado do menu

  // Método para receber o evento de mudança de estado do menu
  onCollapseChange(collapsed: boolean): void {
    this.isCollapsed = collapsed;
  }
}

