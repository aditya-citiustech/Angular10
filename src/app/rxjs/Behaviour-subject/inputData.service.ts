import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
providedIn:'root'
})

export class InputDataService{

    inputEmitter = new BehaviorSubject('');

    receiveData(data:string){
        this.inputEmitter.next(data)
    }

}