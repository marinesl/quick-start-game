(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/score/score-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/score/score-service.service.ts ***!
  \*********************************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

/*
Imports
*/



//
/*
Definition
*/
var ScoreService = /** @class */ (function () {
    // Inject module(s) in the service
    function ScoreService(HttpClient) {
        this.HttpClient = HttpClient;
    }
    ;
    // Function to save the score
    ScoreService.prototype.save = function (score) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST '/score/save'
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/score/save", { score: score }, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Function get all scores
    ScoreService.prototype.getScores = function () {
        // POST '/score'
        return this.HttpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/score")
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Get the API response
    ScoreService.prototype.getData = function (res) {
        return res || {};
    };
    ;
    // Get the API error
    ScoreService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    ;
    ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ScoreService);
    return ScoreService;
}());

;
//


/***/ })

}]);
//# sourceMappingURL=common.js.map