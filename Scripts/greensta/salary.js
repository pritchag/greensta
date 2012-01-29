
ddg.registerClass({
    name: "greensta.salary",

    def: {
        _salary: 0,
        _data: null,

        calculate: function () {
            var s = this._salary = Number($("#answer_salary").val());

            var sd = this._data = [],
                thisYear = this.ddgApp.year();

            this._calculateHistory(thisYear);
            sd.push([this.ddgApp.yearToUtcDate(thisYear), s]);
            this._calculateFuture(thisYear);
        },

        data: function () {
            return this._data;
        },

        _calculateHistory: function (thisYear) {
            var years = this.ddgApp.ddgOptions().historyYears,
                sd = this._data,
                salaryNow = this._salary;

            for (var i = 1; i <= years; i++) {
                var year = thisYear - i;
                sd[years - i] = [this.ddgApp.yearToUtcDate(year), salaryNow /= 1.035];
            }
        },

        _calculateFuture: function (thisYear) {
            var years = this.ddgApp.ddgOptions().futureYears,
                sd = this._data,
                salaryNow = this._salary;

            for (var i = 1; i <= years; i++) {
                var year = thisYear + i;
                sd.push([this.ddgApp.yearToUtcDate(year), salaryNow *= 1.035]);
            }
        }
    }
});