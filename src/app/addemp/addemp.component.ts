import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
  emp: Employee = new Employee()
  constructor(private es: EmployeeService) { }
  submitdata() {
    this.es.addemp(this.emp).subscribe(data => {
      if (data != null)
        alert("Employee added successfully")
    })
  }

}