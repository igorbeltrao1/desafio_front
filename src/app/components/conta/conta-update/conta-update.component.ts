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
  id!: number; 

  constructor(
    private contaService : ContaService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
   this.id = Number(this.route.snapshot.params['id'] )

    this.contaService.readById(this.id).subscribe(conta => {
      this.conta = conta;
    },
    (error) => {
      console.log(error.error.mensagem);
      
      this.contaService.showMessage(error.error.mensagem)
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
