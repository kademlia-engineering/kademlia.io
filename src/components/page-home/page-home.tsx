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
          <ion-toolbar color="secondary">
            kademlia
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" color="primary">
          <logo-token src="token-icon"></logo-token>
        </ion-content>
      </Fragment>
    );
  }
}
