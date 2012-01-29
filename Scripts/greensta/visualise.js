ddg.registerClass({
    name: "greensta.visualise",

    options: {
        shoeCost: 70,
        pintCost: 4.2,
        ticketCost: 10.5
    },

    def: {
        _shoeData: null,
        _pintData: null,
        _ticketData: null,
        _lookupData: null,

        init: function () {
            this._super();

            this._calculateProductCosts();
        },

        visualise: function (year, lookupData) {
            this._lookupData = lookupData;

            $("#vis_year").text(year);

            var expendable = this._calcExpendable(year),
                currentYear = this.ddgApp.year(),
                expendableNow = this._calcExpendable(currentYear);

            $("#vis_amount").text(Math.floor(expendable));


            // how many shoes can we buy?
            var shoesNow = expendableNow / this._shoeData[currentYear],
                shoes = expendable / this._shoeData[year];
            this._updateNumber("shoe", shoesNow, shoes);

            var pintsNow = expendableNow / this._pintData[currentYear],
                pints = expendable / this._pintData[year];
            this._updateNumber("pint", pintsNow, pints);

            var ticketsNow = expendableNow / this._ticketData[currentYear],
                tickets = expendable / this._ticketData[year];
            this._updateNumber("ticket", ticketsNow, tickets);
        },

        _updateNumber: function (what, now, then) {
            // round
            now = Math.round(now);
            then = Math.round(then);

            // update value
            $("#" + what + " span.number").text(then);

            // percentage then of now 
            var pct = then / now;
            if (pct > 1) pct = 1;

            var numberOn = Math.round(pct * 10);
            var numberOff = 10 - numberOn;



        },


        //        _updateNumber: function (what, num) {
        //            num = num.
        //            $("#" + what + " span.number").text(
        //        }

        _calcExpendable: function (year) {
            var lookupData = this._lookupData;

            var expendable = lookupData.salary[year] -
                lookupData.food[year] -
                lookupData.energy.electricity[year] -
                lookupData.energy.gas[year];

            if (lookupData.energy.car) {
                expendable -= lookupData.energy.car[year];
            }

            if (lookupData.energy.pubtran) {
                expendable -= lookupData.energy.pubtran[year];
            }

            return expendable;
        },

        _calculateProductCosts: function () {
            var crocp = $ddgcreate({
                type: greensta.crocp,
                creator: this,
                params: this.ddgApp.ddgOptions().cpiRate
            });

            var opts = this._ddgOptions;

            // shoes
            crocp.currentValue(opts.shoeCost);
            this._shoeData = crocp.data().lookup;

            // pints
            crocp.currentValue(opts.pintCost);
            this._pintData = crocp.data().lookup;

            // tickets
            crocp.currentValue(opts.ticketCost);
            this._ticketData = crocp.data().lookup;
        }
    }
});