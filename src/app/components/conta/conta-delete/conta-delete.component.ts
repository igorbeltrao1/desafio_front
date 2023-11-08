import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContaService } from '../conta.service';
import { Conta } from './../conta-create/conta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-delete',
  templateUrl: './conta-delete.component.html',
  styleUrls: ['./conta-delete.component.css']
})
export class ContaDeleteComponent implements OnInit {
  conta!: Conta;

  id!: number;

  constructor(private contaService: ContaService, 
    private router: Router,
    private route: ActivatedRoute){}



  ngOnInit(): void {
     this.id = Number(this.route.snapshot.params['id'] )
      

      this.contaService.readById(this.id).subscribe(conta => {
        this.conta = conta;
        console.log(conta);
      }, (error) => {
        console.log(error.error.mensagem);
        
        this.contaService.showMessage(error.error.mensagem)
      }
      )
  }
  deleteConta(): void {
  if(this.conta && this.conta.id) { 
      this.contaService.delete(this.conta.id).subscribe(() => {
      this.contaService.showMessage('Conta excluida com sucesso');
      this.router.navigate(["/contas"]);
  });} else{
    this.contaService.showMessage('Ocorreu um erro na exclusão');
    
  }
  }
  cancel(): void {
    this.router.navigate(["/contas"])
  }

}
