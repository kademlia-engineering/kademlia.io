import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  //shadow: true,
})
export class PageHome {
  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <logo-token></logo-token>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" color="primary">
          <p>Welcome to Stencil App Starter.</p>
          <ion-list>
            <ion-item>
              <ion-label>Item 1</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Item 2</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </Fragment>
    );
  }
}
