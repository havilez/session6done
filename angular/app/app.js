var portfolioApp = angular.module("portfolioSharingApp", ["ngRoute"]);

portfolioApp.config(function ($routeProvider) {
    $routeProvider
        .when("/portfolios",  { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
        .when("/",  { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html"  })
        .otherwise({ templateUrl: "app/partials/404.html",
                                 controller: "PortfolioErrorController" });


});
