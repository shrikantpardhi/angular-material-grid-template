import { Component } from '@angular/core';

export interface Section {
  name: string;
}
/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list-overview-example',
  styleUrls: ['grid-list-overview-example.css'],
  templateUrl: 'grid-list-overview-example.html',
})
export class GridListOverviewExample {
  files: Section[] = [
    {
      name: 'test1.txt',
    },
    {
      name: 'test3.pdf',
    },
  ];
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
