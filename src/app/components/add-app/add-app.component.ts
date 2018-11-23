import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { App } from '../../models/Apps'; 

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddappComponent implements OnInit {
  app: App = {
    title: '',
    description_long:'',
    description_short:'',
    url:'',
    repo_url:''
  }

  showForm: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  showTheForm(){
    this.showForm = true;
  }

  onSubmit(){
    if(this.app.title != '' && this.app.description_long != ''){
      this.appService.addapp(this.app);
      this.app.title = '';
      this.app.description_long = '';
      this.app.description_short = '';
      this.app.url = '';
      this.app.repo_url = '';
      this.showForm = false;
    }
  }

}
