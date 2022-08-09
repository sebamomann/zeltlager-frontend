import { Router, NavigationStart } from '@angular/router';
import { Component } from '@angular/core';
import { MatomoInjector, MatomoTracker } from 'ngx-matomo';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zeltlager-frontend';

  constructor(private matomoInjector: MatomoInjector,
    private matomoTracker: MatomoTracker,
    private router: Router) {
    this.matomoInjector.init("https://matomo.sebamomann.de/", 7);

    this.router.events.pipe(filter(event => event instanceof NavigationStart && event.id !== 1)).subscribe((val) => {
      this.matomoTracker.trackPageView();
    });
  }
}
