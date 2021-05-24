import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetComponent } from './timesheet.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

describe('TimesheetComponent', () => {
  let component: TimesheetComponent;
  let fixture: ComponentFixture<TimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetComponent ],
      imports: [
        TabViewModule,
        TableModule,
        DialogModule,
        ButtonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
