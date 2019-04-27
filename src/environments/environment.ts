import {MockBikeparksService} from '../app/modules/bikepark/services/bikeparks.service';
import {MockBikeparkProfileService} from '../app/modules/profile/services/bikepark-profile.service';
import {MockConcursDetailsService} from '../app/modules/concurs/services/concurs-details.service';
import {MockConcursService} from '../app/modules/concurs/services/concurs.service';
import {MockTraseuService} from '../app/modules/profile/services/traseu.service';

export const environment = {
  production: false,
  titleEnvironment: 'BikeparkApp',
  imageTestLink: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Hello',
  bikeparkService: MockBikeparksService,
  bikeparkProfileService: MockBikeparkProfileService,
  concursDetailsService: MockConcursDetailsService,
  concursService: MockConcursService,
  traseuService: MockTraseuService,
};
