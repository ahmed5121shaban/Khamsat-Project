import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DetailTableComponent } from './detail-table.component'

describe('DetailTableComponent', () => {
  let component: DetailTableComponent
  let fixture: ComponentFixture<DetailTableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTableComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DetailTableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
