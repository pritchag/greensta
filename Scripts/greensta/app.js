
ddg.registerClass({
    name: "greensta.app",
    base: ddg.components.app,

    options: {
        historyYears: 20,
        futureYears: 20,
        salaryRate: 1.035,
        cpiRate: 1.055
    },

    def: {
        _questionPage: null,
        _chartPage: null,

        _salary: null,
        _energy: null,
        _food: null,
        _chart: null,

        _year: null,

        init: function (construct) {
            this._super(construct);

            this._questionPage = $("#question_page");
            this._chartPage = $("#chart_page");

            this._year = new Date().getFullYear();

            this._initComponents();

            $("#respond").click(this._respondClicked.bind(this));
            $("#back").click(this._backClicked.bind(this));
        },

        year: function () {
            return this._year;
        },

        yearToUtcDate: function (year) {
            return Date.UTC(year, 01, 01, 00, 00, 00, 00);
        },

        _initComponents: function () {
            var salary = this._salary = $ddgcreate({
                type: greensta.crocp,
                creator: this,
                params: this._ddgOptions.salaryRate
            });

            var energy = this._energy = $ddgcreate({
                type: greensta.energy,
                creator: this
            });

            var food = this._food = $ddgcreate({
                type: greensta.crocp,
                creator: this,
                params: [this._ddgOptions.cpiRate, 12]
            });

            this._chart = $ddgcreate({
                type: greensta.chart,
                creator: this,
                params: {
                    salary: salary,
                    energy: energy,
                    food: food
                }
            });
        },

        _respondClicked: function (e) {
            e.preventDefault();

            this._questionPage.hide();
            this._chartPage.show();

            this._renderChart();
        },

        _renderChart: function () {
            this._salary.currentValue(
                $("#salary").val()
            );

            this._food.currentValue(
                $("#food").val()
            );

            this._chart.render();
        },

        _backClicked: function () {
            this._chartPage.hide();
            this._questionPage.show();
        }
    }
});