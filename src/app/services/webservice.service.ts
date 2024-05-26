import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root',
})
export class WebserviceService {
  server_url = 'http://127.0.0.1:5000/';
  public_routes = ['login/', 'resgister/']
  constructor(private http : HttpClient, private token_service : TokenService) {}

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
    let req_headers = {}
      const token = this.token_service.getToken()
      console.log('este es el token')
      console.log(token)
      req_headers = new HttpHeaders({
        Authorization: (token) ? token :  'esto es un token',
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
    this.http.post<any>(url_request, params, {headers : req_headers}).subscribe(
      (response) => {
        console.log('hay respuesta')
        console.log('response')
        console.log(response)
        callBack(response)
      },
      (error) => {
        console.log('hay error')
        callError(error)
      }
    )
  }

  delete(
    route: string,
    ids: (string | null | undefined) [],
    callBack: Function = (response: any) => {
      console.log(response);
    },
    callError: Function = (error: any) => console.log(error)
  ) {
  
    /* Construimos la url de la peticion */
    let url_request = this.server_url + route + `/${ids[0]}/${ids[1]}`;

    /* Contruimos los encabezados de la peticion HTTP si precisamos de autorizacion para la peticion*/
    let headers = {}
    if(this.isTokenRequired(route)){
      const token = this.token_service.getToken()
      
      headers = new HttpHeaders({
        'Authorization': token ? `Bearer ${token}` : '',
      });
    }

    
    
    
    /* Realizamos la peticion delete */
    this.http.delete<any>(url_request, { headers: headers}).subscribe(
      (response) => {
        callBack(response)
      },
      (error) => {
        callError(error)
      }
    )
  }
  get(
    route: string,
    params : string [],
    callBack: Function = (response: any) => {
      console.log(response);
    },
    callError: Function = (error: any) => console.log(error)
  ) {
  
    /* Construimos la url de la peticion */
    const url_params = params.join('/')
    let url_request = this.server_url + route + `${params}/`;

    console.log('esta es la url que se ha formado')
    console.log(url_request)

    /* Contruimos los encabezados de la peticion HTTP si precisamos de autorizacion para la peticion*/
    let headers = {}
    if(this.isTokenRequired(route)){
      console.log('el token es requerido')
      const token = this.token_service.getToken()
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'este es un token de prueba'
      });
    }
    // 'Authorization': token ? `Bearer ${token}` : 'este es un token de prueba',

    console.log('esto son los headers de la peticion')
    console.log(headers)

    
    
    
    /* Realizamos la peticion delete */
    this.http.get<any>(url_request, { headers: headers}).subscribe(
      (response) => {
        console.log('la respuesta ha sido exitosa')
        console.log(response)
        callBack(response)
      },
      (error) => {
        callError(error)
      }
    )
  }


  isTokenRequired(route : string) : boolean{
    return !this.public_routes.includes(route)
  }
}
