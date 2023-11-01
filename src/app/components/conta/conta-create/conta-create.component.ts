import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { Router } from '@angular/router';
import { Conta } from './conta.model';

@Component({
  selector: 'app-conta-create',
  templateUrl: './conta-create.component.html',
  styleUrls: ['./conta-create.component.css']
})
export class ContaCreateComponent implements OnInit {
conta : Conta = {
  id: 0,
  nomeTitular: '',
  saldoConta: 0,
  numeroConta : ''
  

}

constructor(private contaService: ContaService,
  private router: Router){
    this.contaService
  }

ngOnInit(): void {
    
}
createConta(): void {
  this.contaService.create(this.conta).subscribe(() => {
    this.contaService.showMessage('Conta Criada!')
    this.router.navigate(['/contas'])
  })
}
cancel(): void {
  this.router.navigate(['/contas'])
 }
}
