import { AGENT_MENU_ITEMS } from '@/assets/data'
import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { filter } from 'rxjs'

@Component({
  selector: 'agent-navbar',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule],
  template: `
    <div class="offcanvas-body p-3 p-xl-0">
      <div class="navbar navbar-expand-xl">
        <ul class="navbar-nav navbar-offcanvas-menu">
          @for (item of agentMenuItems; track $index) {
            <li class="nav-item">
              <a
                class="nav-link"
                [class.active]="
                  currentPath == item.url ||
                  ($index === 0 && currentPath === null)
                "
                [routerLink]="item.url"
                ><i class="{{ item.icon }} fa-fw me-1 font-size"></i>{{ item.label }}</a
              >
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: `
  @media(max-width:1400px){
    .font-size{
      font-size:14px;
    }
  }
  @media(min-width:1200px){
    .font-size{
      font-size:14px;
    }
  }`,
})
export class NavbarComponent implements OnInit {
  agentMenuItems = AGENT_MENU_ITEMS
  currentPath = window.location.pathname

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects
      })
  }
}
