import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewemp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewemp.component.html',
  styleUrl: './viewemp.component.css'
})
export class ViewempComponent {
  emparr: Employee[] = []
  constructor(private es: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.fetchemps()

  }
  fetchemps() {
    this.es.getallemps().subscribe(data => {
      if (data.length > 0) {
        this.emparr = data
      }
    })
  }
  delemp(id: any) {
    this.es.del(id).subscribe(data => {
      this.fetchemps()
    })
  }
  upemp(id: any) {
    this.router.navigate(['/upemp', id])
  }
}
