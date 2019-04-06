import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(params => {
      console.log('Ruta padre');
      console.log(params);
    });
  }

  ngOnInit() {}
}
