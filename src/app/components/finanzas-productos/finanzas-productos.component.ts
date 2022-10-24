import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-finanzas-productos',
  templateUrl: './finanzas-productos.component.html',
  styleUrls: ['./finanzas-productos.component.css']
})
export class FinanzasProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    var options = {
      title: 'My Daily Activities',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }
}
