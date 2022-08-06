import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSettingsDialogComponent } from './element-settings-dialog.component';

describe('ElementSettingsDialogComponent', () => {
  let component: ElementSettingsDialogComponent;
  let fixture: ComponentFixture<ElementSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
