
ddg.registerClass({
    name: "greensta.salary",

    def: {
        _salary: 0,
        _data: null,

        calculate: function () {
            var s = this._salary = Number($("#answer_salary").val());

            var sd = this._data = [];

            this._calculateHistory();
            sd.push(s);
            this._calculateFuture();

            for (var i = 0, j = sd.length; i < j; i++) {
                console.log(sd[i]);
            }

        },

        data: function () {
            return this._data;
        },

        _calculateHistory: function () {
            var years = this.ddgApp.ddgOptions().historyYears,
                sd = this._data,
                salaryNow = this._salary;

            for (; --years >= 0; ) {
                sd[years] = salaryNow /= 1.035;
            }
        },

        _calculateFuture: function () {
            var years = this.ddgApp.ddgOptions().futureYears,
            sd = this._data,
            salaryNow = this._salary;

            while (years--) {
                sd.push(salaryNow *= 1.035);
            }
        }
    }
});