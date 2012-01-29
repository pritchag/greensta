
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

        init: function (construct) {
            this._salary = construct.salary;
            this._energy = construct.energy;

            this._setupContainer();
        },

        render: function () {
            var othis = this;

            var salaryData = this._salary.data();

            this._highchart = new Highcharts.StockChart({
                chart: {
                    renderTo: this._container[0],
                    zoomType: "x"
                },
                xAxis: {
                    minRange: 10 * 365 * 24 * 3600 * 1000
                },
                rangeSelector: {
                    buttons: [
                        {
                            type: "year",
                            count: 10,
                            text: "10 yr"
                        },
                        {
                            type: "year",
                            count: 20,
                            text: "20 yr"
                        },
                        {
                            type: "all",
                            text: "All"
                        }
                    ],
                    buttonSpacing: 5,
                    buttonTheme: {
                        width: 50
                    },
                    inputEnabled: false
                },
                title: {
                    text: 'Salary vs energy expenditure'
                },

                series: [{
                    name: 'Salary',
                    data: salaryData,
                    type: 'area',
                    tooltip: {
                        yDecimals: 0,
                        yPrefix: "£"
                    }
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
        }
    }
});