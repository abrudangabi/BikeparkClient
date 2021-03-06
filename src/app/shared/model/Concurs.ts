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
import {Categorie} from './models';

export interface Concurs {
  dataStart?: Date;

  denumire?: string;

  id?: number;

  minimParticipanti?: number;

  nrParticipanti?: number;

}

export interface JoinBikepark {
  idConcurs?: number;
  idBikepark?: number;
}

export interface JoinCategorii {
  idConcurs?: number;
  categorii?: Categorie[];
}
