
ddg.registerClass({
    name: "greensta.crocp",

    def: {
        _rateOfChange: 0,
        _currentValue: 0,
        _multiplier: 1,

        init: function (rateOfChange, multiplier) {
            this._super();

            this._rateOfChange = rateOfChange;

            if (ddg.util.isDefined(multiplier)) {
                this._multiplier = multiplier;
            }
        },

        currentValue: function (val) {
            this._currentValue = Number(val);
        },

        data: function () {
            return this._calculate();
        },

        _calculate: function () {
            var result = {
                chart: [],
                lookup: {}
            };
            var thisYear = this.ddgApp.year();

            this._calculateHistory(result, thisYear);

            var currentValue = this._currentValue * this._multiplier;
            result.chart.push([
                this.ddgApp.yearToUtcDate(thisYear),
                currentValue
            ]);
            result.lookup[thisYear] = currentValue;

            this._calculateFuture(result, thisYear);

            return result;
        },

        _calculateHistory: function (result, thisYear) {
            var years = this.ddgApp.ddgOptions().historyYears,
                valueNow = this._currentValue;

            for (var i = 1; i <= years; i++) {
                var year = thisYear - i,
                    val = (valueNow /= this._rateOfChange) * this._multiplier;
                result.chart[years - i] = [
                    this.ddgApp.yearToUtcDate(year),
                    val
                ];
                result.lookup[year] = val;

            }
        },

        _calculateFuture: function (result, thisYear) {
            var years = this.ddgApp.ddgOptions().futureYears,
                valueNow = this._currentValue;

            for (var i = 1; i <= years; i++) {
                var year = thisYear + i,
                    val = (valueNow *= this._rateOfChange) * this._multiplier;
                result.chart.push([
                    this.ddgApp.yearToUtcDate(year),
                    val
                ]);
                result.lookup[year] = val;
            }
        }
    }
});