import {Component, OnInit} from '@angular/core';
import {ReactChildComponent} from '../react-child/react-child';
import {ReactStore} from '../../store/store';

@Component({
  selector: 'app-parent-angular',
  templateUrl: './angular-parent.component.html',
  styleUrls: ['/angular-parent.component.scss'],
})

export class AngularParentComponent implements OnInit {
  public letter = 'l';

  public store: ReactStore;

  public handleClick(): void {
    console.log('do something');
  }


  public ngOnInit(): void {
    this.store = new ReactStore(['t', 'r', 'o', 'l', 'o']);

    /*
    run on state change
    */
    this.store.store.subscribe(() => {
      console.log(this.store.store.getState());
    });

    ReactChildComponent.initialize(this.letter, this.store, 'react-child-component-container', this.handleClick.bind(this));
  }

}
