import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  @State() appLoaded: boolean = false;

  componentDidLoad() {
    window.addEventListener('appload', () => {
      // Trigger the change in state after a slight delay to ensure the animation is visible
      setTimeout(() => {
        this.appLoaded = true;
      }, 9000); // Delay can be adjusted or removed as per your requirement
    });
  }

  render() {
    return (
      <ion-app>
        {!this.appLoaded ? (
          <ion-content>
            <page-loading></page-loading>
          </ion-content>
        ) : (
          <ion-content>
            <ion-router useHash={false}>
              <ion-route-redirect from="/" to="/home"></ion-route-redirect>
              <ion-route url="/home" component="page-home"></ion-route>
            </ion-router>
            <ion-nav></ion-nav>
          </ion-content>
        )}
      </ion-app>
    );
  }
}
