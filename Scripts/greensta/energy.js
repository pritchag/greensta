ddg.registerClass({
    name: "greensta.energy",

    def: {

        init: function () {
            this._super();

            this._setupRadioOptions();
        },

        data: function () {
            return this._calculate();
        },

        _setupRadioOptions: function () {
            var drivecar = $("input[name=drivecar]");
            drivecar.change(this._drivecarClicked.bind(this));
            if (drivecar.filter(":checked").val() === "yes") this._drivecarClicked();

            var usepubtran = $("input[name=usepubtran]");
            usepubtran.change(this._usepubtranClicked.bind(this));
            if (usepubtran.filter(":checked").val() === "yes") this._usepubtranClicked();
        },

        _drivecarClicked: function (e) {
            $("#car_amount").toggle();
        },

        _usepubtranClicked: function (e) {
            $("#pubtran_amount").toggle();
        },

        _calculate: function () {
            // get values
            var electricity = Number($("#electricity").val()),
                gas = Number($("#gas").val()),
                car = $("input[name=drivecar][value=yes]").is(":checked") ?
                    Number($("#car").val()) : null,
                pubtran = $("input[name=usepubtran][value=yes]").is(":checked") ?
                    Number($("#pubtran").val()) : null;


            var result = {
                chart: {
                    electricity: [],
                    gas: []
                },
                lookup: {
                    electricity: {},
                    gas: {}
                }
            };

            var isCar = ddg.util.isSomething(car),
                isPubtran = ddg.util.isSomething(pubtran);

            if (isCar) {
                result.chart.car = [];
                result.lookup.car = {};
            }
            if (isPubtran) {
                result.chart.pubtran = [];
                result.lookup.pubtran = {};
            }

            var thisYear = this.ddgApp.year(),
                appOpts = this.ddgApp.ddgOptions(),
                rebasedData = greensta.data.rebase(thisYear);

            for (var i = thisYear - appOpts.historyYears,
                    j = thisYear + appOpts.futureYears; i <= j; i++) {

                var utcDate = Date.UTC(i, 1, 1, 0, 0, 0, 0);

                var electricityValue = (rebasedData[i].electricity / 100) * electricity * 12;
                result.chart.electricity.push([
                    utcDate,
                    electricityValue
                ]);
                result.lookup.electricity[i] = electricityValue;


                var gasValue = (rebasedData[i].gas / 100) * gas * 12;
                result.chart.gas.push([
                    utcDate,
                    gasValue
                ]);
                result.lookup.gas[i] = gasValue;

                if (isCar) {
                    var carValue = (rebasedData[i].car / 100) * car * 12;
                    result.chart.car.push([
                        utcDate,
                        carValue
                    ]);
                    result.lookup.car[i] = carValue;
                }

                if (isPubtran) {
                    var pubtranValue = (rebasedData[i].pubtran / 100) * pubtran * 12;
                    result.chart.pubtran.push([
                        utcDate,
                        pubtranValue
                    ]);
                    result.lookup.pubtran[i] = pubtranValue;
                }

            }

            return result;
        }


    }
});