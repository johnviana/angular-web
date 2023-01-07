import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-gride',
  templateUrl: './lancamento-gride.component.html',
  styleUrls: ['./lancamento-gride.component.css']
})
export class LancamentoGrideComponent implements OnInit {

  constructor() { }

  @Input() lancamentos:any[] = []

  ngOnInit(): void {
  }

}
