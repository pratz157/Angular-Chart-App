import c3 from 'c3';

class graphAppCtrl {
    constructor($scope) {
        'ngInject';

        this.names = ["Axes", "Bar", "Circles", "Line", "Multi-line", "Pie", "Step"];

        this.selectedItemChanged = function (sName) {
            console.log(" * ", sName);
            // d3.select("svg").remove();
            // d3.select(".chart button").remove();

            switch (sName) {
                case "Axes":
                    chartWithAxes();
                    break;
                case "Bar":
                    barChartWithText();
                    break;
                case "Circles":
                    circleChart();
                    break;
                case "Line":
                    drawChart(this.parseTData);
                    break;
                case "Multi-line":
                    dualLineChart();
                    break;
                case "Pie":
                    pieChart();
                    break;
                case "Step":
                    this.stepChart();
                    break;
            }

        };

    }



    stepChart() {

        var chart = c3.generate({
            bindto: ".chart",
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 100],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'step',
                    data2: 'area-step'
                }
            }
        });

    }
}

export default graphAppCtrl;