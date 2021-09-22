import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { OrderService } from 'src/app/all-services/order.service';
import * as moment from 'moment';
import  'capacitor-razorpay';
import { Plugins } from '@capacitor/core';
const { Checkout } = Plugins;
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-payment-terms-content',
  templateUrl: './payment-terms-content.component.html',
  styleUrls: ['./payment-terms-content.component.scss'],
})
export class PaymentTermsContentComponent implements OnInit {
    bookig : any = {};
    checkterm = false;
    constructor(
      private route: ActivatedRoute, 
      public datepipe: DatePipe,
      private toastController : ToastController,
      private router: Router,
      private orderservice: OrderService
    ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bookig = this.router.getCurrentNavigation().extras.state.bookig;
      }
    });
  }

  ngOnInit() {}

  async loadCheckout() {
    console.log(this.bookig);
    const options = { 
      key: 'rzp_test_Ii0YAZ0ccSrcLs',
      key_secret: 'uI4QCdMjvVTQQJ1LGMVauW8R',
      amount: '49900', 
     // order_id: 'order_DBJOWzybf0sJbb', //Obtained in response of Step 1.
      description: 'Credits towards consultation', 
      image: 'assets/images/site_logo.png', 
      currency: 'INR', 
      name: 'Med Consultant', 
      prefill: { 
        
      }, 
      theme: {
        color: '#3399cc'
        }
      };     
    try {
      let data = (await Checkout.open(options));
      this.bookig.payment_id = data['response']['razorpay_payment_id'];
      this.bookig.payment_status = 'success';
      this.bookig.order_id = data['response']['razorpay_payment_id'];
      console.log(data['response']['razorpay_payment_id'])
      this.orderservice.createOrder(this.bookig).subscribe(res => {
        console.log(res);
        this.router.navigate(['/success'])
      })
    } catch (error) {
      console.log(error['description'])
    }
  }

  displayToast1() {
    this.toastController.create({
      message: 'You have enterred a past date',
      position: 'bottom',
      duration: 1500,
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');

          }
        }
      ]

    }).then((toast) => {
      toast.present();
    });
  }

}
