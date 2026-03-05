import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  apiUrl = 'https://jsonplaceholder.typicode.com/comments'

  httpClient = inject(HttpClient)

  gerAllComments():Observable<CommentModel[]>{

    return this.httpClient.get<CommentModel[]>(this.apiUrl);

  }
  
}


