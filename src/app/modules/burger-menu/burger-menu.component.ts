import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css'],
  animations: [
    trigger('slideInOut2', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BurgerMenuComponent implements OnInit {
  // @Input() slideInOut: String;
  slideInOut: String = 'out';
  isClassVisible = false;
  constructor() {
    setInterval(
      () => {
        console.log(this.slideInOut);
      }, 2000
    );
  }

  ngOnInit() {
  }

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.slideInOut = this.slideInOut === 'out' ? 'in' : 'out';
    this.isClassVisible = !this.isClassVisible;
  }

  getStyle() {

  }
//   $(function () {
//     $('.menu').on('click', function() {
//         $('.bar').toggleClass('animate');
//     })
//     $('.menu2').on('click', function() {
//         $('.bar').toggleClass('animate');
//     })
// })

}
