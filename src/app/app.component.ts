import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 3, 5, 8, 9).subscribe(
      (item) => console.log('This the item : ' + item),
      (err) => console.log('error'),
      () => console.log('Completed')
    );
    from([1, 2, 3, 4, 5])
      .pipe(
        take(1),
        tap(console.log),
        map((item) => item * 3),
        tap(console.log)
      )
      .subscribe();
  }
}
