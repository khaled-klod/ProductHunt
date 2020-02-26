import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {
  @Input() piedata: any[]

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] ;
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {

    //console.log(this.piedata);
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnChanges(changes: SimpleChanges) {
    

    var all_topics = [];
    var obj = {}
    console.log( this.piedata.length);
    console.log( this.piedata[0].node.topics.edges.length);
    for (var i = 0; i < this.piedata.length; i++) {
       for (var j=0; j<this.piedata[i].node.topics.edges.length; j++){
          var topic_name = this.piedata[i].node.topics.edges[j].node.name;
          obj[topic_name] = (obj[topic_name] || 0) +1 ;
         
          //all_topics.push(topic_name);

    }
   
}
console.log(obj);
let labels = Object.keys(obj) ;
let values = Object.values(obj);

this.pieChartLabels = labels;
this.pieChartData = values;




  
    
  
  }

  ngOnInit() {}

}
