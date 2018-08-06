

class LandingCtrl {
    constructor($scope, $http) {
        'ngInject';
    
    this.$http = $http;

    //API to fetch historical data of Bitcoin Price Index
    // let api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

    // let api = "https://reqres.in/api/users?page=2";
    let api = 'https://www.w3schools.com/angular/customers.php'
    let self = this;

    this.$http({
        method : "GET",
        url : api
    }).then(function (res) {
            console.log("Response --->> ", res);
            self.watchList = res.data.records;
           
        }).catch(function (err) {
                console.log(err);
            })

        // this.watchList = [
        //     {
        //         name: 'Infosys'
        //     },
        //     {
        //         name: 'JSW'
        //     },
        //     {
        //         name: 'Xoriant'
        //     },
        // ]
    }
}

export default LandingCtrl;