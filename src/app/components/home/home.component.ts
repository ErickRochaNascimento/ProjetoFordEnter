import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isCollapsed: boolean = true; // Alterado para 'true' para começar fechado

  onCollapseChange(collapsed: boolean): void {
    this.isCollapsed = collapsed;
  }
}
