import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading : any;
  isLoading = false;

  constructor(private loadingController : LoadingController) { }

  async presentLoading() {
    this.isLoading = true;
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present().then(() => {
      if (!this.isLoading) {
        this.loading.dismiss();
      }
    });;

 
  }

  hideLoading() {
    this.isLoading = false;
    this.loadingController.getTop().then(loader => {
      if (loader) {
        loader.dismiss();
      }
    });
  }
}
