
ddg.registerClass({
    name: "greensta.app",
    base: ddg.components.app,

    options: {
        historyYears: 20,
        futureYears: 20
    },

    def: {
        _salary: null,
        _energy: null,
        _chart: null,

        _year: null,

        init: function (construct) {
            this._super(construct);

            this._year = new Date().getFullYear();

            this._initComponents();

            $("#respond").click(this._respondClicked.bind(this));
        },

        year: function () {
            return this._year;
        },

        yearToUtcDate: function (year) {
            return Date.UTC(year, 01, 01, 00, 00, 00, 00);
        },

        _initComponents: function () {
            var salary = this._salary = $ddgcreate({
                type: greensta.salary,
                creator: this
            });

            var energy = this._energy = $ddgcreate({
                type: greensta.energy,
                creator: this
            });

            this._chart = $ddgcreate({
                type: greensta.chart,
                creator: this,
                params: {
                    salary: salary,
                    energy: energy
                }
            });
        },

        _respondClicked: function () {
            this._salary.calculate();

            this._renderChart();
        },

        _renderChart: function () {
            this._chart.render();
        }
    }
});