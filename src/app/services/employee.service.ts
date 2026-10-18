import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  serverUrl: string = "http://localhost:9000/employee";
  constructor(private http: HttpClient) { }

  getallemps(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.serverUrl);
  }
  addemp(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.serverUrl, emp);
  }
  del(id: any): Observable<any> {
    return this.http.delete(this.serverUrl + "/" + id);
  }
  update(id: any, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.serverUrl + "/" + id, emp)
  }
  search(id: any): Observable<Employee> {
    return this.http.get<Employee>(this.serverUrl + "/" + id)
  }
}

