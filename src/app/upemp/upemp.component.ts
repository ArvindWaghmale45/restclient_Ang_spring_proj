import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-upemp',
  imports: [FormsModule],
  templateUrl: './upemp.component.html',
  styleUrl: './upemp.component.css'
})
export class UpempComponent {
  eid = 0
  emp: Employee = new Employee()
  constructor(private route: ActivatedRoute, private es: EmployeeService, private router: Router) {
    this.eid = route.snapshot.params['id']
    this.searchemp()
  }

  searchemp() {
    this.es.search(this.eid).subscribe(data => {
      if (data != null)
        this.emp = data
    })
  }
  submitdata() {
    this.es.update(this.emp.id, this.emp).subscribe(data => {
      if (data != null)
        alert("Employee Updated Successfully")
      this.router.navigate(['/viewemp'])
    })
  }
}
