
ddg.registerClass({
    name: "greensta.chart",

    options: {
        width: "100%",
        height: "400px"
    },

    def: {
        _salary: null,
        _energy: null,

        _container: null,
        _highchart: null,

        _years: null,

        init: function (construct) {
            this._salary = construct.salary;
            this._energy = construct.energy;

            this._setupContainer();
            this._generateYears();
        },

        render: function () {
            this._highchart = new Highcharts.Chart({
                chart: {
                    renderTo: this._container[0],
                    defaultSeriesType: "area"
                },
                title: {
                    text: 'Salary vs energy expenditure'
                },
                xAxis: {
                    title: {
                        enabled: false
                    },
                    tickmarkPlacement: "on",
                    categories: this._years
                },
                yAxis: {
                    title: {
                        text: 'Amount (£)'
                    }
                },
                plotOptions: {
                    area: {
                        stacking: "normal",
                        lineColor: "#666666",
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: "#666666"
                        }
                    }
                },
                series: [{
                    name: 'Salary',
                    data: this._salary.data()
                }]
            });
        },

        _setupContainer: function () {
            var opts = this._ddgOptions;

            this._container = $("#chart")
                .css({
                    width: opts.width,
                    height: opts.height
                }); ;
        },

        _generateYears: function () {
            var opts = this.ddgApp.ddgOptions();

            var years = this._years = [];
            for (var i = 0, j = opts.previousYears + opts.futureYears + 1; i < j; i++) {
                years.push(i);
            }
        }
    }
});