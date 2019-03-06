import {MockBikeparksService} from '../app/modules/bikepark/services/bikeparks.service';
import {MockBikeparkProfileService} from '../app/modules/profile/services/bikepark-profile.service';


export const environment = {
  production: true,
  titleEnvironment: 'Development BikeparkApp',
  imageTestLink: 'https://images.pexels.com/photos/546232/pexels-photo-546232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Dev is on',
  bikeparkService: MockBikeparksService,
  bikeparkProfileService: MockBikeparkProfileService,
};
