import { Component, Fragment, h } from '@stencil/core'

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  constructor() {}

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>Welcome to Stencil App Starter.</p>
        </ion-content>
      </Fragment>
    )
  }
}
