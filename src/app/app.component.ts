import { Component, OnInit } from '@angular/core';
import { MajorService } from './major/major.service';
import { StudentService } from './student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private major: MajorService,
    private student: StudentService
  ) {}

  ngOnInit(): void {
    this.major.getAll().subscribe(res => console.log("Majors:", res));
    this.student.getAll().subscribe(res => console.log("Students:", res));
  }
}
