import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {

  ngOnInit(){
    this.subject_demo();
    this.behaviourSubjectDemo();
    this.replaySubjectDemo();
    this.ayncSubjectDemo();
  }

  subject_demo(){
    let carSubject = new Subject();//publisher

    carSubject.next('tata');
    carSubject.subscribe((val)=>{
      console.log('subscriber1',val);
    });
    carSubject.next('honda')
    carSubject.subscribe((val)=>{
      console.log('subscriber2',val);
    });
    carSubject.next('maruti')
  }
  behaviourSubjectDemo(){
    let carSubject = new BehaviorSubject('');//publisher

    carSubject.next('tata');
    carSubject.subscribe((val)=>{
      console.log('subscriber1',val);
    });
    carSubject.next('honda')
    carSubject.subscribe((val)=>{
      console.log('subscriber2',val);
    });
    carSubject.next('maruti')

  }
  replaySubjectDemo(){
    let carSubject = new ReplaySubject();//publisher

    carSubject.next('tata');
    carSubject.subscribe((val)=>{
      console.log('subscriber1',val);
    });
    carSubject.next('honda')
    carSubject.subscribe((val)=>{
      console.log('subscriber2',val);
    });
    carSubject.next('maruti')

  }
  ayncSubjectDemo(){
    let carSubject = new AsyncSubject();//publisher

    carSubject.next('tata');
    carSubject.subscribe((val)=>{
      console.log('subscriber1',val);
    });
    carSubject.next('honda')
    carSubject.subscribe((val)=>{
      console.log('subscriber2',val);
    });
    carSubject.next('maruti')
    carSubject.complete();

  }
}
