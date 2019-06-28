
import {BikePark, Biker, RezervareBikePark} from './models';

export interface BikeparkReservationRequest {
  id?: number;
  bikePark?: BikePark;
  numeBikepark?: string;
  rezervareBikepark?: RezervareBikePark;
}
