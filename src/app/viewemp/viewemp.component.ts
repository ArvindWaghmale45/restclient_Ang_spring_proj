import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-viewemp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewemp.component.html',
  styleUrl: './viewemp.component.css'
})
export class ViewempComponent {
  emparr: Employee[] = []
  constructor(private es: EmployeeService) {

  }
  fetchemps() {
    this.es.getallemps().subscribe(data => {
      this.emparr = data
    })
  }
  ngOnInit(): void {
    this.fetchemps()
  }

}