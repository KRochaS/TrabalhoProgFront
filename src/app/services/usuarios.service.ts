import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    url = 'http://localhost:3000/usuarios'; // api rest fake



 // injetando o HttpClient
 constructor(private httpClient: HttpClient) { }

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os usuarios
  getUsers(): Observable<Usuarios[]> {
    return this.httpClient.get<Usuarios[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

   // salva um usuario
   saveUsers(usuario: Usuarios): Observable<Usuarios> {
    return this.httpClient.post<Usuarios>(this.url, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // deleta um usuario
    deleteUsuario(usuario: Usuarios) {
        return this.httpClient.delete<Usuarios>(this.url + '/' + usuario.id, this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.handleError)
          )
      }

   // Manipulação de erros
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
