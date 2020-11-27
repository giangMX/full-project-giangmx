import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'userName'];
  dataSource = ELEMENT_DATA;
}
export interface UserElement {
  firstName: string;
  lastName: string;
  age: number;
  userName: string;
}

const ELEMENT_DATA: UserElement[] = [
  {firstName: 'Nguyễn Văn', lastName: 'A', age: 25, userName: 'nguyenva'},
  {firstName: 'Nguyễn Văn', lastName: 'B', age: 24, userName: 'nguyenvb'},
  {firstName: 'Nguyễn Văn', lastName: 'C', age: 23, userName: 'nguyenvx'},
  {firstName: 'Nguyễn Văn', lastName: 'D', age: 24, userName: 'nguyenvad'},
  {firstName: 'Nguyễn Văn', lastName: 'E', age: 26, userName: 'nguyenvaf'},
  {firstName: 'Nguyễn Văn', lastName: 'F', age: 28, userName: 'nguyenvae'}
];
