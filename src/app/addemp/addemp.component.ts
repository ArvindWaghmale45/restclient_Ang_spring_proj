import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
  emp: Employee = new Employee();
  constructor(private es: EmployeeService) { }
  submitdata() {
    this.es.addemp(this.emp).subscribe(data => {
      if (data != null)
        alert("Employee Added Successfully")
    }
}
}
