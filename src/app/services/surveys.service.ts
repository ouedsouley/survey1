import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  private surveys : Survey[] = [];
  constructor(private storage : StorageService) { 
    this.init();
  }
  init() {
    this.storage.get("surveys")?.then((surveys : Survey[])=>{
      this.surveys = surveys;
    })
  }
  public saveSurvey(survey: Survey){
    this.surveys.push(survey);
    this.storage.set("surveys", this.surveys);

  }
  public surveysList() : Promise<Survey[]>{
    return Promise.resolve(this.surveys);
  }
}
