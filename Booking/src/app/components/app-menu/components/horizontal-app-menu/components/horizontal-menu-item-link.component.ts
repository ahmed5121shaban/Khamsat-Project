import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import type { MenuItemType } from 'src/app/core/models'

@Component({
  selector: 'horizontal-menu-item-link',
  standalone: true,
  imports: [RouterModule],
  styles: `
    :host(horizontal-menu-item-link) {
      display: contents;
    }
    a:hover{
      border-bottom:3px solid;
      padding-bottom:3px;
    }
  `,
  template: `
    <a
      [routerLink]="item.url ?? ''"
      [target]="item.target ?? '_self'"
      class="{{ linkClassName }}"
      style="margin-right: 20px !important;">
      {{ item.label }}
    </a>
  `,
})
export class MenuItemLinkComponent {
  @Input() item!: MenuItemType
  @Input() linkClassName!: string
}
