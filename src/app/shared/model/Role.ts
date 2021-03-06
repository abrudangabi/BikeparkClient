/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Role {
  roleId?: number;

  roleString?: Role.RoleStringEnum;

}

export namespace Role {
  export enum RoleStringEnum {
    ADMIN = <any> 'ADMIN',
    BIKER = <any> 'BIKER',
    BIKEPARK = <any> 'BIKEPARK',
    APPLICANT = <any> 'APPLICANT',
    COMPANY = <any> 'COMPANY'
  }
}
