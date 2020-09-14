import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Apoiadores } from 'src/app/interfaces/apoiadores';

import config from '../../config';

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
