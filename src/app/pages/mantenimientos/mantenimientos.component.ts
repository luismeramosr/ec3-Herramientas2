import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Propietario } from 'src/app/core/api/models';
import { PropietariosService } from 'src/app/core/api/services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.sass']
})
export class MantenimientosComponent implements OnInit {

  propietarios: Propietario[] = [];
  consultaForm: FormGroup;
  inicial : FormControl;

  constructor(private service: PropietariosService,
              private route: ActivatedRoute,
              private router: Router) {
    this.inicial = new FormControl('',{});
    this.consultaForm = new FormGroup({
      "inicial": this.inicial
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      let id = p.id;
      if (id)
        this.service.propietarioListGet$Json({initial: id}).subscribe(props => {
          this.propietarios = props;
        });
    });
  }

  consultar() {
    this.router.navigate(["consulta/", this.inicial.value]);
  }

  eliminar() {
  }

  logout() {
  }

}
