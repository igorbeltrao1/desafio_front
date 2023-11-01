import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-crud',
  templateUrl: './conta-crud.component.html',
  styleUrls: ['./conta-crud.component.css']
})
export class ContaCrudComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(): void {
      
  }
  navigateToContaCreate(): void {
    this.router.navigate(['/contas/create'])
  }
  navigateToContaRead(): void {
    this.router.navigate(['/contas/read'])
  }
  navigateToContaUpdate(): void {
    this.router.navigate(['/contas/update'])
  }
  navigateToContaDelete(): void {
    this.router.navigate(['/contas/delete/:id'])
  }

}
