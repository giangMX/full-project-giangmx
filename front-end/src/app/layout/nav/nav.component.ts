import { Component, OnInit } from '@angular/core';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { ThemeService } from 'app/core/service/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;

  navItems = [
    //{ link: '/dashboard', title: 'Home' },
    { link: '/about', title: 'Quản lý User' },
    { link: '/contact', title: 'Quản lý Account' },
    { link: '/user', title: 'Quản lý User' }
  ];

  ngOnInit() {}
}
