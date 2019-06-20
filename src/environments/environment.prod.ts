import {ServerBikeparksService} from '../app/modules/bikepark/services/bikeparks.service';
import {ServerBikeparkProfileService} from '../app/modules/profile/services/bikepark-profile.service';
import {ServerConcursDetailsService} from '../app/modules/concurs/services/concurs-details.service';
import {ServerConcursService} from '../app/modules/concurs/services/concurs.service';
import {MockTraseuService, ServerTraseuService} from '../app/modules/profile/services/traseu.service';
import {
  MockBikeparksForDashboardServicesService,
  ServerBikeparksForDashboardServicesService
} from '../app/modules/dashboard/services/bikeparks-service.service';
import {ServerConcursForDashboardServicesService} from '../app/modules/dashboard/services/concurs-service.service';
import {ServerLoginService} from '../app/modules/login/services/login.service';
import {ServerRegisterService} from '../app/modules/login/services/register.service';

export const environment = {
  production: true,
  titleEnvironment: 'Prod BikeparkApp',
  imageTestLink: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Prod is on',
  loginService: ServerLoginService,
  registerService: ServerRegisterService,
  bikeparkService: ServerBikeparksService,
  bikeparkProfileService: ServerBikeparkProfileService,
  concursDetailsService: ServerConcursDetailsService,
  concursService: ServerConcursService,
  traseuService: ServerTraseuService,
  bikeparkServiceForDashboardService: ServerBikeparksForDashboardServicesService,
  concursServiceForDashboardService: ServerConcursForDashboardServicesService,
};
