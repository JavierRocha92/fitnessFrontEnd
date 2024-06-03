import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from './users.service';
type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'UPDATE';

@Injectable({
  providedIn: 'root',
})
export class WebserviceService {
  server_url = 'http://127.0.0.1:5000/';
  public_routes = ['login/', 'resgister/'];
  constructor(
    private http: HttpClient,
    private token_service: TokenService,
    private toast_service: ToastrService,
    private user_service: UsersService
  ) {}

  post(
    route: string,
    params: Object,
    callBack: Function = (response: any) => {
      console.log(response);
    },
    callError: Function = (error: any) => console.log(error)
  ) {
    /* Construimos la url de la peticion */
    let url_request = this.server_url + route;

    /* Contruimos los encabezamos de la peticion HTTP si precisamos de autirozacion para la peticion*/
    let req_headers = {};
    const token = this.token_service.getToken();
    req_headers = new HttpHeaders({
      Authorization: token ? token : 'esto es un token',
    });
    // 'Authorization': `Bearer ${token}`,
    // if(this.isTokenRequired(route)){
    //   const token = this.token_service.getToken()
    //   console.log('este es el token')
    //   console.log(token)
    //   headers = new HttpHeaders({
    //     'Authorization': token ? `Bearer ${token}` : '',
    //     // 'Authorization': `Bearer ${token}`,
    //   });
    // }

    /* Realizamos la peticion post */
    this.http
      .post<any>(url_request, params, { headers: req_headers })
      .subscribe(
        (response) => {
          if (response.code == 1000) {
            this.toast_service.error('Maintenance applicattion')
            this.user_service.logOut()
          }
          callBack(response);
        },
        (error) => {
          console.log('hay error');
          this.toast_service.error('Maintenance applicattion')
          this.user_service.logOut()
          callError(error);
        }
      );
  }

  delete(
    route: string,
    ids: (string | null | undefined)[],
    callBack: Function = (response: any) => {
      console.log(response);
    },
    callError: Function = (error: any) => console.log(error)
  ) {
    /* Construimos la url de la peticion */
    let url_request = this.server_url + route + `/${ids[0]}/${ids[1]}`;

    /* Contruimos los encabezados de la peticion HTTP si precisamos de autorizacion para la peticion*/
    let headers = {};
    if (this.isTokenRequired(route)) {
      const token = this.token_service.getToken();

      headers = new HttpHeaders({
        Authorization: token ? `Bearer ${token}` : '',
      });
    }

    /* Realizamos la peticion delete */
    this.http.delete<any>(url_request, { headers: headers }).subscribe(
      (response) => {
        callBack(response);
      },
      (error) => {
        this.toast_service.error('Maintenance applicattion')
          this.user_service.logOut()
        callError(error);
      }
    );
  }
  get(
    route: string,
    params: string[],
    callBack: Function = (response: any) => {
      console.log(response);
    },
    callError: Function = (error: any) => console.log(error)
  ) {
    /* Construimos la url de la peticion */
    const url_params = params.join('/');
    let url_request = this.server_url + route + `/${url_params}`;

    

    /* Contruimos los encabezados de la peticion HTTP si precisamos de autorizacion para la peticion*/
    let headers = {};
    if (this.isTokenRequired(route)) {
      const token = this.token_service.getToken();
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'este es un token de prueba',
      });
    }
    
    /* Realizamos la peticion delete */
    this.http.get<any>(url_request, { headers: headers }).subscribe(
      (response) => {
        
        callBack(response);
      },
      (error) => {
        this.toast_service.error('Maintenance applicattion')
          this.user_service.logOut()
        callError(error);
      }
    );
  }

  isTokenRequired(route: string): boolean {
    return !this.public_routes.includes(route);
  }
}
