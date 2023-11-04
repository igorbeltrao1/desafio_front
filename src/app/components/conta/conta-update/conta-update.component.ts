import { Conta } from './../conta-create/conta.model';
import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conta-update',
  templateUrl: './conta-update.component.html',
  styleUrls: ['./conta-update.component.css']
})
export class ContaUpdateComponent implements OnInit {
  conta!: Conta

  constructor(
    private contaService : ContaService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    const idNumber = parseInt(id, 10);

    this.contaService.readById(idNumber).subscribe(conta => {
      this.conta = conta;
    })
      
  }
updateConta(): void {
  this.contaService.update(this.conta).subscribe(() => {
    this.contaService.showMessage('Conta atualizada com sucesso!')
    this.router.navigate(['/contas'])
  })
}
cancel(): void{
  this.router.navigate(['/contas'])
}
}
