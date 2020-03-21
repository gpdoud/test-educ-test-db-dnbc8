import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.class';

const url = "http://localhost:5000/api/students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getAll(): Observable<Student[]> {
    return this.http.get(`${url}`) as Observable<Student[]>;
  }
  get(id: number): Observable<Student> {
    return this.http.get(`${url}/${id}`) as Observable<Student>;
  }
  create(student: Student): Observable<any> {
    return this.http.post(`${url}`, student) as Observable<any>;
  }
  change(student: Student): Observable<any> {
    return this.http.put(`${url}/${student.id}`, student) as Observable<any>;
  }
  remove(student: Student): Observable<any> {
    return this.http.post(`${url}/${student.id}`, null) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
