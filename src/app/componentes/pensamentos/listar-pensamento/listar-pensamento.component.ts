import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos=[
    
      {
        conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus quam, posuere non augue id, sagittis luctus nibh. Vestibulum sollicitudin mattis erat ut commodo. Nullam pretium efficitur sapien at consectetur. Vivamus elementum magna ac risus scelerisque, id hendrerit arcu iaculis. Praesent gravida sit amet ligula sit amet vehicula. Ut nec enim nunc. Mauris sit amet interdum justo. Donec tempus metus sit amet tellus rutrum, eu fermentum magna mattis.' +
                  'Sed eget suscipit lacus. Nam ultrices scelerisque odio, nec iaculis nunc sollicitudin eget. Nam lacinia ultrices enim, ac auctor purus viverra vitae. Phasellus iaculis, ipsum sed finibus suscipit, enim velit scelerisque tortor, id tempor nulla nunc ut turpis. Duis sed maximus massa. Proin eu mi nec erat elementum mollis ut placerat augue. Mauris molestie enim in commodo lacinia. Donec in lectus ante. Fusce imperdiet ac velit vitae fermentum. Quisque suscipit ultrices luctus. Nulla eu mi interdum, vehicula nibh a, vehicula felis. Mauris eleifend posuere tortor, in ultrices magna hendrerit at.',
        autoria: 'Bruno',
        modelo: 'modelo1'
      },
      {
        conteudo: 'Phasellus semper ex vel ligula suscipit, quis mattis metus ornare. ',
        autoria: 'Paulo',
        modelo: 'modelo2'
      },
      {
        conteudo: 'Minha propriedade decorada com @Input',
        autoria: 'Luiza',
        modelo: 'modelo3'
      },
      {
        conteudo: 'Nam ex nibh, commodo eget faucibus at, auctor eleifend nulla. Cras cursus mollis turpis, ut suscipit ante tempus eu. Pellentesque nec eros sed magna aliquet tempor.' ,
        autoria: 'Joao',
        modelo: 'modelo1'
      },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
