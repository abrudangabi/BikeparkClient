import {ServerBikeparksService} from '../app/modules/bikepark/services/bikeparks.service';
import {ServerBikeparkProfileService} from '../app/modules/profile/services/bikepark-profile.service';

export const environment = {
  production: true,
  titleEnvironment: 'Prod BikeparkApp',
  imageTestLink: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Prod is on',
  bikeparkService: ServerBikeparksService,
  bikeparkProfileService: ServerBikeparkProfileService,
};
