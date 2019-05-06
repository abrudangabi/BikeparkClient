
import {Biker, RezervareConcurs} from './models';

export interface ConcursReservationRequest {
  id?: number;
  biker?: Biker;
  rezervareConcurs?: RezervareConcurs;
}
