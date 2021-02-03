/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Papeleta } from '../models/papeleta';
import { Propietario } from '../models/propietario';

@Injectable({
  providedIn: 'root',
})
export class PropietariosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation propietarioListGet
   */
  static readonly PropietarioListGetPath = '/propietario/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `propietarioListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioListGet$Plain$Response(params?: {
    initial?: string;
  }): Observable<StrictHttpResponse<Array<Propietario>>> {

    const rb = new RequestBuilder(this.rootUrl, PropietariosService.PropietarioListGetPath, 'get');
    if (params) {
      rb.query('initial', params.initial, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Propietario>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `propietarioListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioListGet$Plain(params?: {
    initial?: string;
  }): Observable<Array<Propietario>> {

    return this.propietarioListGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Propietario>>) => r.body as Array<Propietario>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `propietarioListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioListGet$Json$Response(params?: {
    initial?: string;
  }): Observable<StrictHttpResponse<Array<Propietario>>> {

    const rb = new RequestBuilder(this.rootUrl, PropietariosService.PropietarioListGetPath, 'get');
    if (params) {
      rb.query('initial', params.initial, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Propietario>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `propietarioListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioListGet$Json(params?: {
    initial?: string;
  }): Observable<Array<Propietario>> {

    return this.propietarioListGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Propietario>>) => r.body as Array<Propietario>)
    );
  }

  /**
   * Path part for operation propietarioQueryGet
   */
  static readonly PropietarioQueryGetPath = '/propietario/query';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `propietarioQueryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioQueryGet$Plain$Response(params?: {
    dni?: string;
  }): Observable<StrictHttpResponse<Array<Papeleta>>> {

    const rb = new RequestBuilder(this.rootUrl, PropietariosService.PropietarioQueryGetPath, 'get');
    if (params) {
      rb.query('dni', params.dni, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Papeleta>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `propietarioQueryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioQueryGet$Plain(params?: {
    dni?: string;
  }): Observable<Array<Papeleta>> {

    return this.propietarioQueryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Papeleta>>) => r.body as Array<Papeleta>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `propietarioQueryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioQueryGet$Json$Response(params?: {
    dni?: string;
  }): Observable<StrictHttpResponse<Array<Papeleta>>> {

    const rb = new RequestBuilder(this.rootUrl, PropietariosService.PropietarioQueryGetPath, 'get');
    if (params) {
      rb.query('dni', params.dni, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Papeleta>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `propietarioQueryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  propietarioQueryGet$Json(params?: {
    dni?: string;
  }): Observable<Array<Papeleta>> {

    return this.propietarioQueryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Papeleta>>) => r.body as Array<Papeleta>)
    );
  }

}
