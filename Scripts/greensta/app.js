
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

        init: function (construct) {
            this._super(construct);

            this._initComponents();

            $("#respond").click(this._respondClicked.bind(this));
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