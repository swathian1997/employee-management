import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee {

  selectedEmployee: any = null;
  searchText: string = '';
  displayedColumns: string[] = ['id', 'name', 'email', 'department', 'action'];
  newEmployee = {
    id: 0,
    name: '',
    email: '',
    department: ''
  };

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

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(
      emp => emp.id !== id
    );
  }

  addEmployee() {
    this.employees = [...this.employees, 
      { ...this.newEmployee }
    ];
    this.newEmployee = {
      id: 0,
      name: '',
      email: '',
      department: ''
    };
  }

  editEmployee(emp: any) {
    this.selectedEmployee = { ...emp };
  }

  updatedEmployee() {
    const index = this.employees.findIndex(
      e => e.id === this.selectedEmployee.id
    );
    if (index !== -1) {
      this.employees[index] = this.selectedEmployee;
      this.employees = [...this.employees];
    }
    this.selectedEmployee = null;
  }

  updateEmployee() {

  const index = this.employees.findIndex(
    e => e.id === this.selectedEmployee.id
  );

  if (index !== -1) {

    this.employees[index] = {
      ...this.selectedEmployee
    };

    this.employees = [
      ...this.employees
    ];

  }

  this.selectedEmployee = null;

}

get filteredEmployees() {
  return this.employees.filter(
    emp => emp.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
}