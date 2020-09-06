import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { retry, catchError } from 'rxjs/operators';
import { Apoiadores } from '../models/apoiadores';
import config from '../config';

const URL_APOIADORES = `${config.URL_BACKEND}/apoiadores`;

@Injectable({
	providedIn: 'root'
})
export class ApoiadoresService {

	
	// injetando o HttpClient
	constructor(private httpClient: HttpClient) { }

	// Headers
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	}

	  // Obtem todos os apoiadores
	  getApoiadores(): Observable<Apoiadores[]> {
		return this.httpClient.get<Apoiadores[]>(URL_APOIADORES)
		  .pipe(
			retry(2),
			catchError(this.handleError))
	  }
	
	   // salva um usuario
	   saveApoiadores(apoiadores: Apoiadores): Observable<Apoiadores> {
		return this.httpClient.post<Apoiadores>(URL_APOIADORES, JSON.stringify(apoiadores), this.httpOptions)
		  .pipe(
			retry(2),
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
