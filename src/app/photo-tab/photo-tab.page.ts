import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo, PhotoService } from '../services/photo.service';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@Component({
  selector: 'app-photo-tab',
  templateUrl: 'photo-tab.page.html',
  styleUrls: ['photo-tab.page.scss']
})
export class Tab2Page implements OnInit {

	displayCamera: boolean
	displayAlertMissing: boolean
	displayShareButton: boolean
	userMessage: string
	screenshot: any

  constructor(public photoService: PhotoService,
			  public actionSheetController: ActionSheetController,
			  private screenshotService: Screenshot
  )
  {}

  async ngOnInit() {
		this.displayCamera = true
		this.displayAlertMissing = true
		this.displayShareButton = false
	  	this.userMessage = 'Montre-moi <br />ton dessin !'
		this.initGestureHandler();
    // await this.photoService.addNewToGallery();
  }

  public initGestureHandler() {

	window.addEventListener('message', handleMessage, false);

		const self = this

		function handleMessage(event) {
			console.log(event)
			if (event.data === 'IS_VISIBLE') {
				self.displayAlertMissing = false;
				self.displayShareButton = true;
			} else if (event.data === 'IS_NOT_VISIBLE') {
				self.displayAlertMissing = true;
				self.displayShareButton = false;
				self.userMessage = 'Je ne vois pas <br />ton dessin !'
			}
		}
	}

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

	public async takeScreenshot() {

		console.log('screen')


		/* Screenshot tha aframe way
		const frame = window.frames[0] // arcomponent
		const scene = frame.document.querySelector('a-scene');

		// @ts-ignore
		const screenshot = scene.components.screenshot.getCanvas('perspective');
		 */

		const onSuccess = res => {
			console.log('success 2', res)

			if (!res || !res.success) return

			this.screenshot = res.filePath
			console.log('screenshot', this.screenshot)

			this.displayCamera = false
		}
		const onError = err => {
			console.error('error', err)
		}

		// Take a screenshot and save to file
		this.screenshotService.save('jpg', 100, 'screenshot').then(onSuccess, onError);
		// Take a screenshot and get temporary file URI
		// this.screenshot.URI(80).then(onSuccess, onError);

		// const screenshot = this.screensho

		// document.getElementById('screenshotContainer').appendChild(screenshot)

		// this.screenshot = screenshot
	}
}
