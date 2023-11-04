import { ContaService } from './../conta.service';
import { Conta } from './../conta-create/conta.model';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-conta-read',
  templateUrl: './conta-read.component.html',
  styleUrls: ['./conta-read.component.css']
})
export class ContaReadComponent implements OnInit {

  contas! : Conta[]
  displayedColumns = ['id', 'nomeTitular', 'numeroConta', 'saldoConta', 'action']

  constructor(private contaService: ContaService){}

  ngOnInit(): void {
    this.contaService.read().subscribe(contas => {
      this.contas = contas
      console.log(contas)
    })
      
  }

   deleteProduto(){
      console.log()
  }

}
