import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavButtonComponent } from '../nav-button/nav-button.component';

import { SelectButtonComponent } from './select-button.component';

describe('SquareButtonComponent', () => {
  let component: SelectButtonComponent;
  let fixture: ComponentFixture<SelectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // adauga teste pentru inputuri
  // test pentru output, cand se da clikc pe button sa face ceva output

  it('renders button type', () => {
    component.value = 'Register';
    fixture.detectChanges();
    const compliled = fixture.debugElement.nativeElement;
    expect(compliled.querySelector('span').textContent).toBe(' Register');
    expect(compliled.querySelector('button').className).toBe('');
  });

  it('renders if buttons is selected', () => {
    component.selected = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').className).toBe('selected');
  });

  it('should correctly @Output value of select input in component', () => {
    component.value = 'Register';
    fixture.detectChanges();
    spyOn(component.selectValueEvent, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.selectValueEvent.emit).toHaveBeenCalledWith('Register');
  });
});
