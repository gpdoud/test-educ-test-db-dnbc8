import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Major } from './major.class';

const url = "http://localhost:5000/api/majors";

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  getAll(): Observable<Major[]> {
    return this.http.get(`${url}`) as Observable<Major[]>;
  }
  get(id: number): Observable<Major> {
    return this.http.get(`${url}/${id}`) as Observable<Major>;
  }
  create(major: Major): Observable<any> {
    return this.http.post(`${url}`, major) as Observable<any>;
  }
  change(major: Major): Observable<any> {
    return this.http.put(`${url}/${major.id}`, major) as Observable<any>;
  }
  remove(major: Major): Observable<any> {
    return this.http.post(`${url}/${major.id}`, null) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
