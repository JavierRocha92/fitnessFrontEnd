import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { RegisterUserFormComponent } from './register-user-form.component';
import { WebserviceService } from '../../services/webservice.service';
import { TokenService } from '../../services/token.service';
import { UsersService } from '../../services/users.service';

describe('RegisterUserFormComponent', () => {
  let component: RegisterUserFormComponent;
  let fixture: ComponentFixture<RegisterUserFormComponent>;
  let webServiceSpy: jasmine.SpyObj<WebserviceService>;
  let tokenServiceSpy: jasmine.SpyObj<TokenService>;
  let userServiceSpy: jasmine.SpyObj<UsersService>;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    const webServiceMock = jasmine.createSpyObj('WebserviceService', ['post']);
    const tokenServiceMock = jasmine.createSpyObj('TokenService', [
      'saveToken',
    ]);
    const userServiceMock = jasmine.createSpyObj('UsersService', [
      'setUser',
      'logOut',
    ]);
    const toastrServiceMock = jasmine.createSpyObj('ToastrService', [
      'success',
      'info',
    ]);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RegisterUserFormComponent],
      providers: [
        FormBuilder,
        { provide: WebserviceService, useValue: webServiceMock },
        { provide: TokenService, useValue: tokenServiceMock },
        { provide: UsersService, useValue: userServiceMock },
        { provide: ToastrService, useValue: toastrServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterUserFormComponent);
    component = fixture.componentInstance;

    webServiceSpy = TestBed.inject(
      WebserviceService
    ) as jasmine.SpyObj<WebserviceService>;
    tokenServiceSpy = TestBed.inject(
      TokenService
    ) as jasmine.SpyObj<TokenService>;
    userServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
    toastrServiceSpy = TestBed.inject(
      ToastrService
    ) as jasmine.SpyObj<ToastrService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error messages when the form email is invalid', () => {
    const email_input = fixture.nativeElement.querySelector('#email');
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );

   
    email_input.value = '';
    email_input.dispatchEvent(new Event('input'));
    email_input.dispatchEvent(new Event('blur'));

    
    fixture.detectChanges();

    const errorMessages =
      fixture.nativeElement.querySelectorAll('.error__email');
    expect(errorMessages[0].textContent.trim()).toContain('Email is required');

   
    email_input.value = 'ab';
    email_input.dispatchEvent(new Event('input'));
    email_input.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    expect(errorMessages.length).toBe(1);
    expect(errorMessages[0].textContent).toContain('Email must be valid email');
  });

  it('should display error messages when the pass form is invalid', () => {
    const pass_input = fixture.nativeElement.querySelector('#pass');
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );

    pass_input.value = '1111111';
    pass_input.dispatchEvent(new Event('input'));
    pass_input.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    const errorMessages =
      fixture.nativeElement.querySelectorAll('.error__pass');
    expect(errorMessages.length).toBe(1);
    expect(errorMessages[0].textContent.trim()).toContain(
      'The pass must between 8-16'
    );

    pass_input.value = '11111111!Q';
    pass_input.dispatchEvent(new Event('input'));
    pass_input.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    expect(errorMessages.length).toBe(1);
    expect(errorMessages[0].textContent).toContain('The pass is not secure');
  });

 /*  it('should display error messages when the passform does not match', () => {
    const pass_input = fixture.nativeElement.querySelector('#pass');
    const rep_pass_input = fixture.nativeElement.querySelector('#rep_pass');
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    console.log('button')
    console.log(submitButton)

    pass_input.value = '11111111!Qq';

    rep_pass_input.value = '11111111!Qq2'

    pass_input.dispatchEvent(new Event('input'));
    rep_pass_input.dispatchEvent(new Event('input'));

    submitButton.click();

    const errorMessages = fixture.nativeElement.querySelectorAll('.error__pass');
    console.log('estos son los mensajes de error')
    console.log(errorMessages[0].textContent)
    expect(errorMessages.length).toBe(1);
    expect(errorMessages[0].textContent.trim()).toContain('Two pass must be equals');

  }); */

  it('should send data to the server and handle successful response', waitForAsync(() => {
    const formData = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      pass: 'Password1!',
      rep_pass: 'Password1!'
    };

    const responseMock = {
      success: true,
      token: 'mock-token',
      user: {},
      virtual_users: [],
      avg_data: {}
    };

    webServiceSpy.post.and.callFake((route, data, successCallback, errorCallback) => {
      successCallback!(responseMock);
    });

    component.form.setValue(formData);
    component.checkForm();

    fixture.whenStable().then(() => {
      expect(webServiceSpy.post).toHaveBeenCalledWith('register/', jasmine.any(Object), jasmine.any(Function), jasmine.any(Function));
      expect(tokenServiceSpy.saveToken).toHaveBeenCalledWith(responseMock.token);
      expect(userServiceSpy.setUser).toHaveBeenCalledWith(responseMock.user as any, responseMock.virtual_users, responseMock.avg_data);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/user-avatar']);
      expect(toastrServiceSpy.success).toHaveBeenCalledWith('User registered successfully');
      expect(component.isLoading).toBeFalse();
    });
  }));

  it('should handle server error when user already exists', waitForAsync(() => {
    const formData = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'javierhh@gmail.com',
      pass: 'Password1!',
      rep_pass: 'Password1!'
    };

    const responseMock = {
      success: false,
      code: 6000,
      message: 'User already exists'
    };

    webServiceSpy.post.and.callFake((route, data, successCallback, errorCallback) => {
      successCallback!(responseMock);
    });

    component.form.setValue(formData);
    component.checkForm();

    fixture.whenStable().then(() => {
      expect(webServiceSpy.post).toHaveBeenCalledWith('register/', jasmine.any(Object), jasmine.any(Function), jasmine.any(Function));
      expect(toastrServiceSpy.info).toHaveBeenCalledWith('User unregistered, email already exists');
      expect(component.error_register).toBeTrue();
      expect(component.isLoading).toBeFalse();
    });
  }));


  
  
});
