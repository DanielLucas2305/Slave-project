import { Component } from '@angular/core';

@Component({
  selector: 'app-moduleb',
  templateUrl: './moduleb.component.html',
  styleUrls: ['./moduleb.component.scss'],
})
export class ModulebComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
