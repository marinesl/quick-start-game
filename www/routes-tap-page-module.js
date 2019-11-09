(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-tap-page-module"],{

/***/ "./src/app/routes/tap-page/module.ts":
/*!*******************************************!*\
  !*** ./src/app/routes/tap-page/module.ts ***!
  \*******************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/tap-page/router.ts");
/* harmony import */ var _tap_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tap-page.component */ "./src/app/routes/tap-page/tap-page.component.ts");

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
            declarations: [_tap_page_component__WEBPACK_IMPORTED_MODULE_4__["TapPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"],
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

/***/ "./src/app/routes/tap-page/router.ts":
/*!*******************************************!*\
  !*** ./src/app/routes/tap-page/router.ts ***!
  \*******************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tap_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tap-page.component */ "./src/app/routes/tap-page/tap-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _tap_page_component__WEBPACK_IMPORTED_MODULE_1__["TapPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/tap-page/tap-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/tap-page/tap-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- If there are scores -->\n<div *ngIf=\"allScores.length != 0; else scoreEmpty\">\n    <ul>\n        <div *ngFor=\"let score of allScores\">\n            <li>{{ score.score }}pts - {{ score.user_id.first_name }} {{ score.user_id.last_name }} / {{ score.date|date:'dd/MM/yyyy' }} - {{ score.date|date:'H:m:s' }}</li>\n        </div>\n    </ul>\n</div>\n\n<!-- If score empty -->\n<ng-template #scoreEmpty>\n    <p>Pour avoir des scores, il faut jouer ;-)</p>\n</ng-template>"

/***/ }),

/***/ "./src/app/routes/tap-page/tap-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/tap-page/tap-page.component.ts ***!
  \*******************************************************/
/*! exports provided: TapPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TapPageComponent", function() { return TapPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/score/score-service.service */ "./src/app/services/score/score-service.service.ts");

/*
Imports & definition
*/
// Imports

// Inner


// Definition
var TapPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function TapPageComponent(ScoreService) {
        var _this = this;
        this.ScoreService = ScoreService;
        this.allScores = []; // Array of all the scores
        //
        /*
        Methods
        */
        // Get all scores
        this.scores = function () {
            // Send user data
            _this.ScoreService.getScores()
                .then(function (apiResponse) {
                _this.allScores = apiResponse.data;
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
    TapPageComponent.prototype.ngOnInit = function () {
        this.scores();
    };
    ;
    TapPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tap-page',
            template: __webpack_require__(/*! ./tap-page.component.html */ "./src/app/routes/tap-page/tap-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]])
    ], TapPageComponent);
    return TapPageComponent;
}());

;
//


/***/ })

}]);
//# sourceMappingURL=routes-tap-page-module.js.map