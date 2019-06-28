
import {Biker, Concurs, RezervareConcurs} from './models';

export interface ConcursReservationRequest {
  id?: number;
  concurs?: Concurs;
  rezervareConcurs?: RezervareConcurs;
}
