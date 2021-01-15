import { Component } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private messagingService: MessagingService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private afMessaging: AngularFireMessaging
  ) {
    this.listenForMessages();
  }

  listenForMessages() {
    this.messagingService.getMessages().subscribe(async (msg: any) => {
      const alert = await this.alertCtrl.create({
        header: msg.notification.title,
        subHeader: msg.notification.body,
        message: msg.data.info,
        buttons: ['OK'],
      });

      await alert.present();
    });
  }

  requestPermission() {
    // this.messagingService.requestPermission().subscribe(
    //   async token => {
    //     const toast = await this.toastCtrl.create({
    //       message: 'Got your token',
    //       duration: 2000
    //     });
    //     toast.present();
    //   },
    //   async (err) => {
    //     const alert = await this.alertCtrl.create({
    //       header: 'Error',
    //       message: err,
    //       buttons: ['OK'],
    //     });

    //     await alert.present();
    //   }
    // );

    this.afMessaging.requestToken // getting tokens
      .subscribe(
        (token) => { // USER-REQUESTED-TOKEN
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  async deleteToken() {
    this.messagingService.deleteToken();
    const toast = await this.toastCtrl.create({
      message: 'Token removed',
      duration: 2000
    });
    toast.present();
  }

}
