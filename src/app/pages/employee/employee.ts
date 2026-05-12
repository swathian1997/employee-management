import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee {

  employees = [
    {
      id: 1,
      name: 'Swathi',
      email: 'swathi@gmail.com',
      department: 'Frontend'
    },
    {
      id: 2,
      name: 'Rahul',
      email: 'rahul@gmail.com',
      department: 'Backend'
    },
    {
      id: 3,
      name: 'Priya',
      email: 'priya@gmail.com',
      department: 'HR'
    }
  ];

}