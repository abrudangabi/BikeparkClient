import {MockBikeparksService} from '../app/modules/bikepark/services/bikeparks.service';
import {MockBikeparkProfileService} from '../app/modules/profile/services/bikepark-profile.service';
import {MockConcursDetailsService} from '../app/modules/concurs/services/concurs-details.service';
import {MockConcursService} from '../app/modules/concurs/services/concurs.service';
import {MockTraseuService} from '../app/modules/profile/services/traseu.service';
import {MockBikeparksForDashboardServicesService} from '../app/modules/dashboard/services/bikeparks-service.service';
import {MockConcursForDashboardServicesService} from '../app/modules/dashboard/services/concurs-service.service';
import {MockLoginService} from '../app/modules/login/services/login.service';
import {MockRegisterService} from '../app/modules/login/services/register.service';


export const environment = {
  production: true,
  titleEnvironment: 'Development BikeparkApp',
  imageTestLink: 'https://images.pexels.com/photos/546232/pexels-photo-546232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Dev is on',
  loginService: MockLoginService,
  registerService: MockRegisterService,
  bikeparkService: MockBikeparksService,
  bikeparkProfileService: MockBikeparkProfileService,
  concursDetailsService: MockConcursDetailsService,
  concursService: MockConcursService,
  traseuService: MockTraseuService,
  bikeparkServiceForDashboardService: MockBikeparksForDashboardServicesService,
  concursServiceForDashboardService: MockConcursForDashboardServicesService,
};
