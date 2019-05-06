import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DashboardService} from '../../utils/service/dashboard.service';
import {Biker} from '../../../../shared/model/Biker';
import {AbstractBikeparksForDashboardServicesService} from '../../services/bikeparks-service.service';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {Company} from '../../../../shared/model/Company';
import {Photo} from '../../../../shared/model/Photo';
import {Contact} from '../../../../shared/model/Contact';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';
import {AbstractConcursForDashboardServicesService} from '../../services/concurs-service.service';

@Component({
  selector: 'app-biker-dashboard',
  templateUrl: './biker-dashboard.component.html',
  styleUrls: ['./biker-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BikerDashboardComponent implements OnInit {
  /*constructor() {
    console.log('Biker Dashboard');
  }*/

  /*public companies: Company[];
  public applicant: Applicant;
  public skillList: Skill[];
  public internshipList: Internship[];
  public skillsAsString: string = '';
  public allInternshipsDTO: InternshipDTO[];
  public allSkills: Skill[];*/
  // public companies: Company[];
  public rezervariBikepark: RezervareBikePark[];
  public rezervariConcurs: RezervareConcurs[];
  public biker: Biker;
  public pieChartData;
  public chartData;
  photo1: Photo = {id: 1, url: 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg'};
  photo2: Photo = {id: 2, url: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'};

  contact1: Contact = {id: 1, phoneNumber: '124124', photo: this.photo1};
  contact2: Contact = {id: 2, phoneNumber: '4234235', photo: this.photo2};

  constructor(private dashboardService: DashboardService,
              private bikeparkService: AbstractBikeparksForDashboardServicesService,
              private concursService: AbstractConcursForDashboardServicesService) {

    this.dashboardService.initialize();
    this.biker = bikeparkService.getBiker();
    this.bikeparkService.getRezervari().subscribe((rez) => {
      this.rezervariBikepark = rez;
      // this.rezervariBikepark.push(rez);
      /*for (let i = 0; i < rez.length; i++) {
        this.rezervariBikepark.push(rez[i].rezervareBikepark);
      }*/
    }, (error) => {
    });
    this.concursService.getRezervari().subscribe((rez) => {
      this.rezervariConcurs = rez;
    });
    /*this.companies = [
      {
        id: 1,
        name: 'La Fortech',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
          ' labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
          ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu' +
          ' cursus euismod. In nibh mauris cursus mattis molestie a.',
        dimension: 1,
        views: 1,
        contact: this.contact1
      },
      {
        id: 2,
        name: 'La Arobs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
          ' labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
          ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu' +
          ' cursus euismod. In nibh mauris cursus mattis molestie a.',
        dimension: 5,
        views: 10,
        contact: this.contact2
      }
    ];*/
    // console.log('Biker dash lista rezervari ' + this.rezervariBikepark.length);
    /*this.dashboardService.getFirst3Companies().subscribe((companies) => {
      this.companies = companies;
    }, (error) => {
    });

    this.dashboardService.getApplicant().subscribe((applicant) => {
      this.applicant = applicant;
    }, (error) => {
    });
    this.dashboardService.getApplicantSkills().subscribe((skills) => {
      this.skillList = skills;
      this.skillList.forEach((skill: Skill) => {
        this.skillsAsString += ' #' + skill.name;
      });
      this.dashboardService.getInternshipBySkills(this.skillList).subscribe((internships) => {
        this.internshipList = internships;
      }, () => {
      });
    }, () => {
    });
    this.dashboardService.getAllSkills().subscribe((skills) => {
      this.allSkills = skills;
      this.dashboardService.getAllInternships().subscribe((internships) => {
        this.allInternshipsDTO = internships;
        this.pieChartData = this.getDataForPieChart(this.allSkills, this.allInternshipsDTO);
        this.chartData =this.getDataForChart(this.allInternshipsDTO);
      }, () => {
      });

    }, () => {
    });*/
  }


  ngOnInit() {

  }

  /*getDataForPieChart(skills: Skill[], internships: InternshipDTO[]) {
    let dataToReturn = [];
    skills.forEach((skill: Skill) => {
      if (skill.name !== 'Communicative' && skill.name !== 'Positive Attitude' && skill.name !== 'Flexibility' && skill.name !== 'Elm')
        dataToReturn.push([skill.name, 0]);
    });
    internships.forEach((internships: InternshipDTO) => {
      let skills = internships.skills;
      dataToReturn.forEach((item: [string, number]) => {
        skills.forEach((skill: Skill) => {
          if (item[0] == skill.name) {
            item[1]++;
          }
        });
      });
    });
    var index = 0;
    while (index < dataToReturn.length) {
      if (dataToReturn[index][1] == 0) {
        dataToReturn.splice(index, 1);
      }
      else {
        index++;
      }
    }
    return dataToReturn;
  }*/

  /*getDataForChart(internships: InternshipDTO[]) {
    let object = {};
    internships.forEach((internship: InternshipDTO) => {
      if (Object.keys(object).indexOf(internship.company.name) == -1) {
        object[internship.company.name] = 1;
      }
      else {
        object[internship.company.name]++;
      }
    });
    let nameCompanies =['x'];
    let internshipPerCompanies =['pv'];
    for(var property in object){
      nameCompanies.push(property);
      internshipPerCompanies.push(object[property]);
    }
    let result = [
      nameCompanies,
      internshipPerCompanies
    ];
    return result;
  }*/

}
