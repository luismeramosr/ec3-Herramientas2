import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropietariosService } from 'src/app/core/api/services';

import { Papeleta } from 'src/app/core/api/models';

@Component({
  selector: 'app-papeletas',
  templateUrl: './papeletas.component.html',
  styleUrls: ['./papeletas.component.sass']
})
export class PapeletasComponent implements OnInit {

  data : any[] = [];

  constructor(private service: PropietariosService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      let id = p.id;
      if (id)
        this.service.propietarioQueryGet$Json({dni: id}).subscribe(res => {
          this.data = res;
        });
    });
  }

}
