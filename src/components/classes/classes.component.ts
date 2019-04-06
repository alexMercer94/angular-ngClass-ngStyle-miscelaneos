import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {
  alert = 'alert-danger';

  properties = {
    danger: false
  };

  loading = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Change propertie's value when the button is clicked
   */
  execute(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
