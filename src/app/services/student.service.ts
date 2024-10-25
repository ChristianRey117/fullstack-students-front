import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/IStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private readonly _http: HttpClient) {}

  getAllStudents(): Observable<Array<IStudent>> {
    const url = 'http://localhost:8080/student/getAll';
    return this._http.get<Array<IStudent>>(url);
  }

  saveStudent(student: any): Observable<any> {
    const url = 'http://localhost:8080/student/add';
    return this._http.post<any>(url, student);
  }
}
