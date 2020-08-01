import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class StudentsServiceService {

  URL = "http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  //Create a Student Service
  createStudent(newStudent) {
    let params = JSON.stringify(newStudent);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.post(this.URL, params, options).pipe(map((res) => res));
  }

  //Update a Student Service
  updateStudent(studentID, updatedStudent) {
    let params = JSON.stringify(updatedStudent);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.put(this.URL + studentID, params, options).pipe(map((res) => res));
  }

  //Obtain a Student Service
  obtainStudents() {
    return this._http.get(this.URL).pipe(map((res) => res));
  }

  obtainStudentByID(studentID) {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.get(this.URL + 'getStudent/' + studentID, options).pipe(map((res) => res));
  }


  //Eliminate a Student Service
  deleteStudent(studentID) {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this._http.delete(this.URL + studentID, options).pipe(map((res) => res));
  }
}


