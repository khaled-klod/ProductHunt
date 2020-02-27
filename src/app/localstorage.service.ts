import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

let STORAGE_KEY = 'local_products';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  anotherTodolist = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public storeOnLocalStorage(listTitle: any, day_before, day_after): void {
          
          // get array of tasks from local storage
          const currentTodoList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentTodoList.push({
              title: listTitle,
              day_before: day_before,
              day_after: day_after,
              isChecked: false 
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }

     public getLocalStorage(){
       return (this.storage.get(STORAGE_KEY) || null);
     }

     public clearStorage(){
      return this.storage.remove(STORAGE_KEY);
     }
}
