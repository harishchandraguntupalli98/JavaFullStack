import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { CommentModel } from '../../models/comment';


@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {

  commentArr:WritableSignal<CommentModel[]> = signal([]);

  commentService = inject(CommentService);

  ngOnInit(){
    this.commentService.gerAllComments().subscribe((response: CommentModel[])=>{
      this.commentArr.set(response);
    });
  }

}


