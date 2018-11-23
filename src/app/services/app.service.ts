import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { App } from '../models/Apps';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  appsCollection: AngularFirestoreCollection<App>;
  apps: Observable<App[]>;
  appDoc: AngularFirestoreDocument<App>;

  constructor(public afs: AngularFirestore) { 
    this.appsCollection = this.afs.collection('apps', ref => ref.orderBy('title','asc'));
    this.apps = this.appsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as App;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getapps(){
    return this.apps;
  }

  addapp(app: App){
    this.appsCollection.add(app);
  }

  deleteapp(app: App){
    this.appDoc = this.afs.doc(`apps/${app.id}`);
    this.appDoc.delete();
  }

  updateapp(app: App){
    this.appDoc = this.afs.doc(`apps/${app.id}`);
    this.appDoc.update(app);
  }

}

