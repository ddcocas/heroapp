import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from '../../services/hero/hero.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogService } from 'src/app/services/confirmation/confirmation-dialog.service';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'creator', 'options'];
  dataSource: MatTableDataSource<Hero>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private heroService: HeroService, private _snackBar: MatSnackBar, private confirmationDialogService: ConfirmationDialogService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    
  }
  async ngAfterViewInit():Promise<void> {
    await this.loadHeroes();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeHero(hero: Hero) {
    this.confirmationDialogService.confirm("Confirmation", `Are you sure you want delete ${hero.name}?`)
      .then((confirmed) => {
        if (confirmed) {
          this.heroService.deleteHero(hero.id);
          this.loadHeroes();
          this.openSnackBar();
        }
      });
  }

  async loadHeroes() {
    this.dataSource = new MatTableDataSource( await this.heroService.getAll());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openSnackBar() {
    this._snackBar.open("Hero deleted", 'Dismiss', {
      duration:3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
