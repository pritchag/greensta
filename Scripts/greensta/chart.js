
ddg.registerClass({
    name: "greensta.chart",

    options: {
        width: "100%",
        height: "400px"
    },

    def: {
        _salary: null,
        _energy: null,
        _food: null,

        _container: null,
        _highchart: null,

        init: function (construct) {
            this._salary = construct.salary;
            this._energy = construct.energy;
            this._food = construct.food;

            this._setupContainer();
        },

        render: function () {
            var othis = this;

            var salaryData = this._salary.data();

            var seriesData = [
                    {
                        name: "Salary",
                        data: salaryData,
                        type: "area",
                        tooltip: {
                            yDecimals: 0,
                            yPrefix: "£"
                        }
                    }
            ];

            var energyData = this._energy.data();

            for (var energyType in energyData) {
                seriesData.push({
                    name: energyType.capitalise(),
                    data: energyData[energyType],
                    type: "area",
                    stack: "outgoing",
                    tooltip: {
                        yDecimals: 0,
                        yPrefix: "£"
                    }
                });
            }

            seriesData.push({
                name: "Food",
                data: this._food.data(),
                type: "area",
                stack: "outgoing",
                tooltip: {
                    yDecimals: 0,
                    yPrefix: "£"
                }
            });

            debugger;

            this._highchart = new Highcharts.StockChart({
                chart: {
                    renderTo: this._container[0],
                    zoomType: "x"
                },
                plotOptions: {
                    area: {
                        stacking: "normal"
                    }
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

                series: seriesData
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