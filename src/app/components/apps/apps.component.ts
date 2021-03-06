import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { App } from '../../models/Apps';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  apps: App[];
  editState: boolean = false;
  loading: boolean = true;
  appToEdit: App;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getapps().subscribe(apps => {
      console.log(apps);
      this.loading = false;
      this.apps = apps;
      // setTimeout(()=> {
      //   this.apps = apps;
      //   this.loading = false;
      // },7000); // testing loading spinner
      // this.apps = apps.slice(0,6); // slice to 6 for testing styling footer!
      // this.apps = []; // empty for testing!
     
    });
  }

  deleteapp(event, app: App){
    this.clearState();
    this.appService.deleteapp(app);
  }

  editapp(event, app: App){
    this.editState = true;
    this.appToEdit = app;
  }

  updateapp(app: App){
    this.appService.updateapp(app);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.appToEdit = null;
  }

}
