import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Conta } from './conta-create/conta.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  baseUrl = "http://localhost:8080/contas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError : boolean = false){
    this.snackBar.open(msg, 'X', {
     duration: 3000,
     horizontalPosition: "right",
     verticalPosition: "top",
     panelClass: isError ? 'msg-error' : 'msg-success'
    }); 
}
create(conta: Conta): Observable<Conta>{
  return this.http.post<Conta>(this.baseUrl, conta).pipe(map((obj) => obj), 
  catchError(e => this.errorHandler(e)));

}
errorHandler(e: any): Observable<any>{
  this.showMessage('Ocorreu um erro!', true)
  return EMPTY
}
read(): Observable<Conta[]>{

  return this.http.get<Conta[]>(this.baseUrl);
}

readById(id: number): Observable<Conta>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Conta>(url);
}

delete(id: number): Observable<Conta>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Conta>(url);
}
}
