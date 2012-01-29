ddg.registerClass({
    name: "greensta.energy",

    def: {

        init: function () {
            this._super();

            $("input[name=drivecar]").change(this._drivecarClicked.bind(this));
            $("input[name=usepubtran]").change(this._usepubtranClicked.bind(this));
        },

        data: function () {
            return this._calculate();
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
                electricity: [],
                gas: []
            };

            var isCar = ddg.util.isSomething(car),
                isPubtran = ddg.util.isSomething(pubtran);

            if (isCar) {
                result.car = [];
            }
            if (isPubtran) {
                result.pubtran = [];
            }

            var thisYear = this.ddgApp.year(),
                appOpts = this.ddgApp.ddgOptions(),
                rebasedData = greensta.data.rebase(thisYear);

            for (var i = thisYear - appOpts.historyYears,
                    j = thisYear + appOpts.futureYears; i <= j; i++) {

                var utcDate = Date.UTC(i, 1, 1, 0, 0, 0, 0);

                result.electricity.push([
                    utcDate,
                    (rebasedData[i].electricity / 100) * electricity * 12
                ]);

                result.gas.push([
                    utcDate,
                    (rebasedData[i].gas / 100) * gas * 12
                ]);

                if (isCar) {
                    result.car.push([
                        utcDate,
                        (rebasedData[i].car / 100) * car * 12
                    ]);
                }

                if (isPubtran) {
                    result.pubtran.push([
                        utcDate,
                        (rebasedData[i].pubtran / 100) * pubtran * 12
                    ]);
                }

            }

            return result;
        }


    }
});