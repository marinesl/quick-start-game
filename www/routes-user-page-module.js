(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");

/*
Imports
*/
// Angular


// Inner


//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.tapImg {\n\twidth: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcudGFwSW1nIHtcblx0d2lkdGg6IDMwcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button image -->\n<div (click)=\"tapOn()\">\n\t<img src=\"../../../assets/IMAGES/tap/tapOff.png\" *ngIf=\"!tap\" class=\"tapImg\">\n\t<img src=\"../../../assets/IMAGES/tap/tapOn.png\" *ngIf=\"tap\" class=\"tapImg\">\n</div>\n\n<!-- Progress bar for game duration -->\n<div>\n\t<progress id=\"timer\" max=\"100\" [value]=\"temps\">{{ temps }}</progress>\n\t<p>{{ temps/10 }}s</p>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_score_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/score/score-service.service */ "./src/app/services/score/score-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 Imports & definition
*/
// Imports

// Inner

// Navigation

// Definition
var UserPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function UserPageComponent(ScoreService, router // Navigation
    ) {
        var _this = this;
        this.ScoreService = ScoreService;
        this.router = router;
        this.tap = false; // For image on or off
        this.temps = 0; // Current duration of game
        this.startTimer = false; // Is timer stated ?
        this.firstClick = false; // Is first click ?
        this.interval = null; // Set interval
        this.score = 0; // User score
        //
        /*
         Methods
        */
        // Every time the button is clicked
        this.tapOn = function () {
            _this.tap = !_this.tap; // Reverse tap
            _this.firstClick = true; // First click ok
            _this.score++; // Increment score
            // If first click but timer not started
            if (_this.firstClick && !_this.startTimer) {
                // Start timer
                _this.startTimer = true;
                // Function timer
                _this.timer();
            }
        };
        // Timer starting
        this.timer = function () {
            _this.interval = setInterval(function () {
                // Increment game duration to 10 for the progress bar (on 100)
                _this.temps += 10;
                // If gets to 100
                if (_this.temps == 100) {
                    // Stop interval
                    clearInterval(_this.interval);
                    _this.interval = null;
                    // Save score
                    _this.saveScore(_this.score);
                }
            }, 1000);
        };
        // Save score
        this.saveScore = function (score) {
            // Send score data
            _this.ScoreService.save(score)
                .then(function (apiResponse) {
                // Redirect to page /tap
                _this.router.navigate(["/tap"]);
            })
                .catch(function (apiResponse) {
                console.log(apiResponse);
            });
        };
    }
    ;
    //
    /*
     Hooks
    */
    UserPageComponent.prototype.ngOnInit = function () { };
    ;
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html"),
            providers: [_services_score_score_service_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]],
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/routes/user-page/user-page.component.css")]
        })
        //
        /*
         Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_score_score_service_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] // Navigation
        ])
    ], UserPageComponent);
    return UserPageComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map