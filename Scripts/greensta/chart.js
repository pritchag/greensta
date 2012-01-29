
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
        _visualise: null,

        _container: null,
        _offset: null,
        _chart: null,
        _highchart: null,

        _salaryData: null,
        _energyData: null,
        _foodData: null,

        init: function (construct) {
            this._salary = construct.salary;
            this._energy = construct.energy;
            this._food = construct.food;
            this._visualise = construct.visualise;

            this._setupContainer();
        },

        lookupData: function () {
            return {
                salary: this._salaryData,
                energy: this._energyData,
                food: this._foodData
            };
        },

        render: function () {

            var salaryData = this._salary.data();
            this._salaryData = salaryData.lookup;

            var seriesData = [
                    {
                        name: "Salary",
                        data: salaryData.chart,
                        type: "area",
                        tooltip: {
                            yDecimals: 0,
                            yPrefix: "£"
                        }
                    }
            ];

            var energyData = this._energy.data();
            this._energyData = energyData.lookup;

            for (var energyType in energyData.chart) {
                seriesData.push({
                    name: energyType.capitalise(),
                    data: energyData.chart[energyType],
                    type: "area",
                    stack: "outgoing",
                    tooltip: {
                        yDecimals: 0,
                        yPrefix: "£"
                    }
                });
            }

            var foodData = this._food.data();
            this._foodData = foodData.lookup;

            seriesData.push({
                name: "Food",
                data: foodData.chart,
                type: "area",
                stack: "outgoing",
                tooltip: {
                    yDecimals: 0,
                    yPrefix: "£"
                }
            });

            var othis = this;

            this._highchart = new Highcharts.StockChart({
                chart: {
                    renderTo: this._container[0],
                    zoomType: "x",
                    events: {
                        load: function (chart) {
                            othis._chart = this;
                            var container = $(this.container);
                            othis._offset = container.offset();
                            container.mousemove(othis._mousemove.bind(othis));
                            container.mouseleave(function () {
                                $("#rightcontent").hide();
                            });
                        }
                    }
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
        },

        _mousemove: function (e) {
            var chart = this._chart,
                    offset = this._offset,
                    x = e.pageX - chart.plotLeft - offset.left,
                    y = e.pageY - chart.plotTop - offset.top,
                    isInside = this._chart.isInsidePlot(x, y);

            if (isInside) {

                $("#rightcontent").show();

                var year = new Date(chart.xAxis[0].translate(x, true)).getFullYear();

                this._visualise.visualise(year, this.lookupData());
            } else {
                $("#rightcontent").hide();
            }
        }
    }
});