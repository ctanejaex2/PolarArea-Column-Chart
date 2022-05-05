import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ItemSeries = require('highcharts/modules/item-series');
ItemSeries(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public options: any = {

    chart: {
      type: 'column',
      polar: true,
    },

    title: {
      text: 'Polar Chart'
    },

    subtitle: {
      text: 'Also known as Radar Chart'
    },

    pane: {
      startAngle: 0,
      endAngle: 360
    },


    yAxis: {
      showFirstLabel: false,
      showLastLabel: true,
      min: 0,
      max: 350,
      tickInterval: 50,
      allowOverlap: true,
      angle: 225,
      gridLineDashStyle: 'dash',
      labels: {
        align: 'center',
        y: 3,
        rotation: 45,
        style: {
          opacity: 0.8,
        }
      },
    },

    xAxis: {
      visible: false,
      labels: {
        enabled: false
      }
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          align: 'center'
        }
      },

      column: {
        pointPadding: 0,
        groupPadding: 0
      }
    },


    series: [
      {
        type: 'column',
        // name: 'Critical Priority (P1) ',
        data: [97, 104, 263, 123],
        name: ['a', 'b', 'c', 'd'],
        pointPlacement: 'on'
      },

      // {
      //   // type: 'column',
      //   name: 'High Priority (P2) ',
      //   data: [104],
      // },

      // {
      //   name: 'Normal Priority (P3) ',
      //   data: [263],
      // },
      // {
      //   name: 'Low Priority (P4) ',
      //   data: [123],
      // },
    ]

  };



  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}
