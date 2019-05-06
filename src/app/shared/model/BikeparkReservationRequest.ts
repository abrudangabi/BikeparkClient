
import {Biker, RezervareBikePark} from './models';

export interface BikeparkReservationRequest {
  id?: number;
  biker?: Biker;
  rezervareBikepark?: RezervareBikePark;
}
