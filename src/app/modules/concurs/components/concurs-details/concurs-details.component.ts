import {Component, Input, OnInit} from '@angular/core';
import {Concurs} from '../../../../shared/model/Concurs';
import {Photo} from '../../../../shared/model/Photo';
import {Categorie} from '../../../../shared/model/Categorie';
import {MatDialog} from '@angular/material';
import {AbstractConcursDetailsService} from '../../services/concurs-details.service';
import {ConcursEditComponent} from '../concurs-edit/concurs-edit.component';
import {RezervareConcursAddComponent} from '../rezervare-concurs-add/rezervare-concurs-add.component';
import {CategorieAddComponent} from '../categorie-add/categorie-add.component';
import {RezervareBikePark} from '../../../../shared/model/RezervareBikePark';
import {RezervareConcurs} from '../../../../shared/model/RezervareConcurs';

@Component({
  selector: 'app-concurs-details',
  templateUrl: './concurs-details.component.html',
  styleUrls: ['./concurs-details.component.css']
})
export class ConcursDetailsComponent implements OnInit {

  @Input() concursDetails: Concurs;
  @Input() concursLogo: Photo;
  // @Input() concursTags: Tag[];
  @Input() concursCategorii: Categorie[];
  isHisProfile = true;
  rezervareConcurs: RezervareConcurs = new class implements RezervareConcurs {
    id: number;
    categorie: string;
    numar: number;
  };
  categorie: Categorie = new class implements Categorie {
    dificultate: string;
    id: number;
    lungime: number;
    tipDisciplina: string;
    varsta: string;
  };

  constructor(public dialog: MatDialog, private concursDetailsService: AbstractConcursDetailsService) {
  }

  ngOnInit() {
    this.intialize();
  }

  public getCategorii() {
    this.concursDetailsService.getConcursCategorii(this.concursDetails.id.toString()).subscribe(
      list => {
        this.concursCategorii = list;
      }
    );
  }

  public openEditDialog() {
    const dialogRef = this.dialog.open(ConcursEditComponent, {
      width: '90%',
      data: {concurs: this.concursDetails}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openRezervareConcursDialog() {
    const dialogRef = this.dialog.open(RezervareConcursAddComponent, {
      width: '90%',
      data: {rezervareConcurs: this.rezervareConcurs}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  public openCategorieAddDialog() {
    const dialogRef = this.dialog.open(CategorieAddComponent, {
      width: '90%',
      data: {categorie: this.categorie}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  // TODO apply
  applyForConcurs(id: number) {
    this.concursDetailsService.applyToConcurs(id).subscribe(() => {
    });
  }

  deleteCategorie(id: number) {
    this.concursDetailsService.deleteCategorie(id).subscribe(() => {
      this.getCategorii();
    });
  }

  private intialize() {
    this.concursDetailsService.initialize();
    console.log('de ce nu vine img');
    console.log(this.concursLogo.url);
  }

  onPhotoFileChanged(event) {
    const uploadData = new FormData();
    uploadData.append('file', event.target.files[0], event.name);
    this.concursDetailsService.uploadPhoto(uploadData).then((data) => {
      this.concursCategorii = data;
    }).catch(() => {
      // todo
      console.log('error fronted photo');
    });
  }

}
