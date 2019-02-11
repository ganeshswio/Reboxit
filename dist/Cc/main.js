(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addlocation/addlocation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/addlocation/addlocation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addlocation/addlocation.component.html":
/*!********************************************************!*\
  !*** ./src/app/addlocation/addlocation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n<div class=\"w3-sidebar w3-card w3-bar-block w3-black\" style=\"width:15%\">\n  <h1>Reboxit</h1>\n  <a  routerLink=\"/admin\" class=\"w3-bar-item w3-button\">User Pickups</a>\n  <a  routerLink=\"/adminsdreqaggre\" class=\"w3-bar-item w3-button\">Scrap Dealer Request</a>\n  <a  routerLink=\"/adminaggrereqrec\" class=\"w3-bar-item w3-button\">Aggregator Request</a>\n  <a  routerLink=\"/adminrec\" class=\"w3-bar-item w3-button\">Recycler Request</a>\n  <a  routerLink=\"/addlocation\" class=\"w3-bar-item w3-button\">Add a new location</a>\n  <a  (click)=\"logout()\" class=\"w3-bar-item w3-button\">Logout</a>\n</div>\n\n<div style=\"margin-left:15%\">\n\n    <header class=\"w3-container w3-dark-grey text-center\">\n      <h1>Admin</h1>\n    </header>\n    <div class=\"container\">\n      <br><br>\n      <form [formGroup]=\"pickupForm\">\n        <div class=\"form-group row\">\n          <label for=\"inputloc\" class=\"col-sm-2 col-form-label\">Location</label>\n          <div class=\"col-sm-8\">\n            <input formControlName=\"location\" type=\"email\" class=\"form-control\" id=\"inputloc\" placeholder=\"add a new location\" [(ngModel)]=\"pro\">\n            {{pro}} will be added.\n          </div>\n          <button class=\"btn btn-primary\" (click)=\"add()\" [disabled]=\"!pro\">Add</button>\n\n        </div>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/addlocation/addlocation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addlocation/addlocation.component.ts ***!
  \******************************************************/
/*! exports provided: AddlocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddlocationComponent", function() { return AddlocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddlocationComponent = /** @class */ (function () {
    function AddlocationComponent(formBuilder, authService, db, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.db = db;
        this.router = router;
    }
    AddlocationComponent.prototype.ngOnInit = function () {
        this.pickupForm = this.formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddlocationComponent.prototype.add = function () {
        this.db.collection("locations").doc(this.pro).set({}).then(function () {
            console.log("added");
            window.location.reload();
        });
    };
    AddlocationComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AddlocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addlocation',
            template: __webpack_require__(/*! ./addlocation.component.html */ "./src/app/addlocation/addlocation.component.html"),
            styles: [__webpack_require__(/*! ./addlocation.component.css */ "./src/app/addlocation/addlocation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddlocationComponent);
    return AddlocationComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n<div class=\"w3-sidebar w3-card w3-bar-block w3-black\" style=\"width:15%\">\n  <h1>Reboxit</h1>\n  <a  routerLink=\"/admin\" class=\"w3-bar-item w3-button\">User Pickups</a>\n  <a  routerLink=\"/adminsdreqaggre\" class=\"w3-bar-item w3-button\">Scrap Dealer Request</a>\n  <a  routerLink=\"/adminaggrereqrec\" class=\"w3-bar-item w3-button\">Aggregator Request</a>\n  <a  routerLink=\"/adminrec\" class=\"w3-bar-item w3-button\">Recycler Request</a>\n  <a  routerLink=\"/addlocation\" class=\"w3-bar-item w3-button\">Add a new location</a>\n  <a  (click)=\"logout()\" class=\"w3-bar-item w3-button\">logout</a>\n\n\n</div>\n\n<div style=\"margin-left:15%\">\n\n    <header class=\"w3-container w3-dark-grey text-center\">\n      <h1>Admin</h1>\n    </header>\n\n    <div class=\" table-responsive\">\n\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Address</th>\n                <th scope=\"col\">Location</th>\n                <th scope=\"col\">Phone</th>\n                <th scope=\"col\">Alternate Phone</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Payment Mode</th>\n                <th scope=\"col\">Slot</th>\n                <th scope=\"col\">Estimated Wt</th>\n                <th scope=\"col\">Asssociate Type</th>\n                <th scope=\"col\">Associate</th>\n                <th scope=\"col\">Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let i of pickup let idx=index\">\n                <td>{{i[\"name\"]}}</td>\n                <td>{{i[\"address\"]}}</td>\n                <td>{{i[\"location\"]}}</td>\n                <td>{{i[\"phone\"]}}</td>\n                <td>{{i[\"alterphone\"]}}</td>\n                <td>{{i[\"email\"]}}</td>\n                <td>{{i[\"payment\"]}}</td>\n                <td>{{i[\"slot\"]}}</td>\n                <td>{{i[\"totalwt\"]}} Kgs</td>\n                <td>\n                  <select [(ngModel)]=\"assTypeSelect[idx]\" (change)=\"updateType(idx)\">\n                    <option *ngFor=\"let m of asstype\" value=\"{{m}}\">\n                      {{m}}\n                    </option>\n                  </select>\n                </td>\n\n                <td>\n                    <select [(ngModel)]=\"assSelect[idx]\" (change)=\"updateAss()\">\n                      <option *ngFor=\"let m of assSelectOptions[idx]\" value=\"{{m}}\">\n                        {{m[0]}}\n                      </option>\n                    </select>\n                </td>\n                <td>\n                  <button class=\"btn btn-primary\" (click)=\"submit(idx)\" [disabled]=\"!assSelect[idx]\">Assign</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n      \n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(db, router, auth) {
        this.db = db;
        this.router = router;
        this.auth = auth;
        this.pickup = [];
        this.assTypeSelect = []; //stores type of associate for each row
        this.Scrap = [];
        this.Recycler = [];
        this.Aggregator = [];
        this.asstype = ["Scrap", "Recycler", "Aggregator"];
        this.assSelectOptions = []; //options for each row
        this.assSelect = []; //actual associated
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.collection("pickup_user", function (ref) { return ref.where("assigned", "==", false); }).snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                _this.pickup.push(res[i].payload.doc.data());
                _this.pickup[i]["id"] = res[i].payload.doc.id;
                _this.assTypeSelect.push(_this.asstype[0]);
            }
            _this.db.collection("user_website", function (ref) { return ref.where("role", "==", "associate"); }).snapshotChanges().subscribe(function (res) {
                for (var i = 0; i < res.length; i++) {
                    _this[res[i].payload.doc.data()["usertype"]].push([res[i].payload.doc.data()["companyname"], res[i].payload.doc.id]);
                }
                for (var i = 0; i < _this.pickup.length; i++) {
                    // console.log("-->",this.assTypeSelect[i]);
                    _this.assSelectOptions.push(_this[_this.assTypeSelect[i]]);
                    _this.assSelect[i] = _this.assSelectOptions[i][0];
                }
            });
        });
        // console.log(this.pickup.length);
        console.log(this.pickup);
        console.log("asstype", this.asstype);
        console.log("ass select options", this.assSelectOptions);
        console.log("ass type selected", this.assTypeSelect);
        console.log("Ass selected", this.assSelect);
        // console.log(this.Scrap);
        // console.log(this.Aggregator);
        // console.log(this.Recycler);
    };
    AdminComponent.prototype.updateType = function (i) {
        console.log(this.assTypeSelect);
        this.assSelectOptions[i] = this[this.assTypeSelect[i]];
        this.assSelect[i] = this.assSelectOptions[i][0];
        console.log(this.assSelect);
    };
    AdminComponent.prototype.updateAss = function () {
        console.log(this.assSelect);
    };
    AdminComponent.prototype.submit = function (k) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pickup[k].assigned = true;
                        this.pickup[k].assignedTo = this.assSelect[k][1];
                        return [4 /*yield*/, this.db.doc("pickup_user/" + this.pickup[k].id).update(this.pickup[k])];
                    case 1:
                        _a.sent();
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/adminaggrereqrec/adminaggrereqrec.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/adminaggrereqrec/adminaggrereqrec.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminaggrereqrec/adminaggrereqrec.component.html":
/*!******************************************************************!*\
  !*** ./src/app/adminaggrereqrec/adminaggrereqrec.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n<div class=\"w3-sidebar w3-card w3-bar-block w3-black\" style=\"width:15%\">\n  <h1>Reboxit</h1>\n  <a  routerLink=\"/admin\" class=\"w3-bar-item w3-button\">User Pickups</a>\n  <a  routerLink=\"/adminsdreqaggre\" class=\"w3-bar-item w3-button\">Scrap Dealer Request</a>\n  <a  routerLink=\"/adminaggrereqrec\" class=\"w3-bar-item w3-button\">Aggregator Request</a>\n  <a  routerLink=\"/adminrec\" class=\"w3-bar-item w3-button\">Recycler Request</a>\n  <a  routerLink=\"/addlocation\" class=\"w3-bar-item w3-button\">Add a new location</a>\n  <a  (click)=\"logout()\" class=\"w3-bar-item w3-button\">Logout</a>\n\n\n</div>\n\n<div style=\"margin-left:15%\">\n\n    <header class=\"w3-container w3-dark-grey text-center\">\n      <h1>Admin</h1>\n    </header>\n    <div class=\"table-responsive\">\n\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Address</th>\n                <th scope=\"col\">Location</th>\n                <th scope=\"col\">Phone</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Scrap Type</th>\n                <th scope=\"col\">Slot</th>\n                <th scope=\"col\">Estimated Wt</th>\n                <th scope=\"col\">Select Asssociate</th>\n                <th scope=\"col\">Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let i of pickup let idx=index\">\n                <td>{{i[\"name\"]}}</td>\n                <td>{{i[\"address\"]}}</td>\n                <td>{{i[\"location\"]}}</td>\n                <td>{{i[\"phone\"]}}</td>\n                <td>{{i[\"email\"]}}</td>\n                <td>{{i[\"scraptype\"]}}</td>\n                <td>{{i[\"slot\"]}}</td>\n                <td>{{i[\"totalwt\"]}} Kgs</td>\n                <td><button class=\"btn btn-warning\" (click)=\"open(content,idx)\">select</button></td>\n                <td>\n                  <button class=\"btn btn-primary\" (click)=\"submit(idx)\" [disabled]=\"!assSelect[idx]\">Assign</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n      \n    </div>\n\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Details</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click');\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n        <div class=\"form-row align-items-center\">\n              <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"asst\">Associate Type</label>\n                <select class=\"form-control form-control-sm\" id=\"asst\" name=\"asst\" [(ngModel)]=\"uniType\" (change)=\"updateList()\">\n                  <option *ngFor=\"let m of asstype\" value={{m}}>{{m}}</option>\n                </select>\n              </div>\n\n\n              <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"asstse\">Associate</label>\n                <select class=\"form-control form-control-sm\" id=\"asstse\" [(ngModel)]=\"uniAss\" name=\"asst\" (change)=\"updateAss()\">\n                  <option *ngFor=\"let m of option_meh\" value={{m[0]}}>{{m[1]}}</option>\n                </select>\n              </div>\n        </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click');\">Save</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/adminaggrereqrec/adminaggrereqrec.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/adminaggrereqrec/adminaggrereqrec.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminaggrereqrecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminaggrereqrecComponent", function() { return AdminaggrereqrecComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminaggrereqrecComponent = /** @class */ (function () {
    function AdminaggrereqrecComponent(db, router, modalService, auth) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.modalService = modalService;
        this.auth = auth;
        this.pickup = [];
        this.assTypeSelect = []; //stores type of associate for each row
        this.Recycler = [];
        this.Aggregator = [];
        this.asstype = ["Recycler", "Aggregator"];
        this.assSelect = []; //actual associated
        this.associate = [];
        this.uni = [];
        this.start = true;
        this.db.collection("pickup_aggre", function (ref) { return ref.where("assigned", "==", false); }).snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.pickup.push(res[i].payload.doc.data());
                _this.pickup[i]["id"] = res[i].payload.doc.id;
            }
        });
        this.db.collection("user_website").snapshotChanges().subscribe(function (res2) {
            for (var j in res2) {
                _this.associate.push(res2[j].payload.doc.data());
                _this.associate[j]["id"] = res2[j].payload.doc.id;
            }
        });
    }
    AdminaggrereqrecComponent.prototype.open = function (content, id) {
        if (this.start) {
            this.update();
            this.start = false;
        }
        else {
        }
        this.lastindex = id;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
        });
        this.uniAss = this.assSelect[id];
        this.uniType = this.assTypeSelect[id];
        this.option_meh = this.Recycler[id];
        console.log(id);
        console.log(this.asstype);
        console.log(this.associate);
    };
    AdminaggrereqrecComponent.prototype.ngOnInit = function () {
    };
    AdminaggrereqrecComponent.prototype.update = function () {
        console.log(this.associate);
        for (var i in this.pickup) {
            this.Recycler.push([]);
            this.Aggregator.push([]);
            for (var j in this.associate) {
                if (this.associate[j]["usertype"] != "Scrap" && this.pickup[i]["location"] == this.associate[j]["location"] && this.pickup[i]["scraptype"] == this.associate[j]["scrapetype"]) {
                    // console.log(i,j,this[this.associate[j]["usertype"]][i]);
                    this[this.associate[j]["usertype"]][i].push([this.associate[j]["id"], this.associate[j]["companyname"], this.associate[j]["scrapetype"]]);
                }
            }
        }
        for (var i in this.pickup) {
            this.assTypeSelect.push(null);
            this.assSelect.push(null);
        }
        // console.log("rec",this.Recycler);
        // console.log("aggre",this.Aggregator);
    };
    AdminaggrereqrecComponent.prototype.updateList = function () {
        this.option_meh = this[this.uniType][this.lastindex];
        this.assTypeSelect[this.lastindex] = this.uniType;
        this.uniAss = null;
        this.assSelect[this.lastindex] = null;
        console.log("unia", this.uniAss);
        console.log("unitype", this.uniType);
    };
    AdminaggrereqrecComponent.prototype.updateAss = function () {
        this.assSelect[this.lastindex] = this.uniAss;
        console.log(this.assSelect);
        console.log(this.assTypeSelect);
    };
    AdminaggrereqrecComponent.prototype.submit = function (idx) {
        if (this.assSelect[idx]) {
            this.pickup[idx]["assigned"] = true;
            this.pickup[idx]["assignedTo"] = this.assSelect[idx];
            this.db.collection("pickup_aggre").doc(this.pickup[idx]["id"]).update(this.pickup[idx]).then(function (res) {
                console.log("yeah");
                window.location.reload();
            });
        }
        else {
            alert("select a associate before");
        }
    };
    AdminaggrereqrecComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AdminaggrereqrecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminaggrereqrec',
            template: __webpack_require__(/*! ./adminaggrereqrec.component.html */ "./src/app/adminaggrereqrec/adminaggrereqrec.component.html"),
            styles: [__webpack_require__(/*! ./adminaggrereqrec.component.css */ "./src/app/adminaggrereqrec/adminaggrereqrec.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AdminaggrereqrecComponent);
    return AdminaggrereqrecComponent;
}());



/***/ }),

/***/ "./src/app/adminrec/adminrec.component.css":
/*!*************************************************!*\
  !*** ./src/app/adminrec/adminrec.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminrec/adminrec.component.html":
/*!**************************************************!*\
  !*** ./src/app/adminrec/adminrec.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n<div class=\"w3-sidebar w3-card w3-bar-block w3-black\" style=\"width:15%\">\n  <h1>Reboxit</h1>\n  <a  routerLink=\"/admin\" class=\"w3-bar-item w3-button\">User Pickups</a>\n  <a  routerLink=\"/adminsdreqaggre\" class=\"w3-bar-item w3-button\">Scrap Dealer Request</a>\n  <a  routerLink=\"/adminaggrereqrec\" class=\"w3-bar-item w3-button\">Aggregator Request</a>\n  <a  routerLink=\"/adminrec\" class=\"w3-bar-item w3-button\">Recycler Request</a>\n  <a  routerLink=\"/addlocation\" class=\"w3-bar-item w3-button\">Add a new location</a>\n  <a  (click)=\"logout()\" class=\"w3-bar-item w3-button\">Logout</a>\n\n\n</div>\n\n<div style=\"margin-left:15%\">\n\n    <header class=\"w3-container w3-dark-grey text-center\">\n      <h1>Admin</h1>\n    </header>\n    <div class=\" table-responsive\">\n\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Address</th>\n                <th scope=\"col\">Location</th>\n                <th scope=\"col\">Phone</th>\n                <th scope=\"col\">Alternate Phone</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Scrap Type</th>\n                <th scope=\"col\">Estimated Wt</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let i of pickup let idx=index\">\n                <td>{{i[\"name\"]}}</td>\n                <td>{{i[\"address\"]}}</td>\n                <td>{{i[\"location\"]}}</td>\n                <td>{{i[\"phone\"]}}</td>\n                <td>{{i[\"alterphone\"]}}</td>\n                <td>{{i[\"email\"]}}</td>\n                <td>{{i[\"scraptype\"]}}</td>\n                <td>{{i[\"totalwt\"]}} Kgs</td>\n              </tr>\n            </tbody>\n          </table>\n      \n    </div>\n\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Details</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click');\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n        <div class=\"form-row align-items-center\">\n              <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"asst\">Associate Type</label>\n                <select class=\"form-control form-control-sm\" id=\"asst\" name=\"asst\" [(ngModel)]=\"uniType\" (change)=\"updateList()\">\n                  <option *ngFor=\"let m of asstype\" value={{m}}>{{m}}</option>\n                </select>\n              </div>\n\n\n              <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"asstse\">Associate</label>\n                <select class=\"form-control form-control-sm\" id=\"asstse\" [(ngModel)]=\"uniAss\" name=\"asst\" (change)=\"updateAss()\">\n                  <option *ngFor=\"let m of option_meh\" value={{m[0]}}>{{m[1]}}</option>\n                </select>\n              </div>\n        </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click');\">Save</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/adminrec/adminrec.component.ts":
/*!************************************************!*\
  !*** ./src/app/adminrec/adminrec.component.ts ***!
  \************************************************/
/*! exports provided: AdminrecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminrecComponent", function() { return AdminrecComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminrecComponent = /** @class */ (function () {
    function AdminrecComponent(db, router, modalService, auth) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.modalService = modalService;
        this.auth = auth;
        this.pickup = [];
        this.assTypeSelect = []; //stores type of associate for each row
        this.Recycler = [];
        this.Aggregator = [];
        this.db.collection("pickup_rec").snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.pickup.push(res[i].payload.doc.data());
                _this.pickup[i]["id"] = res[i].payload.doc.id;
            }
        });
    }
    AdminrecComponent.prototype.ngOnInit = function () {
    };
    AdminrecComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AdminrecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminrec',
            template: __webpack_require__(/*! ./adminrec.component.html */ "./src/app/adminrec/adminrec.component.html"),
            styles: [__webpack_require__(/*! ./adminrec.component.css */ "./src/app/adminrec/adminrec.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AdminrecComponent);
    return AdminrecComponent;
}());



/***/ }),

/***/ "./src/app/adminsdreqaggre/adminsdreqaggre.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adminsdreqaggre/adminsdreqaggre.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminsdreqaggre/adminsdreqaggre.component.html":
/*!****************************************************************!*\
  !*** ./src/app/adminsdreqaggre/adminsdreqaggre.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n<div class=\"w3-sidebar w3-card w3-bar-block w3-black\" style=\"width:15%\">\n  <h1>Reboxit</h1>\n  <a  routerLink=\"/admin\" class=\"w3-bar-item w3-button\">User Pickups</a>\n  <a  routerLink=\"/adminsdreqaggre\" class=\"w3-bar-item w3-button\">Scrap Dealer Request</a>\n  <a  routerLink=\"/adminaggrereqrec\" class=\"w3-bar-item w3-button\">Aggregator Request</a>\n  <a  routerLink=\"/adminrec\" class=\"w3-bar-item w3-button\">Recycler Request</a>\n  <a  routerLink=\"/addlocation\" class=\"w3-bar-item w3-button\">Add a new location</a>\n  <a  (click)=\"logout()\" class=\"w3-bar-item w3-button\">Logout</a>\n\n</div>\n\n<div style=\"margin-left:15%\">\n\n    <header class=\"w3-container w3-dark-grey text-center\">\n      <h1>Admin</h1>\n    </header>\n    <div class=\"table-responsive\">\n\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Address</th>\n                <th scope=\"col\">Location</th>\n                <th scope=\"col\">Phone</th>\n                <th scope=\"col\">Alternate</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Scrap Type</th>\n                <th scope=\"col\">Slot</th>\n                <th scope=\"col\">Estimated Wt</th>\n                <th scope=\"col\">Select Asssociate</th>\n                <th scope=\"col\">Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let i of pickup let idx=index\">\n                <td>{{i[\"name\"]}}</td>\n                <td>{{i[\"address\"]}}</td>\n                <td>{{i[\"location\"]}}</td>\n                <td>{{i[\"phone\"]}}</td>\n                <td>{{i[\"alterphone\"]}}</td>\n                <td>{{i[\"email\"]}}</td>\n                <td>{{i[\"scraptype\"]}}</td>\n                <td>{{i[\"slot\"]}}</td>\n                <td>{{i[\"totalwt\"]}} Kgs</td>\n                <td><button class=\"btn btn-warning\" (click)=\"open(content,idx)\">select</button></td>\n                <td>\n                  <button class=\"btn btn-primary\" (click)=\"submit(idx)\" [disabled]=\"!assSelect[idx]\">Assign</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n      \n    </div>\n\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Details</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click');\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n        <div class=\"form-row align-items-center\">\n              <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"asst\">Associate Type</label>\n                <select class=\"form-control form-control-sm\" id=\"asst\" name=\"asst\" [(ngModel)]=\"uniType\" (change)=\"updateList()\">\n                  <option *ngFor=\"let m of asstype\" value={{m}}>{{m}}</option>\n                </select>\n              </div>\n\n\n              <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"asstse\">Associate</label>\n                <select class=\"form-control form-control-sm\" id=\"asstse\" [(ngModel)]=\"uniAss\" name=\"asst\" (change)=\"updateAss()\">\n                  <option *ngFor=\"let m of option_meh\" value={{m[0]}}>{{m[1]}}</option>\n                </select>\n              </div>\n        </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click');\">Save</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/adminsdreqaggre/adminsdreqaggre.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminsdreqaggre/adminsdreqaggre.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminsdreqaggreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsdreqaggreComponent", function() { return AdminsdreqaggreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminsdreqaggreComponent = /** @class */ (function () {
    function AdminsdreqaggreComponent(db, router, modalService, auth) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.modalService = modalService;
        this.auth = auth;
        this.pickup = [];
        this.assTypeSelect = []; //stores type of associate for each row
        this.Recycler = [];
        this.Aggregator = [];
        this.asstype = ["Recycler", "Aggregator"];
        this.assSelect = []; //actual associated
        this.associate = [];
        this.uni = [];
        this.start = true;
        this.db.collection("pickup_sd", function (ref) { return ref.where("assigned", "==", false); }).snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.pickup.push(res[i].payload.doc.data());
                _this.pickup[i]["id"] = res[i].payload.doc.id;
            }
        });
        this.db.collection("user_website").snapshotChanges().subscribe(function (res2) {
            for (var j in res2) {
                _this.associate.push(res2[j].payload.doc.data());
                _this.associate[j]["id"] = res2[j].payload.doc.id;
            }
        });
    }
    AdminsdreqaggreComponent.prototype.open = function (content, id) {
        if (this.start) {
            this.update();
            this.start = false;
        }
        else {
        }
        this.lastindex = id;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
        });
        this.uniAss = this.assSelect[id];
        this.uniType = this.assTypeSelect[id];
        this.option_meh = this.Recycler[id];
        console.log(id);
        console.log(this.asstype);
        console.log(this.associate);
    };
    AdminsdreqaggreComponent.prototype.ngOnInit = function () {
    };
    AdminsdreqaggreComponent.prototype.update = function () {
        console.log(this.associate);
        for (var i in this.pickup) {
            this.Recycler.push([]);
            this.Aggregator.push([]);
            for (var j in this.associate) {
                if (this.associate[j]["usertype"] != "Scrap" && this.pickup[i]["location"] == this.associate[j]["location"] && this.pickup[i]["scraptype"] == this.associate[j]["scrapetype"]) {
                    // console.log(i,j,this[this.associate[j]["usertype"]][i]);
                    this[this.associate[j]["usertype"]][i].push([this.associate[j]["id"], this.associate[j]["companyname"], this.associate[j]["scrapetype"]]);
                }
            }
        }
        for (var i in this.pickup) {
            this.assTypeSelect.push(null);
            this.assSelect.push(null);
        }
        // console.log("rec",this.Recycler);
        // console.log("aggre",this.Aggregator);
    };
    AdminsdreqaggreComponent.prototype.updateList = function () {
        this.option_meh = this[this.uniType][this.lastindex];
        this.assTypeSelect[this.lastindex] = this.uniType;
        this.uniAss = null;
        this.assSelect[this.lastindex] = null;
        console.log("unia", this.uniAss);
        console.log("unitype", this.uniType);
    };
    AdminsdreqaggreComponent.prototype.updateAss = function () {
        this.assSelect[this.lastindex] = this.uniAss;
        console.log(this.assSelect);
        console.log(this.assTypeSelect);
    };
    AdminsdreqaggreComponent.prototype.submit = function (idx) {
        if (this.assSelect[idx]) {
            this.pickup[idx]["assigned"] = true;
            this.pickup[idx]["assignedTo"] = this.assSelect[idx];
            this.db.collection("pickup_sd").doc(this.pickup[idx]["id"]).update(this.pickup[idx]).then(function (res) {
                console.log("yeah");
                window.location.reload();
            });
        }
        else {
            alert("select a associate before");
        }
    };
    AdminsdreqaggreComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AdminsdreqaggreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminsdreqaggre',
            template: __webpack_require__(/*! ./adminsdreqaggre.component.html */ "./src/app/adminsdreqaggre/adminsdreqaggre.component.html"),
            styles: [__webpack_require__(/*! ./adminsdreqaggre.component.css */ "./src/app/adminsdreqaggre/adminsdreqaggre.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AdminsdreqaggreComponent);
    return AdminsdreqaggreComponent;
}());



/***/ }),

/***/ "./src/app/aggregator/aggregator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/aggregator/aggregator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navcl li a{\n    color: white;\n}"

/***/ }),

/***/ "./src/app/aggregator/aggregator.component.html":
/*!******************************************************!*\
  !*** ./src/app/aggregator/aggregator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-info col-lg-12\">\n      <div class=\"text-center h1\" style=\"color:white;\">{{companyname}}\n      </div>\n</div>\n  <div class=\"container-fluid mh-100\">\n      <div class=\"row\">\n        <div class=\"col-sm-2 col-lg-2 bg-dark\">\n          <nav class=\"navbar navbar-default navbar-fixed-side\" style=\"min-height:100vh\">\n              <ul class=\"nav navbar-nav\">\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link active\" routerLink=\"/aggregator\">Pickups</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link active\" routerLink=\"/aggrereqadmin\">Request Admin</a>\n                  </li>\n                  <li class=\"nav-item\">\n                        <a class=\"nav-link active\" routerLink=\"\" (click)=\"logout()\">Logout</a>\n                  </li>\n                </ul>\n          </nav>\n        </div>\n        <div class=\"col-sm-10 col-lg-10\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                        <th scope=\"col\">Name</th>\n                        <th scope=\"col\">Address</th>\n                        <th scope=\"col\">Phone</th>\n                        <th scope=\"col\">Email</th>\n                        <th scope=\"col\">Slot</th>\n                        <th scope=\"col\">Scrap Type</th>\n                        <th scope=\"col\">Estimated Wt</th>\n                        <th scope=\"col\">Estimated Cost</th>\n                        <th scope=\"col\">Updated Details</th>\n                        <th scope=\"col\">Final Cost</th>\n                        <th scope=\"col\">Status</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let i of assignedPickups let idx=index\">\n                        <td>{{i[\"name\"]}}</td>\n                        <td>{{i[\"address\"]}}</td>\n                        <td>{{i[\"phone\"]}}</td>\n                        <td>{{i[\"email\"]}}</td>\n                        <td>{{i[\"slot\"]}}</td>\n                        <td>{{i[\"scraptype\"]}}</td>\n                        <td>{{i[\"totalwt\"]}} Kgs</td>\n                        <td>Rs {{i[\"totalamt\"]}}</td>\n                        <td>\n                              <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content,idx)\">Update</button>\n                        </td>\n                        <td>Rs {{finalcost[idx]}}</td>\n                        <td>\n                          <button class=\"btn btn-lg btn-outline-info\" (click)=\"submit(idx)\">Confirm</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n  \n\n\n  <ng-template #content let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Details</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click');updateCost();\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n            <div class=\"form-row align-items-center\">\n                <div class=\"col-sm-6 my-1\">\n                    <label class=\"control-label\" for=\"scrape\">update the amount of {{currscrape}}</label>\n                    <input type=\"number\" class=\"form-control form-control-sm\" id=\"scrape\" name=\"scrape\" [(ngModel)]=\"currwt\" (change)=\"showCart()\">\n                  </div>\n            </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click');updateCost();\">Save</button>\n      </div>\n   </ng-template>"

/***/ }),

/***/ "./src/app/aggregator/aggregator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/aggregator/aggregator.component.ts ***!
  \****************************************************/
/*! exports provided: AggregatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregatorComponent", function() { return AggregatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AggregatorComponent = /** @class */ (function () {
    function AggregatorComponent(formBuilder, router, db, modalService, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.db = db;
        this.modalService = modalService;
        this.auth = auth;
        this.assignedPickups = [];
        this.finalcost = [];
        this.finalwt = [];
    }
    AggregatorComponent.prototype.open = function (content, id) {
        this.currscrape = this.associateDetails["scrapetype"];
        this.currwt = this.finalwt[id];
        this.item = this.assignedPickups[id]["scrapetype"];
        this.lastIndex = id;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
        });
    };
    AggregatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.associateDetails = JSON.parse(localStorage.getItem("user"));
        this.companyname = this.associateDetails["companyname"];
        this.db.collection("pickup_sd", function (ref) { return ref.where("assigned", "==", true).where("assignedTo", "==", _this.associateDetails["id"]).where("collected", "==", false); })
            .snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                var k = res[i].payload.doc.data();
                k["id"] = res[i].payload.doc.id;
                _this.assignedPickups.push(k);
                _this.finalcost[i] = _this.assignedPickups[i]["totalamt"];
                _this.finalwt[i] = _this.assignedPickups[i]["totalwt"];
            }
        });
        console.log(this.assignedPickups);
    };
    AggregatorComponent.prototype.showCart = function () {
        this.finalwt[this.lastIndex] = this.currwt;
        this.finalcost[this.lastIndex] = this.finalwt[this.lastIndex] * 10;
    };
    AggregatorComponent.prototype.updateCost = function () {
    };
    AggregatorComponent.prototype.submit = function (k) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assignedPickups[k]["collected"] = true;
                        this.assignedPickups[k]["totalamt"] = this.finalcost[k];
                        this.assignedPickups[k]["totalwt"] = this.finalwt[k];
                        return [4 /*yield*/, this.db.doc("pickup_sd/" + this.assignedPickups[k].id).update(this.assignedPickups[k]).then(function () {
                                console.log("successful");
                                window.location.reload();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AggregatorComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AggregatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aggregator',
            template: __webpack_require__(/*! ./aggregator.component.html */ "./src/app/aggregator/aggregator.component.html"),
            styles: [__webpack_require__(/*! ./aggregator.component.css */ "./src/app/aggregator/aggregator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AggregatorComponent);
    return AggregatorComponent;
}());



/***/ }),

/***/ "./src/app/aggrereqadmin/aggrereqadmin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/aggrereqadmin/aggrereqadmin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo & navigation*/\n\n.bg1{\n    background: #3d882f;\n}\n\n.drag ul li a{\ncolor:white;\nfont-size: 18px;\npadding: 0 15px;\n}\n\n.poi{\ncursor: pointer;\n}"

/***/ }),

/***/ "./src/app/aggrereqadmin/aggrereqadmin.component.html":
/*!************************************************************!*\
  !*** ./src/app/aggrereqadmin/aggrereqadmin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n            <div class=\"\">\n                <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo1.png\"></a>\n              \n             </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        </div>\n\n    </div>\n\n    \n     <!-----------Navigation Starts Here-->\n   \n   <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n       <a class=\"navbar-brand\" href=\"#\"></a>\n       <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n         <span class=\"navbar-toggler-icon\"></span>\n       </button>\n     \n       <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n         <h4>{{companyname}}</h4>\n         <ul class=\"navbar-nav ml-auto \">\n\n              <li class=\"nav-item poi\">\n                  <a class=\"nav-link\" routerLink=\"/aggregator\" ><p id=\"size\">Assigned pickups</p></a>\n                </li>\n              <li class=\"nav-item poi\">\n                <a class=\"nav-link\" routerLink=\"/aggrereqadmin\"><p style=\"font-size:18px;\">Request Admin</p></a>\n              </li>\n\n              <li class=\"nav-item poi\">\n                <a class=\"nav-link\" (click)=\"logout()\"><p style=\"font-size:18px;\">Logout</p></a>\n              </li>\n         </ul>\n       \n       </div>\n     </nav>\n\n\n\n\n\n     <div class=\"d-flex justify-content-center align-items-center container card bg-dark text-white\" >\n      <form [formGroup]=\"pickupForm\" class=\"form-horizontal col-md-8\">\n            <div *ngFor=\"let p of prods\" class=\"form-group row pt-2\">\n                <label class=\"control-label col-sm-2\" for=\"{{p}}\">{{p}}</label>\n                <div class=\"col-sm-10\">\n                  <input class=\"form-control\" formControlName=\"{{p}}\" type=\"number\" [(ngModel)]=\"cart[p]\">\n                </div>\n                \n            </div>\n\n\n\n\n\n\n\n\n\n          \n        \n              <div class=\"text-center\">  \n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"!pickupForm.valid\">\n                Proceed\n                </button>\n              </div>\n        </form>\n   </div>"

/***/ }),

/***/ "./src/app/aggrereqadmin/aggrereqadmin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/aggrereqadmin/aggrereqadmin.component.ts ***!
  \**********************************************************/
/*! exports provided: AggrereqadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggrereqadminComponent", function() { return AggrereqadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AggrereqadminComponent = /** @class */ (function () {
    function AggrereqadminComponent(formBuilder, authService, db, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.db = db;
        this.router = router;
        this.location = [];
        this.cart = {};
        this.prods = [];
    }
    AggrereqadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
        this.companyname = this.user["companyname"];
        this.pickupForm = this.formBuilder.group({});
        console.log("mew", JSON.parse(localStorage.getItem("user")));
        this.states = ["Andhra Pradesh", "Arunachal Pradesh ", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "National Capital Territory of Delhi", "Puducherry"];
        this.db.collection("locations").snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.location.push(res[i].payload.doc.id);
            }
        });
        this.prods.push(this.user["scrapetype"]);
        this.pickupForm.addControl(this.user["scrapetype"], new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        this.cart[this.user["scrapetype"]] = 0;
    };
    AggrereqadminComponent.prototype.onSubmit = function () {
        for (var m in this.cart) {
            if (this.cart[m] > 0) {
                var u = JSON.parse(localStorage.getItem("user"));
                var req = {};
                req["scraptype"] = u["scrapetype"];
                req["totalwt"] = this.cart[m];
                req["name"] = u["username"];
                req["email"] = u["email"];
                req["phone"] = u["phone"];
                req["address"] = u["address"];
                req["userid"] = u["id"];
                req["location"] = u["location"];
                req["assigned"] = false;
                req["assignedTo"] = "";
                req["collected"] = false;
                if (u["pincode"])
                    req["pincode"] = u["pincode"];
                this.db.collection("pickup_aggre").add(req).then(function (res) {
                    console.log("uploaded", req);
                    window.location.reload();
                });
            }
        }
    };
    AggrereqadminComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AggrereqadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aggrereqadmin',
            template: __webpack_require__(/*! ./aggrereqadmin.component.html */ "./src/app/aggrereqadmin/aggrereqadmin.component.html"),
            styles: [__webpack_require__(/*! ./aggrereqadmin.component.css */ "./src/app/aggrereqadmin/aggrereqadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AggrereqadminComponent);
    return AggrereqadminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n<!-- <app-sd></app-sd> -->\n\n<!-- <app-associate></app-associate> -->\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Shopping Cart';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _design_design_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./design/design.component */ "./src/app/design/design.component.ts");
/* harmony import */ var _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userhome/userhome.component */ "./src/app/userhome/userhome.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pickup_pickup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pickup/pickup.component */ "./src/app/pickup/pickup.component.ts");
/* harmony import */ var _sd_sd_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sd/sd.component */ "./src/app/sd/sd.component.ts");
/* harmony import */ var _collections_collections_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./collections/collections.component */ "./src/app/collections/collections.component.ts");
/* harmony import */ var _sub_collection_sub_collection_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sub-collection/sub-collection.component */ "./src/app/sub-collection/sub-collection.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _associate_associate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./associate/associate.component */ "./src/app/associate/associate.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _recycler_recycler_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./recycler/recycler.component */ "./src/app/recycler/recycler.component.ts");
/* harmony import */ var _aggregator_aggregator_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./aggregator/aggregator.component */ "./src/app/aggregator/aggregator.component.ts");
/* harmony import */ var _pricelist_pricelist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pricelist/pricelist.component */ "./src/app/pricelist/pricelist.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _more_more_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./more/more.component */ "./src/app/more/more.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _scraperequestadmin_scraperequestadmin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./scraperequestadmin/scraperequestadmin.component */ "./src/app/scraperequestadmin/scraperequestadmin.component.ts");
/* harmony import */ var _assignedaggre_assignedaggre_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assignedaggre/assignedaggre.component */ "./src/app/assignedaggre/assignedaggre.component.ts");
/* harmony import */ var _aggrereqadmin_aggrereqadmin_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./aggrereqadmin/aggrereqadmin.component */ "./src/app/aggrereqadmin/aggrereqadmin.component.ts");
/* harmony import */ var _recyclereqadmin_recyclereqadmin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./recyclereqadmin/recyclereqadmin.component */ "./src/app/recyclereqadmin/recyclereqadmin.component.ts");
/* harmony import */ var _adminsdreqaggre_adminsdreqaggre_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./adminsdreqaggre/adminsdreqaggre.component */ "./src/app/adminsdreqaggre/adminsdreqaggre.component.ts");
/* harmony import */ var _adminaggrereqrec_adminaggrereqrec_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./adminaggrereqrec/adminaggrereqrec.component */ "./src/app/adminaggrereqrec/adminaggrereqrec.component.ts");
/* harmony import */ var _adminrec_adminrec_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./adminrec/adminrec.component */ "./src/app/adminrec/adminrec.component.ts");
/* harmony import */ var _addlocation_addlocation_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./addlocation/addlocation.component */ "./src/app/addlocation/addlocation.component.ts");
/* harmony import */ var _signupadmin_signupadmin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./signupadmin/signupadmin.component */ "./src/app/signupadmin/signupadmin.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































// routing starts here
var routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"] },
    { path: 'content', component: _content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"] },
    { path: 'design', component: _design_design_component__WEBPACK_IMPORTED_MODULE_14__["DesignComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"] },
    { path: 'pickup', component: _pickup_pickup_component__WEBPACK_IMPORTED_MODULE_19__["PickupComponent"] },
    { path: 'collections', component: _collections_collections_component__WEBPACK_IMPORTED_MODULE_21__["CollectionsComponent"] },
    { path: 'subcollections/:id', component: _sub_collection_sub_collection_component__WEBPACK_IMPORTED_MODULE_22__["SubCollectionComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"] },
    { path: 'scrape', component: _sd_sd_component__WEBPACK_IMPORTED_MODULE_20__["SdComponent"] },
    { path: 'recycler', component: _recycler_recycler_component__WEBPACK_IMPORTED_MODULE_27__["RecyclerComponent"] },
    { path: 'aggregator', component: _aggregator_aggregator_component__WEBPACK_IMPORTED_MODULE_28__["AggregatorComponent"] },
    { path: 'associate', component: _associate_associate_component__WEBPACK_IMPORTED_MODULE_25__["AssociateComponent"] },
    { path: 'pricelist', component: _pricelist_pricelist_component__WEBPACK_IMPORTED_MODULE_29__["PricelistComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_30__["CheckoutComponent"] },
    { path: 'more', component: _more_more_component__WEBPACK_IMPORTED_MODULE_31__["MoreComponent"] },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_24__["ForgotComponent"] },
    { path: 'myaccount', component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_33__["MyaccountComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__["AdminComponent"] },
    { path: 'scrapereqadmin', component: _scraperequestadmin_scraperequestadmin_component__WEBPACK_IMPORTED_MODULE_35__["ScraperequestadminComponent"] },
    { path: 'allotedaggre', component: _assignedaggre_assignedaggre_component__WEBPACK_IMPORTED_MODULE_36__["AssignedaggreComponent"] },
    { path: 'aggrereqadmin', component: _aggrereqadmin_aggrereqadmin_component__WEBPACK_IMPORTED_MODULE_37__["AggrereqadminComponent"] },
    { path: 'recyclereqadmin', component: _recyclereqadmin_recyclereqadmin_component__WEBPACK_IMPORTED_MODULE_38__["RecyclereqadminComponent"] },
    { path: 'adminsdreqaggre', component: _adminsdreqaggre_adminsdreqaggre_component__WEBPACK_IMPORTED_MODULE_39__["AdminsdreqaggreComponent"] },
    { path: 'adminaggrereqrec', component: _adminaggrereqrec_adminaggrereqrec_component__WEBPACK_IMPORTED_MODULE_40__["AdminaggrereqrecComponent"] },
    { path: 'adminrec', component: _adminrec_adminrec_component__WEBPACK_IMPORTED_MODULE_41__["AdminrecComponent"] },
    { path: 'addlocation', component: _addlocation_addlocation_component__WEBPACK_IMPORTED_MODULE_42__["AddlocationComponent"] },
    { path: 'signupadmin', component: _signupadmin_signupadmin_component__WEBPACK_IMPORTED_MODULE_43__["SignupadminComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_12__["ProductlistComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_13__["ProductdetailsComponent"],
                _design_design_component__WEBPACK_IMPORTED_MODULE_14__["DesignComponent"],
                _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_15__["UserhomeComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _pickup_pickup_component__WEBPACK_IMPORTED_MODULE_19__["PickupComponent"],
                _sd_sd_component__WEBPACK_IMPORTED_MODULE_20__["SdComponent"],
                _collections_collections_component__WEBPACK_IMPORTED_MODULE_21__["CollectionsComponent"],
                _sub_collection_sub_collection_component__WEBPACK_IMPORTED_MODULE_22__["SubCollectionComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_24__["ForgotComponent"],
                _associate_associate_component__WEBPACK_IMPORTED_MODULE_25__["AssociateComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _recycler_recycler_component__WEBPACK_IMPORTED_MODULE_27__["RecyclerComponent"],
                _aggregator_aggregator_component__WEBPACK_IMPORTED_MODULE_28__["AggregatorComponent"],
                _pricelist_pricelist_component__WEBPACK_IMPORTED_MODULE_29__["PricelistComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_30__["CheckoutComponent"],
                _more_more_component__WEBPACK_IMPORTED_MODULE_31__["MoreComponent"],
                _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_33__["MyaccountComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__["AdminComponent"],
                _scraperequestadmin_scraperequestadmin_component__WEBPACK_IMPORTED_MODULE_35__["ScraperequestadminComponent"],
                _assignedaggre_assignedaggre_component__WEBPACK_IMPORTED_MODULE_36__["AssignedaggreComponent"],
                _aggrereqadmin_aggrereqadmin_component__WEBPACK_IMPORTED_MODULE_37__["AggrereqadminComponent"],
                _recyclereqadmin_recyclereqadmin_component__WEBPACK_IMPORTED_MODULE_38__["RecyclereqadminComponent"],
                _adminsdreqaggre_adminsdreqaggre_component__WEBPACK_IMPORTED_MODULE_39__["AdminsdreqaggreComponent"],
                _adminaggrereqrec_adminaggrereqrec_component__WEBPACK_IMPORTED_MODULE_40__["AdminaggrereqrecComponent"],
                _adminrec_adminrec_component__WEBPACK_IMPORTED_MODULE_41__["AdminrecComponent"],
                _addlocation_addlocation_component__WEBPACK_IMPORTED_MODULE_42__["AddlocationComponent"],
                _signupadmin_signupadmin_component__WEBPACK_IMPORTED_MODULE_43__["SignupadminComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_44__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_45__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"].forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assignedaggre/assignedaggre.component.css":
/*!***********************************************************!*\
  !*** ./src/app/assignedaggre/assignedaggre.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo & navigation*/\n\n.bg1{\n    background: #3c8a2e;\n}\n\n.poi{\ncursor: pointer;\n}\n\n/* top header css */\n\n.header-main{\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo{\n    width: 100px\n}\n\n.header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n\n.border-left{\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {   \n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i{\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover{\n    background-color: #4ca115;\n}\n\n.active  {\n    background-color: #4ca115;\n}\n\n/* top header css ends here */\n\n.box-container-top{\n    margin: 15px 0;\n}\n\n.box-container-top p.head{\n    font-size: 0.9rem;\n    text-align: center;\n}\n\n.box-container-top .box{\n    border: 2px solid #fff;\n    color: #000;\n    padding: 5px;\n    text-align: center;\n    margin: 15px auto;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\n.left{\n    background: #fdd6b9;\n}\n\n.right{\n    \n    background: #cfbbec;\n}\n\n.box-container-top .box p{\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n.icon{\n    margin-bottom: 0.3rem;\n}\n\n.body-container{\n    background-color: #dedcdd;\n}\n\n.disabled{\n    opacity: 0.5;\n}\n\n.borderless td {\n    border: none;\n    padding: 3px 12px;\n}\n\ntable{\n    font-weight: 700;\n    margin: 10px 0;\n}\n\n.v-c-center{\n    vertical-align: middle;\n    text-align: center;\n}\n\n.body-box{\n    background-color: #fff;\n    margin: 15px 10px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\n.btn-right{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.btn-right div{\n    width: 100%;\n}\n\n.btn-right .btn{\n    border-radius: 0;\n    width: 100%;\n    position: relative;\n    right: -35%;\n    font-weight: 700;\n    padding: 15px;\n}\n\n.btn-default{\n    color: #fff;\n    background-color: #aaadab;\n    border-color: #aaadab;\n}"

/***/ }),

/***/ "./src/app/assignedaggre/assignedaggre.component.html":
/*!************************************************************!*\
  !*** ./src/app/assignedaggre/assignedaggre.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-main\">\n  <div class=\"container\">\n    <div class=\"brand-logo\">\n      <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo.png\"></a>\n    </div>\n  </div>\n</div>\n\n\n<!-----------Navigation Starts Here-->\n<nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto \">\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/scrape\">Notifications</a>\n        </li>\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/scrapereqadmin\">Assigned Pickups</a>\n        </li>\n        <li class=\"nav-item poi active\">\n          <a class=\"nav-link\" routerLink=\"/allotedaggre\">Request to Admin</a>\n        </li>\n\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/scrapereqadmin\">Request to Aggregator</a>\n        </li>\n\n\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" (click)=\"logout()\"> Logout</a>\n        </li>\n\n      </ul>\n\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"body-container\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-5 box-container-top disabled\">\n            <p class=\"head\">Overloaded???Put a request for collecting</p>\n            <div class=\"box left\">\n              <p class=\"icon\"><i class=\"fa fa-plus\"></i></p>\n              <p>Add new request</p>\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n\n          </div>\n\n          <div class=\"col-md-5 box-container-top\">\n            <p class=\"head\">Who is picking up your scrap?</p>\n            <div class=\"box right\">\n              <p class=\"icon\">&nbsp;</p>\n              <p>Alloted</p>\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-md-6\">\n        <div class=\"row body-box\">\n          <div class=\"col-md-8\">\n            <table class=\"table borderless\">\n              <tbody>\n                <tr>\n                  <td>Aggregator name</td>\n                  <td>: Praveen Sinha</td>\n                </tr>\n                <tr>\n                  <td>Company Name</td>\n                  <td>: SSS&co.</td>\n                </tr>\n                <tr>\n                  <td>Call@</td>\n                  <td>: 2121212121</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-md-4 btn-right\">\n            <div>\n              <button class=\"btn btn-success\">Delivered</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--box starts here -->\n    <div class=\"row \">\n        <div class=\"col-md-6\">\n          <div class=\"row body-box\">\n            <div class=\"col-md-8\">\n              <table class=\"table borderless\">\n                <tbody>\n                  <tr>\n                    <td>Aggregator name</td>\n                    <td>: Praveen Sinha</td>\n                  </tr>\n                  <tr>\n                    <td>Company Name</td>\n                    <td>: SSS&co.</td>\n                  </tr>\n                  <tr>\n                    <td>Call@</td>\n                    <td>: 2121212121</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-4 btn-right\">\n              <div>\n                <button class=\"btn btn-default\">Delivered</button>\n              </div>\n            </div>\n          </div>\n        </div>  \n      </div><!--box ends here-->\n\n      <!--box starts here -->\n    <div class=\"row \">\n        <div class=\"col-md-6\">\n          <div class=\"row body-box\">\n            <div class=\"col-md-8\">\n              <table class=\"table borderless\">\n                <tbody>\n                  <tr>\n                    <td>Aggregator name</td>\n                    <td>: Praveen Sinha</td>\n                  </tr>\n                  <tr>\n                    <td>Company Name</td>\n                    <td>: SSS&co.</td>\n                  </tr>\n                  <tr>\n                    <td>Call@</td>\n                    <td>: 2121212121</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-4 btn-right\">\n              <div>\n                <button class=\"btn btn-default\">Delivered</button>\n              </div>\n            </div>\n          </div>\n        </div>  \n      </div><!--box ends here-->\n\n      <!--box starts here -->\n    <div class=\"row \">\n        <div class=\"col-md-6\">\n          <div class=\"row body-box\">\n            <div class=\"col-md-8\">\n              <table class=\"table borderless\">\n                <tbody>\n                  <tr>\n                    <td>Aggregator name</td>\n                    <td>: Praveen Sinha</td>\n                  </tr>\n                  <tr>\n                    <td>Company Name</td>\n                    <td>: SSS&co.</td>\n                  </tr>\n                  <tr>\n                    <td>Call@</td>\n                    <td>: 2121212121</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-4 btn-right\">\n              <div>\n                <button class=\"btn btn-default\">Delivered</button>\n              </div>\n            </div>\n          </div>\n        </div>  \n      </div><!--box ends here-->\n\n\n  </div>\n\n</div>\n<!--body-container ends-->\n\n\n\n\n<!--\n <div class=\"table-responsive\">\n\n<table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Company Name</th>\n          <th scope=\"col\">Aggregator Name</th>\n          <th scope=\"col\">Company Address</th>\n          <th scope=\"col\">Phone</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Scrap Type</th>\n          <th scope=\"col\">Slot</th>\n          <th scope=\"col\">Estimated Wt</th>\n          <th scope=\"col\">Cost</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let i of aggreDetails; let idx=index\">\n          <td>{{i[\"companyname\"]}}</td>\n          <td>{{i[\"username\"]}}</td>\n          <td>{{i[\"address\"]}}</td>\n          <td>{{i[\"phone\"]}}</td>\n          <td>{{i[\"email\"]}}</td>\n          <td>{{assAggregators[idx][\"scraptype\"]}}</td>\n          <td>{{assAggregators[idx][\"slot\"]}}</td>\n          <td>{{assAggregators[idx][\"totalwt\"]}} Kgs</td>\n          <td>{{assAggregators[idx][\"totalamt\"]}}</td>\n        </tr>\n      </tbody>\n  </table>\n </div>\n\n\n-->"

/***/ }),

/***/ "./src/app/assignedaggre/assignedaggre.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/assignedaggre/assignedaggre.component.ts ***!
  \**********************************************************/
/*! exports provided: AssignedaggreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedaggreComponent", function() { return AssignedaggreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignedaggreComponent = /** @class */ (function () {
    function AssignedaggreComponent(db, auth, router, modalService) {
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.assAggregators = [];
        this.aggreDetails = [];
    }
    AssignedaggreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyname = JSON.parse(localStorage.getItem("user"))["companyname"];
        this.user = JSON.parse(localStorage.getItem("user"));
        // console.log(this.user);
        this.db.collection("pickup_sd", function (ref) { return ref.where("userid", "==", _this.user["id"]).where("assigned", "==", true); }).snapshotChanges().subscribe(function (res) {
            for (var m in res) {
                var k = res[m].payload.doc.data();
                _this.assAggregators.push(k);
                _this.db.collection("user_website").doc(k["assignedTo"]).snapshotChanges().subscribe(function (res2) {
                    // console.log(res2.payload.data());
                    if (res2.payload.exists) {
                        _this.aggreDetails.push(res2.payload.data());
                    }
                });
            }
        });
        console.log(this.assAggregators);
        console.log(this.aggreDetails);
    };
    AssignedaggreComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AssignedaggreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assignedaggre',
            template: __webpack_require__(/*! ./assignedaggre.component.html */ "./src/app/assignedaggre/assignedaggre.component.html"),
            styles: [__webpack_require__(/*! ./assignedaggre.component.css */ "./src/app/assignedaggre/assignedaggre.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], AssignedaggreComponent);
    return AssignedaggreComponent;
}());



/***/ }),

/***/ "./src/app/associate/associate.component.css":
/*!***************************************************!*\
  !*** ./src/app/associate/associate.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n.main-height {\n    height: 100%;\n}\n\n.bg {\n    background: url('signup.jpg') no-repeat bottom right;\n    width: 100%;\n    height: 100%;\n    /* height: calc(100% - 81px);  */\n    /* height: -webkit-calc(100% - 81px);  */\n    background-size: cover;\n}\n\n.bg1 {\n    background: #3d882f;\n}\n\n.form2 {\n    border: 1px solid;\n    padding: 50px 60px;\n    margin-top: 30px;\n    background: rgba(255, 255, 255, 0.8);\n}\n\n.poi {\n    cursor: pointer;\n}\n\n.gap {\n    padding: 0 10px 0 20px;\n}\n\n.gap.justify-content-center{\n    width: 100%;\n}\n\n/* top header css */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n/* top header css ends here */\n\nh1 {\n    color: #fff;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 0;\n    font-size: 1.6rem;\n}\n\n.btn.btn-success {\n    background: #3c8a2e;\n}\n\n.add {\n    padding: 36px 0 0 0;\n}\n\n.form-container {\n    border: 1px solid;\n    padding: 50px 60px;\n    margin-top: 15px;\n    background: rgba(255, 255, 255, 0.8);\n}"

/***/ }),

/***/ "./src/app/associate/associate.component.html":
/*!****************************************************!*\
  !*** ./src/app/associate/associate.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-height\">\n  <!---Form Starts Here-->\n  <div class=\"bg\">\n    <div class=\"\">\n\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n\n      <div class=\"col-md-6 col-sm-6 col-xs-12 add\">\n\n\n        <!---Associate Form starts here-->\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>Associates</h1>\n          </div>\n        </div>\n\n        <div class=\"\">\n\n\n\n          <form [formGroup]=\"associateForm\" (ngSubmit)=\"onSubmit()\" class=\"form-row form2\">\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <select formControlName=\"usertype\" class=\"form-control form-control-sm\" name=\"usertype\" id=\"utype\">\n                <option selected value=\"0\"> Please Select Dealer </option>\n                <option value=\"Scrap\"> Scrap Dealer </option>\n                <option value=\"Associate\">Associate</option>\n                <option value=\"Recycler\"> Recycler </option>\n\n              </select>\n\n            </div>\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input formControlName=\"companyname\" type=\"text\" class=\"form-control form-control-sm\" id=\"CpasswordInput\"\n                aria-describedby=\"CpassHelp\" placeholder=\"Company Name\">\n              <small id=\"CpassHelp\" class=\"form-text text-muted\"></small>\n            </div>\n\n            <!-- <div *ngIf=\"associateForm.get('usertype').hasError('required') && associateForm.get('usertype').touched\" >\n                     usertype is required\n                   </div> -->\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input formControlName=\"username\" type=\"text\" class=\"form-control form-control-sm\" id=\"exampleInputUsername\"\n                aria-describedby=\"userHelp\" placeholder=\"User Name\">\n              <small id=\"userHelp\"></small>\n            </div>\n\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input formControlName=\"email\" type=\"email\" class=\"form-control form-control-sm\" id=\"exampleInputEmail1\"\n                aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\"></small>\n            </div>\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input formControlName=\"password\" type=\"password\" class=\"form-control form-control-sm\" id=\"passwordInput\"\n                aria-describedby=\"passHelp\" placeholder=\"Password\">\n              <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n            </div>\n\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input type=\"password\" class=\"form-control form-control-sm\" id=\"cpasswordInput\" aria-describedby=\"passHelp\"\n                placeholder=\"Confirm  Password\">\n              <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n            </div>\n\n\n            <div class=\"form-group col-md-6 gap\">\n              <select formControlName=\"scrapetype\" class=\"form-control form-control-sm\">\n                <option selected disabled value=\"0\">Scrap Type</option>\n                <option *ngFor=\"let m of prods\" value=\"{{m}}\">{{m}}</option>\n              </select>\n            </div>\n\n\n\n            <!-- <div *ngIf=\"associateForm.get('email').hasError('required') && associateForm.get('email').touched \" class=\"alert alert-danger\">\n                          email is required\n                  </div>\n                  <div *ngIf=\"associateForm.get('email').hasError('email') \" class=\"alert alert-danger\">\n                      email is invalid\n                    </div> -->\n\n\n\n            <!-- <div *ngIf=\"associateForm.get('username').hasError('required') && associateForm.get('username').touched \" class=\"alert alert-danger\">\n                    username is required\n                  </div> -->\n\n\n            <!-- <div *ngIf=\"associateForm.get('password').hasError('required') && associateForm.get('password').touched\" class=\"alert alert-danger\">\n                    password is required\n                  </div>\n                  <div *ngIf=\"associateForm.get('password').hasError('minlength') \" class=\"alert alert-danger\">\n                      password must be 8 characters\n                    </div> -->\n\n\n            <!-- <div *ngIf=\"associateForm.get('companyname').hasError('required') && associateForm.get('companyname').touched\" class=\"alert alert-danger\">\n                      company name  is required\n                    </div> -->\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <select formControlName=\"doctype\" class=\"form-control form-control-sm\" name=\"doctype\" id=\"dtype\"\n                aria-placeholder=\"Please Select\">\n                <option selected disabled value=\"0\"> Please Select Proof </option>\n                <option value=\"Pan\"> Pan </option>\n                <option value=\"Lisence\"> Lisence </option>\n                <option value=\"shopid\"> Shop Id</option>\n\n              </select>\n\n            </div>\n\n            <!-- <div *ngIf=\"associateForm.get('scrapetype').hasError('required') && associateForm.get('scrapetype').touched \" class=\"alert alert-danger\">\n                        scarpe type is required\n                      </div> -->\n\n\n\n\n            <div class=\"form-group col-md-6 gap\">\n              <input formControlName=\"phone\" class=\"form-control\" type=\"number\" class=\"form-control form-control-sm\" id=\"number\"\n                aria-describedby=\"CpassHelp\" placeholder=\"Phone Number\">\n            </div>\n\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input formControlName=\"address\" type=\"text\" class=\"form-control form-control-sm\" id=\"address\"\n                aria-describedby=\"CpassHelp\" placeholder=\"Address\">\n              <small id=\"CpassHelp\" class=\"form-text text-muted\"></small>\n            </div>\n\n\n            <div class=\"form-group col-md-6 gap\">\n\n              <input formControlName=\"pincode\" type=\"number\" class=\"form-control form-control-sm\" id=\"CpasswordInput\"\n                aria-describedby=\"CpassHelp\" placeholder=\"Pincode\">\n              <small id=\"CpassHelp\" class=\"form-text text-muted\"></small>\n            </div>\n\n\n            <div class=\"form-group col-md-6 gap\">\n              <select id=\"inputState\" formControlName=\"location\" class=\"form-control form-control-sm\" placeholder=\"select Location\">\n                <option selected hidden value=\"0\">Select Location</option>\n                <option *ngFor=\"let m of location\" value={{m}}>{{m}}</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-md-12 gap\">\n\n              <input type=\"file\" class=\"form-control-file\" id=\"upfile\" placeholder=\"Upload a Proof\" (change)=\"upfile($event)\">\n            </div>\n\n\n\n            <!-- <div *ngIf=\"associateForm.get('address').hasError('required')&& associateForm.get('address').touched \" class=\"alert alert-danger\">\n                        address is required\n                      </div>\n                    -->\n\n\n            <div class=\"gap justify-content-center\">\n              <div class=\"\">\n                <button type=\"submit\" id=\"subi\" class=\"btn btn-success btn-block\" [disabled]=\"!associateForm.valid\">Sign\n                  Up</button>\n              </div>\n\n            </div>\n\n\n          </form>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-10\"></div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/associate/associate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/associate/associate.component.ts ***!
  \**************************************************/
/*! exports provided: AssociateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateComponent", function() { return AssociateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssociateComponent = /** @class */ (function () {
    function AssociateComponent(router, formBuilder, db, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.db = db;
        this.authService = authService;
        this.prods = [];
        this.location = [];
    }
    AssociateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.associateForm = this.formBuilder.group({
            usertype: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            companyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            doctype: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            scrapetype: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.db.collection("locations").snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.location.push(res[i].payload.doc.id);
            }
        });
        this.db.collection("products").snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                _this.prods.push(res[i].payload.doc.id);
            }
        });
    };
    AssociateComponent.prototype.upfile = function ($event) {
        console.log($event);
        var fire = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref("ids/" + this.associateForm.value.email).put($event.target.files[0]);
        fire.on(firebase__WEBPACK_IMPORTED_MODULE_5__["storage"].TaskEvent.STATE_CHANGED, function (snap) {
            console.log((snap["bytesTransferred"] / snap["totalBytes"]) * 100);
        }, function (error) { console.log(error); });
    };
    AssociateComponent.prototype.showLogin = function () {
        this.router.navigate(['/design']);
    };
    AssociateComponent.prototype.showSignup = function () {
        this.router.navigate(['/signup']);
    };
    AssociateComponent.prototype.showAsso = function () {
        this.router.navigate(['/associate']);
    };
    AssociateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.signUp(this.associateForm.value.email, this.associateForm.value.password)
            .then(function (res) {
            console.log("authentication created");
            var details = _this.associateForm.value;
            details["role"] = "associate";
            var obj = _this.db.collection('user_website').add(details)
                .then(function (res) {
                console.log("data uploaded");
                _this.db.collection("user_website", function (ref) { return ref.where("email", "==", _this.associateForm.value.email); }).snapshotChanges().
                    subscribe(function (resu) {
                    console.log("resu", resu);
                    var k = resu[0].payload.doc.data();
                    var id = resu[0].payload.doc.id;
                    k["id"] = id;
                    localStorage.setItem("user", JSON.stringify(k));
                    _this.router.navigate(['/design']);
                });
            })
                .catch(function (err) { console.log(err); });
        })
            .catch(function (err) { console.log(err); });
    };
    AssociateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-associate',
            template: __webpack_require__(/*! ./associate.component.html */ "./src/app/associate/associate.component.html"),
            styles: [__webpack_require__(/*! ./associate.component.css */ "./src/app/associate/associate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AssociateComponent);
    return AssociateComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n.bg1 {\n    background: #3c8a2e;\n}\n\n.poi {\n    cursor: pointer;\n}\n\n/* Cards align*/\n\n.align {\n    width: 150px;\n    height: 150px;\n}\n\n/* top header css */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n.poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n\n/* top header css ends here */\n\n.head-cart-count li {\n    display: inline-block;\n}\n\n.head-cart-count {\n    margin: 1em auto;\n    list-style: none;\n    width: 100%;\n    text-align: center;\n}\n\n.head-cart-count .num span {\n    background: #e5e7e4;\n    display: block;\n    border-radius: 10px;\n    text-align: center;\n    padding: 5px;\n    min-width: 30px;\n    min-height: 30px;\n}\n\n.head-cart-count .num.active span {\n    background: #3c8a2e;\n}\n\n.head-cart-count .dots::after {\n    content: \"......\";\n    position: relative;\n    top: -5px;\n}\n\nh4 {\n    text-align: center;\n    font-size: 1rem;\n}\n\n/*\nh4::before {\n    content: '';\n    width: 40px;\n    height: 2px;\n    background-color: rgb(33, 37, 41);\n    position: relative;\n    display: inline-block;\n    top: -4px;\n    margin-right: 15px;\n}\n\nh4::after {\n    content: '';\n    width: 40px;\n    height: 2px;\n    background-color: rgb(33, 37, 41);\n    position: relative;\n    display: inline-block;\n    top: -4px;\n    margin-left: 15px;\n}\n\n*/\n\n.borderless td {\n    border: none;\n}\n\n.tab-btm {\n    border-bottom: 1px solid #000;\n}\n\n.btn-btem {\n    margin: 30px auto;\n}\n\n.add-more{\n    border: none;\n    background-color: transparent;\n    font-weight: 700;\n    margin: 0px 20px;\n    font-size: 1.1em;\n  }\n\n.btn-btem a {\n    color: #000;\n    margin-left: 1.3rem;\n}\n\n.table thead th {\n    color: #000;\n}\n\n.carousel-control-next-icon, .carousel-control-prev-icon{\n    background-color: #3c8a2e;\n    margin: 15px;\n    border-radius: 50px;\n    background-size: 20px 20px;\n    width: 30px;\n    height: 30px;\n}\n\n.tableClass{\n    width: 100%;\n    margin-top: 2em;\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"container\">\n\n    <h2 style=\"text-align: center; margin-top:2em\">Your Cart</h2>\n    <div class=\"row\">\n      <div class=\"col-md-2 col-sm-2 col-xs-10\"></div>\n      <div class=\"col-md-8 col-sm-8 col-xs-12 tableClass\">\n\n        <!-- <ul class=\"head-cart-count nav-list list\">\n              <li class=\"num active\"><span>1</span></li>\n              <li class=\"dots\"><span></span></li>\n              <li class=\"num\"><span>2</span></li>\n              <li class=\"dots\"><span></span></li>\n              <li class=\"num\"><span>3</span></li>\n          </ul>-->\n\n\n        <div class=\"table-responsive \">\n          <table class=\"table table-hover borderless\">\n            <thead>\n              <tr>\n                <th>S.No</th>\n                <th>Add A Picture</th>\n                <th>Category</th>\n                <th>Estimated Quantity</th>\n                <th>Price</th>\n                <th></th>\n\n              </tr>\n            </thead>\n\n            <tbody style=\"margin-top:1.5em\">\n              <tr *ngFor=\"let i of cart;let idx=index\">\n                <td>{{idx+1}}</td>\n                <td style=\"text-align:center; cursor: pointer;\">+</td>\n                <td>{{i[0]}}</td>\n                <td class=\"text-center\">{{i[1]}}</td>\n                <td>{{i[1]*i[2]}}.00</td>\n                <!-- <td>\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"del(idx)\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </td>-->\n                <td></td>\n              </tr>\n\n              <!-- <tr class=\"font-weight-bold tab-btm\">\n                <td></td>\n                <td>Subtotal:</td>\n                <td></td>\n                <td>{{totalamt}}.00</td>\n                <td></td>\n              </tr> -->\n            </tbody>\n          </table>\n\n          <hr>\n\n          <div style=\"display:flex; justify-content:space-between; font-size: 1em; padding: 1em\" class=\"flex\">\n            <h4>Sub-Total:</h4>\n            <h4>Rs {{totalamt}}.00</h4>\n          </div>\n\n        </div>\n        <div class=\"text-center btn-btem\">\n          <a class=\"add-more\" routerLink=\"/collections\">+ AddMore</a>\n        </div>\n        <div class=\"text-center btn-btem\">\n          <button style=\"text-transform:capitalize\" class=\"btn btn-success\" (click)=\"proceedTocheck()\">Confirm Pickup</button>  \n        </div>\n\n      </div>\n      <div class=\"col-md-2 col-sm-2 col-xs-10\"></div>\n    </div>\n  </div>\n\n  <!----sliding -->\n  <div class=\"\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"../../assets/images/CartImage.jpg\" class=\"d-block w-100\" height=\"500px\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../../assets/pngs/pic 2 .jpg\" class=\"d-block w-100\" height=\"500px\" alt=\"...\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../../assets/pngs/pic 3.jpg\" class=\"d-block w-100\" height=\"500px\" alt=\"...\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  <!-----list of items-->\n\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.cart = [];
        this.totalamt = 0;
        this.totalkg = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var meh = JSON.parse(localStorage.getItem("cart"));
        this.cm = 0;
        if (meh)
            for (var g in meh) {
                this.cm++;
            }
        for (var i in meh) {
            this.cart.push([i, meh[i][0], meh[i][1]]);
        }
        console.log(this.cart);
        for (var i in this.cart) {
            this.totalkg += this.cart[i][1];
            this.totalamt += this.cart[i][1] * this.cart[i][2];
        }
    };
    CartComponent.prototype.proceedTocheck = function () {
        this.router.navigate(["/checkout"]);
    };
    CartComponent.prototype.logout = function () {
        this.authService.logout();
    };
    CartComponent.prototype.del = function (index) {
        delete this.cart[index];
        var k = {};
        for (var g in this.cart) {
            k[this.cart[g][0]] = [this.cart[g][1], this.cart[g][2]];
        }
        localStorage.setItem("cart", JSON.stringify(k));
        window.location.reload();
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n.bg1{\n    background: #3c8a2e;\n}\n\n.poi{\ncursor: pointer;\n}\n\n/* content */\n\n.sec{\nborder: 1px solid #000;\npadding: 10px 15px;\nmargin: 20px 0;\n}\n\n/* top header css */\n\n.header-main{\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo{\n    width: 100px\n}\n\n.header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border-left: 2px solid #fff !important;\n}\n\n.rotate {\n    -webkit-transform: rotate(100deg);\n    transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 0 30px;\n}\n\n.active a {\n    text-decoration: underline;\n}\n\n.poi span{\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 3px 2px;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    display: inline-block;\n  }\n\n/* top header css ends here */\n\n.txt-sm{\n    font-size: 0.6rem;\n}\n\nh1{\n    font-size: 1.5rem;\n    margin-top: 1.5em;\n}\n\nh5 span{\n    font-size: 0.8rem;\n}\n\n.sec p{\n    margin-bottom: 0.2em;\n    font-size: 0.9rem;\n}\n\n.txt-bld{\n    font-weight: 700;\n}\n\n.mar-top{\n    margin-top:  15px;\n    margin-bottom: 0;\n}\n\n.tab-wid{\n    width: 135px;\n    display: inline-block;\n    \n}\n\n.pay-details div.box{\n    margin:  30px 20px;\n}\n\n.pay-details p{\n    margin-bottom: 0.5em;\n}\n\n.pay-details .form-row{\n    margin-bottom: 0.8em;\n}\n\n.btn-btm{\n    margin: 30px auto;\n}"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"\">\n\n  <!---order summary------>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <h1>Order Summary</h1>\n        <p class=\"txt-sm\">By clicking on the 'Confirm Pickup and Checkout' button, you agree to Reboxit.in privacy\n          notice and conditions of use.</p>\n      </div>\n    </div>\n\n\n    <div class=\"\">\n\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8 sec\">\n          <h5>Personal Information:\n            <span class=\"float-right\"><a routerLink=\"\">Add or Change</a></span>\n\n          </h5>\n\n          <p>{{name}}</p>\n          <p>Phone:{{phone}}</p>\n          <p>Mail I'd:{{email}}</p>\n          <p class=\"txt-bld mar-top\">Address:</p>\n          <p>{{address}}</p>\n          <p>Alternate Number: {{alter}}</p>\n        </div>\n        <div class=\"col-md-2\"></div>\n\n      </div>\n\n    </div>\n    <!-----scrape details---------------->\n    <div class=\"\">\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8 sec\">\n          <h5>Scrap Details:\n            <span class=\"float-right\"><a routerLink=\"\">Add or Change</a></span>\n          </h5>\n\n\n          <p><span class=\"tab-wid\">Selected slot</span> : {{slot}}</p>\n          <p><span class=\"tab-wid\">Estimarted Quantity</span> : {{totalkg}}</p>\n          <p><span class=\"tab-wid\">Estimarted Price</span> : {{totalamt}}</p>\n\n        </div>\n        <div class=\"col-md-2\"></div>\n\n      </div>\n\n    </div>\n\n    <!-------cash payment------->\n    <!-------cash payment------->\n\n    <div class=\"\">\n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8 sec pay-details\">\n          <h5 class=\"text-center\">How do you want us to pay ??</h5>\n          <div class=\"box\">\n\n            <p>\n\n              <i class=\"fas fa-money-check\"></i>\n              <a (click)=\"showBank()\">\n                Bank\n              </a>\n            </p>\n            <div *ngIf=\"bank\">\n              <div class=\"form-row align-items-center\">\n                <div class=\"col-sm-3 my-1\">\n\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"acname\" placeholder=\"Name\">\n                </div>\n\n                <div class=\"col-sm-3 my-1\">\n\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"acbank\" placeholder=\"Bank Name\">\n                </div>\n                <div class=\"col-sm-3 my-1\">\n\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"acno\" placeholder=\"Acc No\">\n                </div>\n\n\n                <div class=\"col-sm-3 my-1\">\n\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"acifsc\" placeholder=\"Ifsc\">\n                </div>\n              </div>\n            </div>\n\n            <p>\n              <a (click)=\"showUpi()\">\n                <img src=\"../../assets/login/upi.png\" width=\"60px\" height=\"30px\">\n              </a>\n            </p>\n            <div *ngIf=\"upi\">\n              <div class=\"form-row align-items-center\">\n                <div class=\"col-sm-3 my-1\">\n                  <label class=\"sr-only\" for=\"inlineFormInputName\">Name</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"upino\" placeholder=\"Enter UPI number\">\n                </div>\n              </div>\n            </div>\n\n            <p>\n              <a (click)=\"showPaytm()\">\n                <img src=\"../../assets/login/paytm.png\" width=\"60px\" height=\"30px\">\n              </a>\n\n            </p>\n            <div *ngIf=\"paytm\">\n              <div class=\"form-row align-items-center\">\n                <div class=\"col-sm-3 my-1\">\n                  <label class=\"sr-only\" for=\"inlineFormInputName\">Name</label>\n                  <input type=\"text\" class=\"form-control form-control-sm\" id=\"paytmno\" placeholder=\"Enter paytm number\">\n                </div>\n\n              </div>\n            </div>\n\n            <p (click)=\"showCash()\">\n              <img src=\"../../assets/login/cash2.png\" width=\"50px\" height=\"30px\">\n              <span> Cash </span>\n            </p>\n\n\n          </div>\n\n\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n\n    </div>\n\n    <!----upi-->\n    <div class=\"text-center btn-btm\">\n      <button class=\" btn btn-success\" (click)=\"submitData()\">Proceed to Checkout</button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, db, authService) {
        this.router = router;
        this.db = db;
        this.authService = authService;
        this.email = "";
        this.phone = "";
        this.address = "";
        this.slot = "";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.cm = 0;
        var user = JSON.parse(localStorage.getItem("user"));
        var cart = JSON.parse(localStorage.getItem("cart"));
        if (cart)
            for (var g in cart) {
                this.cm++;
            }
        var pickup = JSON.parse(localStorage.getItem("pickup_details"));
        if (!user || !cart || !pickup)
            this.router.navigate(["/design"]);
        console.log(pickup);
        console.log("cart", cart);
        this.name = user.username;
        this.email = user.email;
        this.phone = pickup.phone;
        this.alter = pickup.altphone;
        this.address = pickup.address + ", " + pickup.city + ", " + pickup.state;
        this.slot = pickup.slot;
        this.totalamt = 0;
        this.totalkg = 0;
        for (var i in cart) {
            this.totalkg += cart[i][0];
            this.totalamt += (cart[i][0] * cart[i][1]);
        }
    };
    CheckoutComponent.prototype.showUpi = function () {
        this.upi = true;
        this.bank = false;
        this.paytm = false;
        this.cash = false;
    };
    CheckoutComponent.prototype.showBank = function () {
        this.upi = false;
        this.paytm = false;
        this.bank = true;
        this.cash = false;
    };
    CheckoutComponent.prototype.showPaytm = function () {
        this.bank = false;
        this.upi = false;
        this.paytm = true;
        this.cash = false;
    };
    CheckoutComponent.prototype.showCash = function () {
        console.log("cash caalled");
        this.cash = true;
        this.upi = false;
        this.paytm = false;
        this.cash = false;
    };
    CheckoutComponent.prototype.loadData = function () {
        var data = new Object();
        if (this.upi) {
            data["payment"] = "upi";
            data["upino"] = document.getElementById("upino").value;
        }
        else if (this.paytm) {
            data["payment"] = "paytm";
            data["paytmno"] = document.getElementById("paytmno").value;
        }
        else if (this.bank) {
            data["payment"] = "bank";
            data["bank"] = document.getElementById("acbank").value;
            data["accountno"] = document.getElementById("acno").value;
            data["ifsc_code"] = document.getElementById("acifsc").value;
            data["account_name"] = document.getElementById("acname").value;
        }
        else {
            data["payment"] = "cash";
        }
        data["name"] = this.name;
        data["slot"] = this.slot;
        data["address"] = this.address;
        data["email"] = this.email;
        data["phone"] = this.phone;
        data["alterphone"] = this.alter;
        data["totalwt"] = this.totalkg;
        data["totalamt"] = this.totalamt;
        data["assigned"] = false;
        data["assignedTo"] = "";
        data["collected"] = false;
        data["cart"] = localStorage.getItem("cart");
        data["role"] = JSON.parse(localStorage.getItem("user"))["role"];
        data["userid"] = JSON.parse(localStorage.getItem("user"))["id"];
        data["location"] = JSON.parse(localStorage.getItem("pickup_details"))["location"];
        if (data["role"] == "associate")
            data["usertype"] = JSON.parse(localStorage.getItem("user"))["usertype"];
        console.log(data);
        this.db.collection("pickup_user").add(data).then(function (res) {
            console.log("successful");
            localStorage.removeItem("pickup_details");
            localStorage.removeItem("cart");
        });
    };
    CheckoutComponent.prototype.submitData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        user = JSON.parse(localStorage.getItem("user"));
                        if (user["role"] == "user")
                            this.router.navigate(["pickup"]);
                        else {
                            if (user["usertype"] == "Scrap")
                                this.router.navigate(["/scrape"]);
                            else if (user["usertype"] == "Recycler") {
                                this.router.navigate(["/recycler"]);
                            }
                            else {
                                this.router.navigate(["/aggregator"]);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutComponent.prototype.logout = function () {
        this.authService.logout();
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/collections/collections.component.css":
/*!*******************************************************!*\
  !*** ./src/app/collections/collections.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n    .bg1{\n        background: #3d882f;\n    }\n\n    .drag ul li a{\n        color:white;\n        font-size: 18px;\n        padding: 0 15px;\n}\n\n    /* Cards align*/\n\n    .align{\n    width:150px;\n    height: 150px;\n    \n}\n\n    .poi{\n    cursor: pointer;\n}\n\n    /* top header css */\n\n    .header-main {\n    background-color: #fefefe;\n}\n\n    .header-main .brand-logo {\n    width: 100px\n}\n\n    .header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n    .border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n    .border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n    .rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n    .drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n    .drag ul li:hover {\n    background-color: #4ca115;\n}\n\n    .active {\n    background-color: #4ca115;\n}\n\n    .poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n\n    /* top header css ends here */\n\n    /* custom css starts here */\n\n    .page-title{\n    margin:  20px auto;\n  }\n\n    /*\n\n  h4::before{\n    content: '';\n    width: 40px;\n    height: 2px;\n    background-color: rgb(33,37,41);\n    position: relative;\n    display: inline-block;\n    top: -4px;\n    margin-right: 15px;\n  }\n  h4::after{\n    content: '';\n    width: 40px;\n    height: 2px;\n    background-color: rgb(33,37,41);\n    position: relative;\n    display: inline-block;\n    top: -4px;\n    margin-left: 15px;\n  }\n  */\n\n    .card-img-top{\n    width: 100%;\n    border-top-left-radius: calc(.25rem - 1px);\n    border-top-right-radius: calc(.25rem - 1px);\n    max-width: 150px;\n    max-height: 150px;\n    text-align: center;\n    margin: 10px auto;\n  }\n\n    .card{\n    cursor: pointer;\n    border: 0px solid #6b6969 !important;\n    box-shadow: 0 2px 15px #d4d4d4;\n    border-radius: 0;\n    margin-bottom: 25px;\n  }\n\n "

/***/ }),

/***/ "./src/app/collections/collections.component.html":
/*!********************************************************!*\
  !*** ./src/app/collections/collections.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"container\">\n\n    <div class=\"page-title\">\n      <h4 class=\"text-center text-uppercase\">Collections</h4>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let item of categories\" (click)=\"subcol(item[0])\">\n\n        <div class=\"card\">\n          <img class=\"card-img-top img-responsive\" src=\"{{item[1]}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"text-center\">{{item[0]}}</h5>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/collections/collections.component.ts":
/*!******************************************************!*\
  !*** ./src/app/collections/collections.component.ts ***!
  \******************************************************/
/*! exports provided: CollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionsComponent = /** @class */ (function () {
    function CollectionsComponent(db, router, authService) {
        this.db = db;
        this.router = router;
        this.authService = authService;
        this.categories = [];
    }
    CollectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meh = JSON.parse(localStorage.getItem("cart"));
        this.cm = 0;
        if (meh)
            for (var g in meh) {
                this.cm++;
            }
        console.log("pickup_details", JSON.parse(localStorage.getItem("pickup_details")));
        this.db.collection("products").snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].payload.doc.exists) {
                    _this.categories.push([res[i].payload.doc.id, res[i].payload.doc.data()["thumb"]]);
                    console.log(res[i].payload.doc.id, res[i].payload.doc.data());
                }
            }
        });
    };
    CollectionsComponent.prototype.subcol = function (k) {
        console.log(k);
        this.router.navigate(["/subcollections", k]);
    };
    CollectionsComponent.prototype.logout = function () {
        this.authService.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CollectionsComponent.prototype, "uname", void 0);
    CollectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collections',
            template: __webpack_require__(/*! ./collections.component.html */ "./src/app/collections/collections.component.html"),
            styles: [__webpack_require__(/*! ./collections.component.css */ "./src/app/collections/collections.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CollectionsComponent);
    return CollectionsComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 0 30px;\n}\n\n.bg1 {\n    background: #3c8a2e;\n}\n\n.bg {\n    background: url('footer.png') no-repeat bottom right;\n    width: 100%;\n    height: auto;\n    background-size: cover;\n    background-position: -5px -8.20751px;\n    padding: 50px 0;\n    margin-top: 50px;\n}\n\n.rotate {\n    -webkit-transform: rotate(100deg);\n    transform: rotate(100deg);\n}\n\n/* image blocks */\n\n.clear {\n    clear: both;\n}\n\n.chead {\n    font-size: 50px;\n}\n\n.ctext {\n    text-align: justify;\n}\n\n.cc {\n    width: 160px;\n    height: 160px;\n}\n\n.cc1 {\n    border: none;\n}\n\n.chead1 {\n    padding: 10px;\n}\n\n.cmain {\n    padding: 50px;\n}\n\n.list li {\n    display: inline-block;\n    padding: 7px 12px;\n}\n\n.pi {\n    /* IE 9 */\n    -webkit-transform: skewY(20deg);\n    /* Safari 3-8 */\n    transform: skewY(20deg);\n}\n\n.pi-right {\n    /* IE 9 */\n    -webkit-transform: skewY(-15deg);\n    /* Safari 3-8 */\n    transform: skewY(-15deg);\n}\n\n.txt-rght{\n    font-weight: bold;\n    font-size: 1.3rem;\n    text-decoration: none;\n}\n\n.state3 {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 30%;\n    left: 0;\n    margin: 0 auto;\n}\n\n.state4 {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 35%;\n    margin: 0 auto;\n}\n\n.pad {\n    padding: 19px 45px;\n    border: 2px solid white;\n}\n\n.state {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n}\n\n.book {\n    color: white;\n    font: 24px;\n}\n\n.size {\n    font-size: 24px;\n    padding: 5px 0 0 0;\n}\n\n.space {\n    padding: 30px 0 40px;\n}\n\n.align {\n    display: inline-block;\n    border: none;\n    padding: 15px;\n    text-align: center;\n}\n\n.align img {\n    width: 80% !important;\n    height: 80% !important;\n    max-width: 200px;\n}\n\n.align p {\n    font-size: 1.5rem;\n}\n\n.cbr {\n    border: 5px solid #005f33;\n}\n\n.state1 {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n}\n\n.hand1 {\n    width: 80%;\n    display: inline-block;\n    padding: 10px;\n    text-align: justify;\n}\n\n.img-css {\n    padding: 9px 1px 14px 29px;\n}\n\n.triangle-down {\n    width: 0;\n    height: 0;\n    border-left: 57px solid transparent;\n    border-right: 57px solid transparent;\n    border-top: 50px solid black;\n    float: right;\n}\n\n.container1 {\n    width: 768px;\n    margin: 0 auto;\n}\n\n/* custom css starts here*/\n\n.header-main{\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo{\n    width: 100px\n}\n\n.header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border-left: 2px solid #fff !important;\n}\n\n.txt-img {\n    top: 50%;\n    -webkit-transform: translatey(-50%);\n    transform: translatey(-50%);\n    width: 100%;\n    display: block;\n    right: 30%;\n    left: 0;\n    text-align: center;\n    position: absolute !important;\n    color: #fff;\n    font-size: 2rem;\n}\n\n.txt-p {\n    margin: 15px 0;\n    font-size: 1.2rem;\n}\n\nh1{\n    color: #3c8a2e;\n    margin: 15px auto 25px;\n    text-align: center;\n}\n\nh3 {\n    font-size: 1rem;\n    font-weight: 400;\n    text-transform: uppercase;\n}\n\n.foot-links{\n    list-style: none;\n    padding: 0;\n}\n\n.foot-links li{\n    padding: 10px 0 0px;\n}\n\nul.nav-list.list a{\n    color: #000;\n}\n\n.foot-com{\n    position: absolute;\n    float: right;\n    text-align: center;\n    bottom: 0;\n    right: 0;\n}\n\n.foot-com h6{\n    margin-bottom: 0;\n    font-size: 1.3rem;\n    font-weight: 400;\n}\n\n.footer-lower{\n    padding: 20px 0 0 0;\n    margin-top: 5em;\n}\n\n.footer-lower img{\n    width: 40px;\n    height: auto;\n    border-radius: 5px;\n}\n\n.footer-lower li{\n    padding: 7px 25px;\n    font-size: 0.9rem;\n}\n\n.float-right li{\n    padding: 0px 25px;\n}\n\n.float-right li a{\n    font-size: 0.9rem;\n}\n\n.content-box{\n    margin: 15px 0;\n}\n\n.content-box p{\n    padding: 15px;\n}\n\n.content-des-txt{\n    width: 400px;\n    height: auto;\n    padding: 15px;\n    border: 0;\n}\n\n/*\n.content-des-txt:hover{\n    border: 1px solid #ccc;\n    transform: scale(0.9);\n}\n*/\n\n/* @include media-breakpoint-up(xs){\n.head{\n        font-size:20px;\n    }\n} */\n\n/* media queries */\n\n/********************* 120 width   ****************************/\n\n@media only screen and (min-width: 120px) {\n    .head {\n        font-size: 20px;\n    }\n    .align img {\n        width: 168px;\n        height: 148px;\n    }\n    .img-css {\n        padding: 9px 1px 14px 29px;\n    }\n    .state {\n        top: 89%;\n        -webkit-transform: translatey(-50%);\n        transform: translatey(-91%);\n        width: 100%;\n        max-width: 176px;\n        right: -62px;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state1 {\n        top: 79%;\n        -webkit-transform: translatey(-50%);\n        transform: translatey(-50%);\n        width: 100%;\n        max-width: 105px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state4 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 70%;\n        margin: 0 auto;\n    }\n    .state3 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .pad {\n        margin: 2px;\n        padding: 0px 0px;\n        font-size: 12px;\n    }\n    .book {\n        color: white;\n        font-size: 10px;\n    }\n}\n\n/********************* 576 width   ****************************/\n\n@media only screen and (min-width: 576px) {\n    .head {\n        font-size: 30px;\n    }\n    .align img {\n        width: 211px;\n        height: 199px;\n    }\n    .img-css {\n        padding: 0 0 0 0;\n    }\n    .pad {\n        margin: 7px;\n        padding: 6px 12px;\n    }\n    .state {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state1 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .book {\n        color: white;\n        font-size: 24px;\n    }\n    .state4 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 70%;\n        margin: 0 auto;\n    }\n    .state3 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 30%;\n        left: 0;\n        margin: 0 auto;\n    }\n    .pad {\n        margin: 2px;\n        padding: 0px 0px;\n        font-size: 14px;\n    }\n}\n\n/********************* 768 width   ****************************/\n\n@media only screen and (min-width: 768px) {\n    .head {\n        font-size: 30px;\n    }\n    .align img {\n        width: 211px;\n        height: 199px;\n    }\n    .state {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state3 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 27%;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state4 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 35%;\n        margin: 0 auto;\n    }\n    .pad {\n        padding: 19px 45px;\n        border: 2px solid white;\n        font-size: 22px;\n    }\n    .state1 {\n        top: 82%;\n        -webkit-transform: translatey(-50%);\n        transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 260px;\n        left: 0;\n        margin: 0 auto;\n    }\n    .pad {\n        margin: 2px;\n        padding: 3px 15px;\n        font-size: 20px;\n        border-radius: 0.2in;\n    }\n    .book {\n        color: white;\n        font-size: 24px;\n    }\n    .triangle-down {\n        width: 50px;\n        height: auto;\n        border-left: 57px solid transparent;\n        border-right: 57px solid transparent;\n        border-top: 50px solid black;\n        float: right;\n        right: 40px;\n    }\n    .triangle-container {\n        width: 90%;\n        display: inline-block;\n    }\n    .container1 {\n        width: 576;\n        margin: 0 auto;\n    }\n    /********************* 1024 width   ****************************/\n    @media only screen and (min-width: 1024px) {\n        .head {\n            font-size: 35px;\n        }\n        .align img {\n            width: 251px;\n            height: 217px;\n        }\n        .state {\n            top: 70%;\n            -webkit-transform: translatey(-50%);\n                    transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 0;\n            left: 0;\n            margin: 0 auto;\n        }\n        .state3 {\n            top: 70%;\n            -webkit-transform: translatey(-50%);\n                    transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 30%;\n            left: 0;\n            margin: 0 auto;\n        }\n        .state4 {\n            top: 70%;\n            -webkit-transform: translatey(-50%);\n                    transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 0;\n            left: 35%;\n            margin: 0 auto;\n        }\n        .pad {\n            padding: 10px 50px;\n            border: 2px solid #fff;\n            font-size: 1.6rem;\n            border-radius: 60px;\n        }\n        .state1 {\n            top: 70%;\n            -webkit-transform: translatey(-50%);\n                    transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 0;\n            left: 0;\n            margin: 0 auto;\n        }\n        .triangle-down {\n            width: 0;\n            height: 0;\n            border-left: 57px solid transparent;\n            border-right: 57px solid transparent;\n            border-top: 50px solid black;\n            float: right;\n        }\n        .container1 {\n            width: 768px;\n            margin: 0 auto;\n        }\n    }\n}\n\n.poi {\n    cursor: pointer;\n}\n\n/* Nav CSS */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n.poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <!-----Background image-->\n\n  <!-- body content starts here-->\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1>Did you Know?</h1>\n      </div>\n    </div>\n\n    <div class=\"clearfix content-box\">\n      <img class=\"img-thumbnail float-left content-des-txt\" src=\"../../assets/pngs/content.png\">\n\n      <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n        make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\n        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker\n        including versions of Lorem Ipsum.\n      </p>\n    </div>\n\n\n    <div class=\"clearfix content-box\">\n      <img class=\"img-thumbnail float-right content-des-txt\" src=\"../../assets/pngs/content.png\">\n\n      <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n        make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\n        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker\n        including versions of Lorem Ipsum.\n      </p>\n    </div>\n\n  </div>\n\n  <!-- body content ends here-->\n\n  <!----------------footer----------------->\n\n <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/design/design.component.css":
/*!*********************************************!*\
  !*** ./src/app/design/design.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n.main-height {\n    height: 100%;\n}\n\n.bg {\n    background: url('signup.jpg') no-repeat bottom right;\n    width: 100%;\n    /* height: calc(100% - 118px);\n     height: -webkit-calc(100% - 118px); */\n    height: 100%;\n    background-size: cover;\n}\n\n.bg1 {\n    background: #3d882f;\n}\n\n/* container of background*/\n\n.form-container {\n    border: 1px solid;\n    padding: 50px 60px;\n    margin-top: 15px;\n    background: rgba(255, 255, 255, 0.8);\n}\n\n.add {\n    padding: 36px 0 0 0;\n}\n\n.poi {\n    cursor: pointer;\n}\n\n/* custom css starts here */\n\n/* top header css */\n\n.header-main{\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo{\n    width: 100px\n}\n\n.header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n\n.border-left{\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {   \n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i{\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover{\n    background-color: #4ca115;\n}\n\n.active  {\n    background-color: #4ca115;\n}\n\n/* top header css ends here */\n\nh1 {\n    color: #fff;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 0;\n    font-size: 1.6rem;\n}\n\n.psw {\n    float: right;\n    text-decoration: none;\n    color: #000;\n    font-size: 0.8rem;\n    /* margin-bottom: 1rem; */\n}\n\n.btm-txt {\n    text-align: center;\n    padding: 15px;\n    font-size: 1.2rem;\n    margin: 0.6em;\n    color: rgba(0, 0, 0, .6);\n}\n\n.signUp {\n    color: #3c8a2e;\n    text-decoration: none;\n    font-weight: 500;\n}\n\n.btn.btn-success{\n    font-size: 1.2rem;\n}\n\ninput::-webkit-input-placeholder{\n    color: gray;\n}\n\ninput::-ms-input-placeholder{\n    color: gray;\n}\n\ninput::placeholder{\n    color: gray;\n}\n\n.btn:focus {outline:0;}\n"

/***/ }),

/***/ "./src/app/design/design.component.html":
/*!**********************************************!*\
  !*** ./src/app/design/design.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-height\">\n\n  <!---Form Starts Here-->\n\n  <div class=\"bg\">\n    <div class=\"container\">\n\n  \n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n      <div class=\"col-md-6 col-sm-6 col-xs-12 add\">\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>Login</h1>\n          </div>\n        </div>\n        <!---Login Form starts here-->\n        <div class=\"login\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"form-container\">\n            <div class=\"alert alert-danger\" *ngIf=\"error\">\n              <strong>{{error}}</strong>\n            </div>\n\n            <div class=\"form-group\">\n\n              <input style=\"margin-top:2em\" type=\"text\" formControlName=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email ID\" />\n            </div>\n\n            <div *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\" class=\"alert alert-danger\">\n              Email is required\n            </div>\n            <div *ngIf=\"loginForm.get('email').hasError('email') \" class=\"alert alert-danger\">\n              Email is invalid\n            </div>\n            <div class=\"form-group\">\n\n              <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-sm\" placeholder=\"Password\" />\n            </div>\n\n            <div *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\" class=\"alert alert-danger\">\n              Password required\n            </div>\n            <div *ngIf=\"loginForm.get('password').hasError('minlength')  \" class=\"alert alert-danger\">\n              Password must be 8 characters\n            </div>\n\n\n            <!-- <div class=\"\" >\n              <p style=\"padding: 0 0 15px;\"><a routerLink=\"/forgot\" class=\"psw\">Forgot Password?</a></p>\n            </div> -->\n\n\n          <div class=\"\">\n            <div class=\"text-center\" >\n              <button style=\"text-transform:capitalize\" type=\"submit\" class=\"btn btn-success btn-sm btn-block\">\n                Login\n              </button>\n\n            </div>\n          </div>\n\n            <div class=\"text-center btm-txt\">\n              <p>Don't have an account ? <span><a routerLink=\"/signup\" class=\"signUp\">SignUp</a></span></p>\n            </div>\n\n\n            <!-- <div class=\"text-center\" style=\"padding: 9px 0 0 0;\">\n                      <button type=\"submit\" class=\"btn btn-success \">\n                             <a routerLink=\"/scrape\" style=\"color:white;\">Ass-Log In</a>\n                      </button>\n                 </div> -->\n\n          </form>\n\n        </div>\n\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n    </div>\n\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/design/design.component.ts":
/*!********************************************!*\
  !*** ./src/app/design/design.component.ts ***!
  \********************************************/
/*! exports provided: DesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignComponent", function() { return DesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DesignComponent = /** @class */ (function () {
    function DesignComponent(router, formBuilder, authService, db) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.db = db;
    }
    DesignComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user")) {
            var resi2 = JSON.parse(localStorage.getItem("user"));
            console.log(resi2);
            if (resi2["role"] == "admin") {
                localStorage.setItem("user", JSON.stringify(resi2));
                this.router.navigate(["admin"]);
            }
            else if (resi2["role"] == "associate") {
                localStorage.setItem("user", JSON.stringify(resi2));
                if (resi2["usertype"] == "Scrap") {
                    this.router.navigate(['/scrape']);
                }
                else if (resi2["usertype"] == "Recycler") {
                    this.router.navigate(['/recycler']);
                }
                else {
                    this.router.navigate(['/aggregator']);
                }
            }
            else {
                console.log("dint match");
                localStorage.setItem("user", JSON.stringify(resi2));
                this.router.navigate(['/pickup']);
            }
        }
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    };
    DesignComponent.prototype.showLogin = function () {
        this.router.navigate(['/design']);
    };
    DesignComponent.prototype.showSignup = function () {
        this.router.navigate(['/signup']);
    };
    DesignComponent.prototype.showAsso = function () {
        this.router.navigate(['/associate']);
    };
    DesignComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.signInRegular(this.loginForm.value.email, this.loginForm.value.password)
            .then(function (res) {
            console.log("auth", res);
            console.log("successful");
            _this.db.collection("user_website", function (ref) { return ref.where('email', '==', _this.loginForm.value.email); })
                .snapshotChanges()
                .subscribe(function (res2) {
                var id = res2[0].payload.doc.id;
                var resi2 = res2[0].payload.doc.data();
                resi2["id"] = id;
                console.log(res2);
                if (resi2["role"] == "admin") {
                    localStorage.setItem("user", JSON.stringify(resi2));
                    _this.router.navigate(["admin"]);
                }
                else if (resi2["role"] == "associate") {
                    localStorage.setItem("user", JSON.stringify(resi2));
                    if (resi2["usertype"] == "Scrap") {
                        _this.router.navigate(['/scrape']);
                    }
                    else if (resi2["usertype"] == "Recycler") {
                        _this.router.navigate(['/recycler']);
                    }
                    else {
                        _this.router.navigate(['/aggregator']);
                    }
                }
                else {
                    console.log("dint match");
                    localStorage.setItem("user", JSON.stringify(resi2));
                    location.reload();
                    // this.router.navigate(['/pickup']);
                }
            });
        })
            .catch(function (err) {
            console.log('error: ' + err);
            _this.error = err;
        });
    };
    DesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-design',
            template: __webpack_require__(/*! ./design.component.html */ "./src/app/design/design.component.html"),
            styles: [__webpack_require__(/*! ./design.component.css */ "./src/app/design/design.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], DesignComponent);
    return DesignComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.bg1 {\r\n    background: #3c8a2e;\r\n}\r\n\r\n.bg {\r\n    background: url('footer.png') no-repeat bottom right;\r\n    width: 100%;\r\n    height: auto;\r\n    background-size: cover;\r\n    background-position: -5px -8.20751px;\r\n    padding: 25px 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n.foot-links{\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.foot-links li{\r\n    padding: 10px 0 0px;\r\n}\r\n\r\n.list li {\r\n    display: inline-block;\r\n    padding: 7px 12px;\r\n}\r\n\r\n.list li {\r\n    display: inline-block;\r\n    padding: 7px 12px;\r\n}\r\n\r\n.pi {\r\n    /* IE 9 */\r\n    -webkit-transform: skewY(20deg);\r\n    /* Safari 3-8 */\r\n    transform: skewY(20deg);\r\n}\r\n\r\n.pi-right {\r\n    /* IE 9 */\r\n    -webkit-transform: skewY(-15deg);\r\n    /* Safari 3-8 */\r\n    transform: skewY(-15deg);\r\n}\r\n\r\n.txt-rght{\r\n    font-weight: bold;\r\n    font-size: 1.3rem;\r\n    text-decoration: none;\r\n}\r\n\r\nul.nav-list.list a{\r\n    color: #000;\r\n}\r\n\r\n.footer-lower{\r\n    /* padding: 20px 0 0 0; */\r\n    /* margin-top: 5em; */\r\n}\r\n\r\n.footer-lower img{\r\n    width: 40px;\r\n    height: auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n.footer-lower li{\r\n    padding: 7px 25px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.foot-com{\r\n    margin-top: 2em;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.foot-com h6{\r\n    margin-left: 20%;\r\n    margin-bottom: 0;\r\n    font-size: 1.3rem;\r\n    font-weight: 400;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"\">\n  <footer class=\"section footer-classic context-dark bg-image bg\">\n    <div class=\"container\">\n      <div class=\"row row-30\">\n        <div class=\"col-md-3 foot \">\n  \n          <h5>Associates</h5>\n  \n          <ul class=\"foot-links\">\n            <li>Scrap Dealer</li>\n            <li>Aggregator</li>\n            <li>Recycler</li>\n          </ul>\n  \n  \n        </div>\n  \n        <div class=\"col-sm-3 foot\">\n          <h5>Service</h5>\n  \n          <ul class=\"foot-links\">\n            <li>Home</li>\n            <li>Shop/Mall</li>\n            <li>Institutions</li>\n            <li>Banks</li>\n            <li>Corporate Office</li>\n            <li>Other Business</li>\n          </ul>\n  \n  \n        </div>\n  \n  \n        <div class=\"col-md-6 \">\n          <div style=\"display:flex; flex-direction:column\" class=\"arraneInColumn\">\n            <ul class=\"nav-list list float-right\">\n              <li><a href=\"#\">About us</a></li>\n              <li><a href=\"#\">Contact us</a></li>\n              <li><a href=\"#\">FAQ's</a></li>\n            </ul>\n            \n          <div class=\"foot-com\">\n            <h6>Reboxit Pvt. Ltd.</h6>\n            <ul class=\"nav-list list\">\n              <li><a href=\"#\">Terms & Conditions</a></li>\n              <li><a href=\"#\">Privacy Policy</a></li>\n  \n            </ul>\n          </div>\n        </div>\n        </div>\n        <!-- <div style=\"margin-top:1em center\" class=\"bottomSocialMedia\">\n          <ul class=\"nav-list list\">\n            <li class=\"pi-right\"><a href=\"#\"> <img src=\"../../assets/pngs/instagarm.png\" /> </a></li>\n            <li class=\"pi\"><a href=\"#\"><img src=\"../../assets/pngs/facebook.png\" /></a></li>\n            <li class=\"pi\"><a href=\"#\"> <img src=\"../../assets/pngs/linkdin.png\" /></a></li>\n            <li class=\"pi-right txt-rght\"><a href=\"\">Follow Us</a></li>\n          </ul>\n        </div> -->\n      </div>\n      <div class=\"row footer-lower justify-content-md-center\">\n  \n        <div class=\"col-md-6\">\n          <ul class=\"nav-list list\">\n            <li class=\"pi-right\"><a href=\"#\"> <img src=\"../../assets/pngs/instagarm.png\" /> </a></li>\n            <li class=\"pi\"><a href=\"#\"><img src=\"../../assets/pngs/facebook.png\" /></a></li>\n            <li class=\"pi\"><a href=\"#\"> <img src=\"../../assets/pngs/linkdin.png\" /></a></li>\n            <li class=\"pi-right txt-rght\"><p>Follow Us</p></li>\n  \n          </ul>\n        </div>\n  \n  \n      </div>\n    </div>\n  </footer>\n  \n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n\n\n.main-height {height: 100%;}\n\n\n\n.bg{\n    background: url('signup.jpg') no-repeat bottom right;\n    width: 100%;\n     /* height: calc(100% - 118px);\n     height: -webkit-calc(100% - 118px); */\n     height: 100%;\n     background-size: cover;\n\n    }\n\n\n\n.bg1{\n        background: #005f33;\n    }\n\n\n\n.drag ul li a{\n        color:white;\n        font-size: 14px;\n        padding: 0 15px;\n}\n\n\n\n/* container of background*/\n\n\n\n.form-container{\n    border:1px solid;\n    padding: 50px 60px ;\n    margin-top: 30px;\n   background: white;\n   opacity: 0.8;\n\n}\n\n\n\n.add{\n    padding:36px 0 0 0;\n}\n\n\n\n.poi{\n    cursor:pointer;\n}\n\n"

/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-height\">\n  <div class=\"\">\n     <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo1.png\"></a>\n   \n  </div>\n  <!-----Navigation Starts Here-->\n\n<nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto \">\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" >Price List <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" (click)=\"showLogin()\" >Login</a>\n        </li>\n        <li class=\"nav-item poi\">\n            <a class=\"nav-link\" (click)=\"showSignup()\">SignUp</a>\n       </li>\n         <li class=\"nav-item poi\">\n              <a class=\"nav-link\" (click)=\"showAsso()\">Associates</a>\n         </li>\n       <li class=\"nav-item poi\">\n          <a class=\"nav-link\" >Help</a>\n     </li>\n     <li class=\"nav-item poi\">\n          <a class=\"nav-link\" ><i class=\"fas fa-phone\"></i></a>\n      </li>\n      </ul>\n    \n    </div>\n  </nav>\n  \n  <!---Form Starts Here-->\n\n  <div class=\"bg\">\n    <div class=\"\">\n\n     \n    </div>\n      <div class=\"row\">\n          <div class=\"col-md-4 col-sm-4 col-xs-12\"></div>\n          <div class=\"col-md-4 col-sm-4 col-xs-12 add\">\n          \n      \n     <!---Login Form starts here-->\n            <div class=\"\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"form-container\">\n                   \n                    <div class=\"form-group\">\n                        <label>Phone</label>\n                        <input type=\"text\" formControlName=\"phone\"  class=\"form-control form-control-sm\"  />\n                    </div>\n\n                    <div *ngIf=\"loginForm.get('phone').hasError('required') && loginForm.get('phone').touched\" class=\"alert alert-danger\">\n                            phone  number is required\n                    </div>\n                   \n                    <div class=\"form-group\">\n                        <label>Enter OTP</label>\n                        <input type=\"password\" formControlName=\"otp\" class=\"form-control form-control-sm\"   />\n                     </div >\n                  \n                  <div *ngIf=\"loginForm.get('otp').hasError('required') && loginForm.get('password').touched\" class=\"alert alert-danger\">\n                           password required\n                  </div>\n                 \n                   \n                    \n                  \n               \n                  <div class=\"text-center\" >\n                      <button type=\"submit\" class=\"btn btn-success\" >\n                          <a routerLink=\"/pickup\" style=\"color:white; text-transform: capitalize;\">Submit</a>\n                      </button>\n                  </div>\n                  \n                 \n                  <!-- <div class=\"text-center\" style=\"padding: 9px 0 0 0;\">\n                      <button type=\"submit\" class=\"btn btn-success \">\n                             <a routerLink=\"/scrape\" style=\"color:white;\">Ass-Log In</a>\n                      </button>\n                 </div> -->\n\n                 </form>\n               \n                </div>\n\n              </div>\n              <div class=\"col-md-4 col-sm-4 col-xs-12\"></div>\n          </div>\n          \n    \n      </div>\n    </div>\n    \n   \n            \n          "

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ForgotComponent.prototype.showLogin = function () {
        this.router.navigate(['/design']);
    };
    ForgotComponent.prototype.showSignup = function () {
        this.router.navigate(['/signup']);
    };
    ForgotComponent.prototype.showAsso = function () {
        this.router.navigate(['/associate']);
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    .bg1{\n        background: #005f33;\n    }    \n.drag ul li a{\n    color:white;\n    font-size: 14px;\n    padding: 0 15px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"\">\n        <img src=\"../assets/images/Categories/logo1.png\">\n      </div>\n      <!-----Navigation Starts Here-->\n    \n    <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n        <a class=\"navbar-brand\" href=\"#\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" >Price List <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"showLogin()\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"showSignup()\">SignUp</a>\n           </li>\n             <li class=\"nav-item\">\n                  <a class=\"nav-link\" (click)=\"showAssociate()\">Associates</a>\n             </li>\n           <li class=\"nav-item\">\n              <a class=\"nav-link\" >Help</a>\n         </li>\n         <li class=\"nav-item\">\n              <a class=\"nav-link\" ><i class=\"fas fa-phone\"></i></a>\n          </li>\n          </ul>\n        \n        </div>\n      </nav>\n\n  <!-----Image adiition-->\n     <div class=\"\">\n        <img class=\"img-fluid\" src=\"../../assets/images/home screen/home1.png\" alt=\"Chania\">\n     </div>\n      \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadeInUp {\n    from { \n      opacity: 0;\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0);\n    }\n  \n    to {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n  \n  @keyframes fadeInUp {\n    from { \n      opacity: 0;\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0);\n    }\n  \n    to {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n  \n  p {\n    /* // first we make all instances of this transparent.  */\n    opacity: 0; \n    /* // as we're using the same animation for each instance, call it here so we're not repeating it */\n    -webkit-animation: fadeInUp 1s ease-in-out 0s forwards;\n            animation: fadeInUp 1s ease-in-out 0s forwards;}\n  \n  /* // then define the animation delay in each class */\n  \n  .first {\n      -webkit-animation-delay: 1s;\n              animation-delay: 1s;\n    }\n  \n  .second {\n      -webkit-animation-delay: 3s;\n              animation-delay: 3s;\n    }\n  \n  .third {\n      -webkit-animation-delay: 5s;\n              animation-delay: 5s;\n    }\n  \n  .fourth {\n      -webkit-animation-delay: 7s;\n              animation-delay: 7s;\n    }\n  \n  .fifth {\n      -webkit-animation-delay: 9s;\n              animation-delay: 9s;\n    }\n  \n  .sixth {\n      -webkit-animation-delay: 11s;\n              animation-delay: 11s;\n    }\n  \n  /* now add general css for page */\n  \n  /* body {\n    background: #fff;\n    text-align: center;\n    font-size: 34px;\n    color: #424243;\n    font-family: 'Roboto Condensed', sans-serif;\n    font-weight: 300;\n  } */\n  \n  .ll { \n    font-size: 55px;\n    padding: 1px 138px 0px 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n  \n  /* // recolors some of the text */\n  \n  .emphasis {\n    color: #fb6e67;\n  }\n  \n  .a:hover{\n      background: green;\n  }\n  \n  .btn-outline-secondary{\n      /* background-color: #4ca115; */\n  }\n  \n  /* .btn.btn-outline-secondary {\n    color: #6c757d;\n    background-color: transparent;\n    background-image: none;\n    border-color: #6c757d;\n} */\n  \n  /* \n\nbody {\n    margin: 0px;\n    width: 100%;\n  }\n  .wrap {\n    margin: 0px auto;\n    width: 486px;\n  }\n  \n  .box {\n    width: 160px;\n    height: 120px;\n    float: left;\n    background: #347fc3;\n    border: 1px solid #fff;\n    overflow: hidden;\n  }\n  \n  .text {\n    /* text-align: center;\n    margin-top: 56px;\n    color: #fff;\n    font-size: 1.0em;\n    font-family: sans-serif;\n    text-transform: uppercase; */\n  \n  /* font-size: 55px;\n    padding: 1px 138px 0px 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  } */\n  \n  /*   \n  .animated {\n    animation-duration: 2.5s;\n    /* animation-fill-mode: both; */\n  \n  /* animation-iteration-count: infinite; */\n  \n  /* } */\n  \n  /*   \n  @keyframes bounce {\n    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}\n    40% {transform: translateY(-30px);}\n    60% {transform: translateY(-15px);}\n  }\n  .bounce {\n    animation-name: bounce;\n  } */\n  \n  h1{\n    font-size: 4rem;\n    font-family: 'Source Sans Pro', sans-serif;\n    padding: 0 0 30px 0;\n}\n  \n  /* p{\n    font-size: 55px;\n    padding: 1px 138px 0px 0;\n    font-family: 'Source Sans Pro', sans-serif;\n\n} */\n  \n  .dd{\n    font-size: 55px;\n    padding: 1px 0px 0px 0;\n    font-family: 'Source Sans Pro', sans-serif;\n\n}\n  \n  .bg1 {\n    background: #3c8a2e;\n}\n  \n  .bg {\n    background: url('footer.png') no-repeat bottom right;\n    width: 100%;\n    height: auto;\n    background-size: cover;\n    background-position: -5px -8.20751px;\n    padding: 25px 0;\n    margin-top: 50px;\n}\n  \n  /* image blocks */\n  \n  .clear {\n    clear: both;\n}\n  \n  .chead {\n    font-size: 50px;\n}\n  \n  .ctext {\n    text-align: justify;\n}\n  \n  .cc {\n    width: 160px;\n    height: 160px;\n}\n  \n  .cc1 {\n    border: none;\n}\n  \n  .chead1 {\n    padding: 10px;\n}\n  \n  .cmain {\n    padding: 50px;\n}\n  \n  .list li {\n    display: inline-block;\n    padding: 7px 12px;\n}\n  \n  .pi {\n    /* IE 9 */\n    -webkit-transform: skewY(20deg);\n    /* Safari 3-8 */\n    transform: skewY(20deg);\n}\n  \n  .pi-right {\n    /* IE 9 */\n    -webkit-transform: skewY(-15deg);\n    /* Safari 3-8 */\n    transform: skewY(-15deg);\n}\n  \n  .txt-rght{\n    font-weight: bold;\n    font-size: 1.3rem;\n    text-decoration: none;\n}\n  \n  /* back ground image /////\n.bgim{\n\n    background: url(\"../../assets/pngs/1.png\") no-repeat ;\n    width: 100%;\n     height: 100vh;\n     background-size: cover;\n     background-position: top left;\n}\n*/\n  \n  .state3 {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 30%;\n    left: 0;\n    margin: 0 auto;\n}\n  \n  .state4 {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 35%;\n    margin: 0 auto;\n}\n  \n  .pad {\n    padding: 19px 45px;\n    border: 2px solid white;\n}\n  \n  .state {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n}\n  \n  .book {\n    color: white;\n    font: 24px;\n}\n  \n  .size {\n    font-size: 24px;\n    padding: 5px 0 0 0;\n}\n  \n  .space {\n    padding: 30px 0 40px;\n}\n  \n  .align {\n    display: inline-block;\n    border: none;\n    padding: 15px;\n    text-align: center;\n}\n  \n  .align img {\n    width: 80% !important;\n    height: 80% !important;\n    max-width: 200px;\n}\n  \n  .align p {\n    font-size: 1.5rem;\n}\n  \n  .cbr {\n    border: 5px solid #005f33;\n}\n  \n  .state1 {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n}\n  \n  .hand1 {\n    width: 80%;\n    display: inline-block;\n    padding: 10px;\n    text-align: justify;\n}\n  \n  .img-css {\n    padding: 9px 1px 14px 29px;\n}\n  \n  .triangle-down {\n    width: 0;\n    height: 0;\n    border-left: 57px solid transparent;\n    border-right: 57px solid transparent;\n    border-top: 50px solid black;\n    float: right;\n}\n  \n  .container1 {\n    width: 768px;\n    margin: 0 auto;\n}\n  \n  /* top header css */\n  \n  .header-main {\n    background-color: #fefefe;\n}\n  \n  .header-main .brand-logo {\n    width: 100px\n}\n  \n  .header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n  \n  .border-left {\n    border: 0px !important;\n    position: relative;\n}\n  \n  .border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n  \n  .rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n  \n  .drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n  \n  .drag ul li:hover {\n    background-color: #4ca115;\n}\n  \n  .active {\n    background-color: #4ca115;\n}\n  \n  .poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n  \n  /* top header css ends here */\n  \n  /* custom css starts here*/\n  \n  .header-main{\n    background-color: #fefefe;\n}\n  \n  .header-main .brand-logo{\n    width: 100px\n}\n  \n  .header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n  \n  /* .txt-img {\n    top: 50%;\n    -webkit-transform: translatey(-50%);\n    transform: translatey(-50%);\n    width: 100%;\n    display: block;\n    right: 30%;\n    left: 0;\n    text-align: center;\n    position: absolute !important;\n    color: #fff;\n    font-size: 1.5rem;\n} */\n  \n  .txt-img{\n    top: 38%;\n    -webkit-transform: translatey(-50%);\n    transform: translatey(-50%);\n    width: 100%;\n    display: block;\n    right: 30%;\n    left: 0;\n    text-align: center;\n    position: absolute !important;\n    color: #fff;\n    font-size: 1.5rem;\n    left: -23%;\n}\n  \n  .txt-p {\n    margin: 15px 0;\n    font-size: 1.2rem;\n}\n  \n  .idea-main {\n    background: #000;\n    padding: 20px;\n}\n  \n  .idea-main h2 {\n    font-size: 2.3rem;\n    color: #fff;\n}\n  \n  .idea-main h2 span {\n    color: #3d882f;\n}\n  \n  .idea-main p {\n    color: #fff;\n    font-size: 1.6rem;\n}\n  \n  .hand-container {\n    background-image: radial-gradient( circle at bottom center, #f5f5f5, #fff 50%);\n}\n  \n  .hand-img {\n    width: 150px;\n    height: auto;\n    border: 0px;\n}\n  \n  .parallax.section {\n    background-image: url('number_count.jpg');\n    /*background-position: -5px -7.00751px;*/\n    display: block;\n    height: 100%;\n    min-height: 100%;\n    overflow: hidden;\n    position: relative;\n    vertical-align: sub;\n    width: 100%;\n    z-index: 2;\n    padding: 90px 0;\n    background-size: cover;\n}\n  \n  .round {\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 50%;\n    padding: 30px 16px;\n    color: #fff;\n}\n  \n  .round img {\n    width: 100%;\n    max-width: 85px;\n}\n  \n  .round p {\n    margin: 1rem auto;\n    font-size: 1.8rem;\n}\n  \n  .round p span {\n    border-bottom: 1px solid #3d882f;\n}\n  \n  .btn-outline-secondary{\n    padding: 10px 50px;\n    border: 2px solid #fff;\n    font-size: 1.6rem;\n    border-radius: 60px;\n}\n  \n  h3 {\n    font-size: 1rem;\n    font-weight: 400;\n    text-transform: uppercase;\n}\n  \n  .foot-links{\n    list-style: none;\n    padding: 0;\n}\n  \n  .foot-links li{\n    padding: 10px 0 0px;\n}\n  \n  ul.nav-list.list a{\n    color: #000;\n}\n  \n  .foot-com{\n    margin-top: 2em;\n    bottom: 0;\n    right: 0;\n}\n  \n  .foot-com h6{\n    margin-left: 20%;\n    margin-bottom: 0;\n    font-size: 1.3rem;\n    font-weight: 400;\n}\n  \n  .footer-lower{\n    /* padding: 20px 0 0 0; */\n    /* margin-top: 5em; */\n}\n  \n  .footer-lower img{\n    width: 40px;\n    height: auto;\n    border-radius: 5px;\n}\n  \n  .footer-lower li{\n    padding: 7px 25px;\n    font-size: 0.9rem;\n}\n  \n  .float-right li{\n    padding: 0px 25px;\n}\n  \n  .float-right li a{\n    font-size: 0.9rem;\n}\n  \n  .bottomSocialMedia img{\n    height: 20px;\n    width: 20px;\n}\n  \n  /* @include media-breakpoint-up(xs){\n.head{\n        font-size:20px;\n    }\n} */\n  \n  /* media queries */\n  \n  /********************* 120 width   ****************************/\n  \n  @media only screen and (min-width: 120px) {\n    .head {\n        font-size: 20px;\n    }\n    .align img {\n        width: 168px;\n        height: 148px;\n    }\n    .img-css {\n        padding: 9px 1px 14px 29px;\n    }\n    .state {\n        top: 89%;\n        -webkit-transform: translatey(-50%);\n        transform: translatey(-91%);\n        width: 100%;\n        max-width: 176px;\n        right: -62px;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state1 {\n        top: 79%;\n        -webkit-transform: translatey(-50%);\n        transform: translatey(-50%);\n        width: 100%;\n        max-width: 105px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state4 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 70%;\n        margin: 0 auto;\n    }\n    .state3 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .pad {\n        margin: 2px;\n        padding: 0px 0px;\n        font-size: 12px;\n    }\n    .book {\n        color: white;\n        font-size: 10px;\n    }\n}\n  \n  /********************* 576 width   ****************************/\n  \n  @media only screen and (min-width: 576px) {\n    .head {\n        font-size: 30px;\n    }\n    .align img {\n        width: 211px;\n        height: 199px;\n    }\n    .img-css {\n        padding: 0 0 0 0;\n    }\n    .pad {\n        margin: 7px;\n        padding: 6px 12px;\n    }\n   \n    .state {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state1 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .book {\n        color: white;\n        font-size: 24px;\n    }\n    .state4 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 70%;\n        margin: 0 auto;\n    }\n    .state3 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 30%;\n        left: 0;\n        margin: 0 auto;\n    }\n    .pad {\n        margin: 2px;\n        padding: 0px 0px;\n        font-size: 14px;\n    }\n}\n  \n  /********************* 768 width   ****************************/\n  \n  @media only screen and (min-width: 768px) {\n    .head {\n        font-size: 30px;\n    }\n    .align img {\n        width: 211px;\n        height: 199px;\n    }\n    .state {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state3 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 27%;\n        left: 0;\n        margin: 0 auto;\n    }\n    .state4 {\n        top: 70%;\n        -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 0;\n        left: 35%;\n        margin: 0 auto;\n    }\n    .pad {\n        padding: 19px 45px;\n        border: 2px solid white;\n        font-size: 22px;\n    }\n    .state1 {\n        top: 82%;\n        -webkit-transform: translatey(-50%);\n        transform: translatey(-50%);\n        width: 100%;\n        max-width: 200px;\n        right: 260px;\n        left: 0;\n        margin: 0 auto;\n    }\n    .pad {\n        margin: 2px;\n        padding: 3px 15px;\n        font-size: 20px;\n        border-radius: 0.2in;\n    }\n    .book {\n        color: white;\n        font-size: 24px;\n    }\n    .triangle-down {\n        width: 50px;\n        height: auto;\n        border-left: 57px solid transparent;\n        border-right: 57px solid transparent;\n        border-top: 50px solid black;\n        float: right;\n        right: 40px;\n    }\n    .triangle-container {\n        width: 90%;\n        display: inline-block;\n    }\n    .container1 {\n        width: 576;\n        margin: 0 auto;\n    }\n    /********************* 1024 width   ****************************/\n    @media only screen and (min-width: 1024px) {\n        .head {\n            font-size: 35px;\n        }\n        .align img {\n            width: 251px;\n            height: 217px;\n        }\n        .state {\n            top: 70%;\n            -webkit-transform: translatey(-50%);\n                    transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 0;\n            left: 0;\n            margin: 0 auto;\n        }\n        .state3 {\n            /* top: 70%;\n            transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 30%;\n            left: 0;\n            margin: 0 auto; */\n            top: 72%;\n            -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 71%;\n            left: 0;\n            margin: 0 auto;\n        }\n        }\n        .state4 {\n            /* top: 70%;\n            transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 0;\n            left: 35%;\n            margin: 0 auto; */\n             \n                top: 72%;\n                -webkit-transform: translatey(-50%);\n                transform: translatey(-50%);\n                width: 100%;\n                max-width: 200px;\n                right: 0;\n                left: -22%;\n                margin: 0 auto;\n            \n        }\n        .pad {\n            padding: 10px 50px;\n            border: 2px solid #fff;\n            font-size: 1.6rem;\n            border-radius: 60px;\n        }\n        .state1 {\n            top: 70%;\n            -webkit-transform: translatey(-50%);\n                    transform: translatey(-50%);\n            width: 100%;\n            max-width: 200px;\n            right: 0;\n            left: 0;\n            margin: 0 auto;\n        }\n        .triangle-down {\n            width: 0;\n            height: 0;\n            border-left: 57px solid transparent;\n            border-right: 57px solid transparent;\n            border-top: 50px solid black;\n            float: right;\n        }\n        .container1 {\n            width: 768px;\n            margin: 0 auto;\n        }\n    \n}\n  \n  .poi {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  \n  <div class=\"position-relative\">\n\n    <img class=\"img-fluid\" src=\"../../assets/login/newone.jpg\" alt=\"Chania\">\n    <div class=\"txt-img\">\n      <!-- <p class=\"dd first\">Don't dirty it in</p>\n     <span> <p class=\"second\">the  FIRST PLACE</p></span>\n      <h1 class=\"third\"><b>LET'S RECYCLE</b> now</h1> -->\n      <p class=\"ll\"> <span style=\"padding:0 13px 0 0;\"> Don't dirty it in </span> <br> <span class=\"dd\">  the FIRST PLACE</span> <br> <span style=\"padding: 0 0 0 72px;\"><b>LET'S RECYCLE</b> now</span></p>\n    </div>\n\n\n    <div class=\"position-absolute state3\">\n      <button class=\"btn btn-outline-secondary pad\">\n        <a routerLink=\"/design\" class=\"a\" style=\"color:white;text-decoration: none;\">Login</a></button>\n    </div>\n    <div class=\"position-absolute state4\">\n      <button class=\"btn btn-outline-secondary pad\">\n        <a routerLink=\"/signup\" style=\"color:white;text-decoration: none;\">Signup</a></button>\n    </div>\n  </div>\n  <!----Blocks of data --------------------->\n  <div class=\"\">\n    <div class=\"text-center\">\n      <p class=\"txt-p\"> Read about recycling process </p>\n      <h1 class=\"head\">WHAT AND HOW TO RECYCLE</h1>\n    </div>\n    <div class=\"container  space\">\n      <div class=\"card col-md-4 align\">\n        <a routerLink=\"/content\">\n          <img class=\"card-img-top rounded-circle \" src=\"../../assets/newimg/2.png\" alt=\"Card image\" class=\"img-css\">\n        </a>\n        <p> Recycling</p>\n\n      </div>\n      <div class=\"card col-md-4 align\">\n        <a routerLink=\"/content\">\n          <img class=\"card-img-top rounded-circle \" src=\"../../assets/newimg/3.png\" alt=\"Card image\" class=\"img-css\">\n        </a>\n        <p> Recycling</p>\n      </div>\n      <div class=\"card col-md-4 align\">\n        <a routerLink=\"/content\">\n          <img class=\"card-img-top rounded-circle \" src=\"../../assets/newimg/4.png\" alt=\"Card image\" class=\"img-css\">\n        </a>\n        <p> Recycling</p>\n\n      </div>\n      <div class=\"row justify-content-md-center\">\n        <div class=\"card col-md-4 align\" id=\"card\">\n          <a routerLink=\"/content\">\n            <img class=\"card-img-top rounded-circle \" src=\"../../assets/newimg/5.png\" alt=\"Card image\" class=\"img-css\">\n          </a>\n          <p> Recycling</p>\n        </div>\n        <div class=\"card col-md-4 align\" id=\"card\">\n          <a routerLink=\"/content\">\n            <img class=\"card-img-top rounded-circle \" src=\"../../assets/newimg/6.png\" alt=\"Card image\" class=\"img-css\">\n          </a>\n          <p> Recycling</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!------------ after blocks  --------------------------->\n\n\n  <div class=\"text text-center idea-main\">\n    <h2>A New <span> IDEA</span></h2>\n    <P> How and Why Reboxit</P>\n\n  </div>\n  <div class=\"container\">\n    <div class=\"triangle-container\">\n      <div class=\"triangle-down\"></div>\n    </div>\n\n  </div>\n\n  <!------------- hand & content ------------------------->\n\n\n  <div class=\"hand-container container\">\n\n    <div class=\"clearfix\">\n\n      <img src=\"../../assets/newimg/7.png\" alt=\"hand\" class=\"img-thumbnail float-right hand-img\" />\n      <p class=\"hand1\"> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as\n        opposed to using\n        'Content here, content here', making it look like readable English.\n\n        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>\n\n      <p class=\"hand1\">\n        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,\n        content here', making it look like readable English.\n      </p>\n    </div>\n\n\n\n  </div>\n\n  <!-------------hands images-------------->\n\n  <div class=\"parallax section\">\n    <div class=\"container\">\n      <div class=\"row text-center\">\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"round\">\n            <span> <img src=\"../../assets/pngs/glass_home.png\" /></span>\n            <p class=\"stat_count\"><span>2846</span></p>\n            <h3>Tons Glass</h3>\n          </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"round\">\n            <span> <img src=\"../../assets/pngs/plastic_home.png\" /></span>\n            <p class=\"stat_count\"><span>1576</span></p>\n            <h3>Tons Plastic</h3>\n          </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"round\">\n            <span> <img src=\"../../assets/pngs/paper_home.png\" /></span>\n            <p class=\"stat_count\"><span>1700</span></p>\n            <h3>Tons Paper</h3>\n          </div>\n        </div>\n\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n          <div class=\"round\">\n            <span> <img src=\"../../assets/pngs/iron_home.png\" /></span>\n            <p class=\"stat_count\"><span>500</span></p>\n            <h3>Tons Iron</h3>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!----------------van------------------->\n\n  <div class=\"position-relative\">\n\n    <img class=\"img-fluid\" src=\"../../assets/newimg/9.png\" alt=\"Chania\">\n\n    <div class=\"position-absolute state1\">\n      <button class=\"btn btn-outline-secondary pad1\">\n\n        <a routerLink=\"/design\" style=\"color:white;text-decoration:none;\">Book a pickup</a>\n      </button>\n    </div>\n  </div>\n\n  <!----------------footer----------------->\n\n  <!-- <footer class=\"section footer-classic context-dark bg-image bg\">\n    <div class=\"container\">\n      <div class=\"row row-30\">\n        <div class=\"col-md-3 foot \">\n\n          <h5>Associates</h5>\n\n          <ul class=\"foot-links\">\n            <li>Scrap Dealer</li>\n            <li>Aggregator</li>\n            <li>Recycler</li>\n          </ul>\n\n\n        </div>\n\n        <div class=\"col-sm-3 foot\">\n          <h5>Service</h5>\n\n          <ul class=\"foot-links\">\n            <li>Home</li>\n            <li>Shop/Mall</li>\n            <li>Institutions</li>\n            <li>Banks</li>\n            <li>Corporate Office</li>\n            <li>Other Business</li>\n          </ul>\n\n\n        </div>\n\n\n        <div class=\"col-md-6 \">\n          <div style=\"display:flex; flex-direction:column\" class=\"arraneInColumn\">\n            <ul class=\"nav-list list float-right\">\n              <li><a href=\"#\">About us</a></li>\n              <li><a href=\"#\">Contact us</a></li>\n              <li><a href=\"#\">FAQ's</a></li>\n            </ul>\n            \n          <div class=\"foot-com\">\n            <h6>Reboxit Pvt. Ltd.</h6>\n            <ul class=\"nav-list list\">\n              <li><a href=\"#\">Terms & Conditions</a></li>\n              <li><a href=\"#\">Privacy Policy</a></li>\n\n            </ul>\n          </div>\n        </div>\n        </div>\n        <div style=\"margin-top:1em center\" class=\"bottomSocialMedia\">\n          <ul class=\"nav-list list\">\n            <li class=\"pi-right\"><a href=\"#\"> <img src=\"../../assets/pngs/instagarm.png\" /> </a></li>\n            <li class=\"pi\"><a href=\"#\"><img src=\"../../assets/pngs/facebook.png\" /></a></li>\n            <li class=\"pi\"><a href=\"#\"> <img src=\"../../assets/pngs/linkdin.png\" /></a></li>\n            <li class=\"pi-right txt-rght\"><a href=\"\">Follow Us</a></li>\n          </ul>\n        </div> -->\n      <!-- </div>\n      <div class=\"row footer-lower justify-content-md-center\">\n\n        <div class=\"col-md-6\">\n          <ul class=\"nav-list list\">\n            <li class=\"pi-right\"><a href=\"#\"> <img src=\"../../assets/pngs/instagarm.png\" /> </a></li>\n            <li class=\"pi\"><a href=\"#\"><img src=\"../../assets/pngs/facebook.png\" /></a></li>\n            <li class=\"pi\"><a href=\"#\"> <img src=\"../../assets/pngs/linkdin.png\" /></a></li>\n            <li class=\"pi-right txt-rght\"><p>Follow Us</p></li>\n\n          </ul>\n        </div>\n\n\n      </div>\n    </div>\n  </footer> --> \n  <!-- footer -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/more/more.component.css":
/*!*****************************************!*\
  !*** ./src/app/more/more.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag ul li a{\n    color:white;\n    font-size: 14px;\n    padding: 0 15px;\n}\n.bg1{\n    background: #005f33;\n}"

/***/ }),

/***/ "./src/app/more/more.component.html":
/*!******************************************!*\
  !*** ./src/app/more/more.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"\">\n    <img src=\"../assets/images/Categories/logo1.png\">\n  </div>\n  <!-----Navigation Starts Here-->\n  \n  <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto \">\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/design\" >Price List <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/design\">Request Pickup</a>\n        </li>\n        <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/design\"> My Account</a>\n        </li>\n       \n       <li class=\"nav-item poi\">\n          <a class=\"nav-link\">Help</a>\n     </li>\n     <li class=\"nav-item poi\">\n          <a class=\"nav-link\" ><i class=\"fas fa-phone\"></i></a>\n      </li>\n      </ul>\n    \n    </div>\n  </nav>\n\n  <!-----Content of Recycling-->\n\n \n \n\n  </div>"

/***/ }),

/***/ "./src/app/more/more.component.ts":
/*!****************************************!*\
  !*** ./src/app/more/more.component.ts ***!
  \****************************************/
/*! exports provided: MoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreComponent", function() { return MoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more',
            template: __webpack_require__(/*! ./more.component.html */ "./src/app/more/more.component.html"),
            styles: [__webpack_require__(/*! ./more.component.css */ "./src/app/more/more.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/myaccount/myaccount.component.css":
/*!***************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo & navigation*/\n\n    .bg1{\n        background: #3c8a2e;\n    }\n\n    .poi{\n    cursor: pointer;\n}\n\n    /* top header css */\n\n    .header-main {\n    background-color: #fefefe;\n}\n\n    .header-main .brand-logo {\n    width: 100px\n}\n\n    .header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n    .border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n    .border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n    .rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n    .drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n    .drag ul li:hover {\n    background-color: #4ca115;\n}\n\n    .active {\n    background-color: #4ca115;\n}\n\n    .poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n\n    /* top header css ends here */\n\n    .body-container{\n    background-color: #f2f0f1;\n    padding: 20px;\n}\n\n    .body-container .sec{\n    background: #fff;\n    \n    min-height: 800px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n    padding: 10px 15px;\n}\n\n    .body-container .sec h5, .body-container .sec p.count {\n    color: #3c8a2e;\n}\n\n    .tree-img{\n    background: url('tree.png') no-repeat bottom right;  \n    background-size: cover;\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n}\n\n    .tree-img::after{\n    content: '';\n    background: url('tree.png') no-repeat bottom right;\n    background-size: cover;\n    height: 100%;\n    width: 100%;\n    position: relative;\n    top: -3px;\n    left: 10px;\n    display: inline-block;\n    opacity: 0.3;\n}\n\n    h4::before {\n    content: '';\n    width: 40px;\n    height: 2px;\n    background-color: rgb(33,37,41);\n    position: relative;\n    display: inline-block;\n    top: -4px;\n    margin-right: 15px;\n}\n\n    h4::after {\n    content: '';\n    width: 40px;\n    height: 2px;\n    background-color: rgb(33,37,41);\n    position: relative;\n    display: inline-block;\n    top: -4px;\n    margin-left: 15px;\n\n}\n\n    ul.personal-info {\n    padding: 20px 20px 20px 0;\n    list-style: none;\n    margin: 0;\n}\n\n    ul.personal-info li label {\n    width: 100px;\n}\n\n    /* starts here accordion*/\n\n    section{\n\tpadding: 30px 0;\n}\n\n    #accordion-style-1 h1,\n#accordion-style-1 a{\n    color:#3c8a2e;\n}\n\n    #accordion-style-1 .btn-link {\n    font-weight: 400;\n    color: #3c8a2e;\n    background-color: transparent;\n    text-decoration: none !important;\n    font-size: 16px;\n    font-weight: bold;\n\tpadding-left: 25px;\n}\n\n    .card{\n    border-radius: 0;\n    margin-bottom: 1em;\n    border: 0;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\n    .card-header{\n    background: transparent;\n    border-radius: 0;\n    border: 0;\n    cursor: pointer;\n}\n\n    .card-header label.bordered{   \n    border-right: 1px solid #000;\n}\n\n    .card-header label{\n    margin-bottom: 0rem;\n    padding: 0.5em 1.5em;\n    font-weight: 700;\n    cursor: pointer;\n}\n\n    .card-header label:first-child{\n    padding-left: 0.1em\n}\n\n    .card-header label:last-child{\n    padding-left: 0.1em\n}\n\n    .last{\n    float: right;\n}\n\n    #accordion-style-1 .card-body {\n    border-top: 2px solid #007b5e;\n}\n\n    #accordion-style-1 .card-header .btn.collapsed .fa.main{\n\tdisplay:none;\n}\n\n    #accordion-style-1 .card-header .btn .fa.main{\n\tbackground: #007b5e;\n    padding: 13px 11px;\n    color: #ffffff;\n    width: 35px;\n    height: 41px;\n    position: absolute;\n    left: -1px;\n    top: 10px;\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n\tdisplay:block;\n}\n\n    .borderless td , .borderless th{\n    border: none;\n}\n\n    .download{\n    margin: 0 auto;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n    width: 100%;\n    left: 50%;\n    color: #3c8a2e;\n}\n\n    .download p.download-txt{\n    font-size: 0.8rem\n}\n\n    /*ends here */"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.html":
/*!****************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <div class=\"body-container\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-3 sec\">\n          <h3>Personal Info:</h3>\n\n          <ul class=\"personal-info\">\n            <li>\n              <label><strong>Name:</strong></label>\n              {{UserDetails.username}}\n            </li>\n\n            <li>\n              <label><strong>Address:</strong></label>\n              1-5-286/2/4/55\n            </li>\n\n            <li>\n              <label style=\"width:110px\"><strong>Type Of User:</strong></label>\n                {{UserDetails.usertype.replace(\"_\", \" \")}}\n            </li>\n\n            <li>\n              <label><strong>Phone No:</strong></label>\n              +91-{{UserDetails.phone}}\n            </li>\n\n\n          </ul>\n\n          <p class=\"float-right\"><a href=\"#\">Edit</a></p>\n\n        </div>\n        <div class=\"col-md-6\" id=\"accordion-style-1\">\n          <h3 style=\"text-align:center\">Present Order</h3>\n\n          <section>\n            <div class=\"row\">\n\n              <div class=\"col-md-12 mx-auto\">\n                <div class=\"accordion\" id=\"accordionPresent\">\n\n                  <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                      <div class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"false\"\n                        aria-controls=\"collapse1\">\n                        <label class=\"bordered\">Slot: 02-12-2019</label>\n                        <label class=\"bordered\">Quantity: {{TotalQuantity}}Kg</label>\n                        <label>Price: Rs {{10 * TotalQuantity}}/-</label>\n                        <label class=\"last\">View</label>\n                      </div>\n                    </div>\n\n                    <div id=\"collapse1\" class=\"collapse  fade\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPresent\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table borderless\">\n                                <!-- <thead>\n                                  <th>\n                                    <h5>Paper</h5>\n                                  </th>\n                                </thead> -->\n\n                                <tbody>\n                                  <tr *ngFor=\"let item of cart\">\n                                    <td>{{item.Name}}</td>\n                                    <td>{{item.Quantity}}</td>\n                                    <td>Rs {{item.Price * item.Quantity}}.00/-</td>\n                                  </tr>\n                                  <!-- <tr>\n                                    <td>Copper</td>\n                                    <td>10</td>\n                                    <td>25.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Pet Bottles</td>\n                                    <td>2</td>\n                                    <td>15.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Tetra packs</td>\n                                    <td>5</td>\n                                    <td>48.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>News Papers</td>\n                                    <td>7</td>\n                                    <td>56.00</td>\n                                  </tr> -->\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <div class=\"download\">\n                              <p><i class=\"fa fa-download\" aria-hidden=\"true\"></i></p>\n                              <p class=\"download-txt\">Download Certificate</p>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n<!-- \n                  <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                      <div class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#collapse2\" aria-expanded=\"false\"\n                        aria-controls=\"collapse2\">\n                        <label class=\"bordered\">Slot: 02-12-2019</label>\n                        <label class=\"bordered\">Quantity: 9Kg</label>\n                        <label>Price: Rs 45/-</label>\n                        <label class=\"last\">View</label>\n                      </div>\n                    </div>\n\n                    <div id=\"collapse2\" class=\"collapse  fade\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPresent\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table borderless\">\n                                <thead>\n                                  <th>\n                                    <h5>Paper</h5>\n                                  </th>\n                                </thead>\n\n                                <tbody>\n                                  <tr>\n                                    <td>Bottle</td>\n                                    <td>5</td>\n                                    <td>35.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Copper</td>\n                                    <td>10</td>\n                                    <td>25.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Pet Bottles</td>\n                                    <td>2</td>\n                                    <td>15.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Tetra packs</td>\n                                    <td>5</td>\n                                    <td>48.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>News Papers</td>\n                                    <td>7</td>\n                                    <td>56.00</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <div class=\"download\">\n                              <p><i class=\"fa fa-download\" aria-hidden=\"true\"></i></p>\n                              <p class=\"download-txt\">Download Certificate</p>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div> -->\n<!-- \n\n                  <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                      <div class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#collapse3\" aria-expanded=\"false\"\n                        aria-controls=\"collapse3\">\n                        <label class=\"bordered\">Slot: 02-12-2019</label>\n                        <label class=\"bordered\">Quantity: 9Kg</label>\n                        <label>Price: Rs 45/-</label>\n                        <label class=\"last\">View</label>\n                      </div>\n                    </div>\n\n                    <div id=\"collapse3\" class=\"collapse  fade\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPresent\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table borderless\">\n                                <thead>\n                                  <th>\n                                    <h5>Paper</h5>\n                                  </th>\n                                </thead>\n\n                                <tbody>\n                                  <tr>\n                                    <td>Bottle</td>\n                                    <td>5</td>\n                                    <td>35.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Copper</td>\n                                    <td>10</td>\n                                    <td>25.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Pet Bottles</td>\n                                    <td>2</td>\n                                    <td>15.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Tetra packs</td>\n                                    <td>5</td>\n                                    <td>48.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>News Papers</td>\n                                    <td>7</td>\n                                    <td>56.00</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <div class=\"download\">\n                              <p><i class=\"fa fa-download\" aria-hidden=\"true\"></i></p>\n                              <p class=\"download-txt\">Download Certificate</p>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div> -->\n\n\n\n\n                </div>\n              </div>\n            </div>\n          </section><!-- present sectin ends here-->\n\n\n\n          <h3 _ngcontent-c1=\"\" class=\"text-center text-capitalize\">Previous Orders</h3>\n\n          <!-- <section>\n            <div class=\"row\">\n\n              <div class=\"col-md-12 mx-auto\">\n                <div class=\"accordion\" id=\"accordionPrevious\">\n\n                  <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                      <div class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#previouscollapse1\" aria-expanded=\"false\"\n                        aria-controls=\"previouscollapse1\">\n                        <label class=\"bordered\">Slot: 02-12-2019</label>\n                        <label class=\"bordered\">Quantity: 9Kg</label>\n                        <label>Price: Rs 45/-</label>\n                        <label class=\"last\">View</label>\n                      </div>\n                    </div>\n\n                     <div id=\"previouscollapse1\" class=\"collapse  fade\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPrevious\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table borderless\">\n                                <thead>\n                                  <th>\n                                    <h5>Paper</h5>\n                                  </th>\n                                </thead>\n\n                                <tbody>\n                                  <tr>\n                                    <td>Bottle</td>\n                                    <td>5</td>\n                                    <td>35.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Copper</td>\n                                    <td>10</td>\n                                    <td>25.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Pet Bottles</td>\n                                    <td>2</td>\n                                    <td>15.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Tetra packs</td>\n                                    <td>5</td>\n                                    <td>48.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>News Papers</td>\n                                    <td>7</td>\n                                    <td>56.00</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <div class=\"download\">\n                              <p><i class=\"fa fa-download\" aria-hidden=\"true\"></i></p>\n                              <p class=\"download-txt\">Download Certificate</p>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                      <div class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#previouscollapse2\" aria-expanded=\"false\"\n                        aria-controls=\"previouscollapse2\">\n                        <label class=\"bordered\">Slot: 02-12-2019</label>\n                        <label class=\"bordered\">Quantity: 9Kg</label>\n                        <label>Price: Rs 45/-</label>\n                        <label class=\"last\">View</label>\n                      </div>\n                    </div>\n\n                    <div id=\"previouscollapse2\" class=\"collapse  fade\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPrevious\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table borderless\">\n                                <thead>\n                                  <th>\n                                    <h5>Paper</h5>\n                                  </th>\n                                </thead>\n\n                                <tbody>\n                                  <tr>\n                                    <td>Bottle</td>\n                                    <td>5</td>\n                                    <td>35.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Copper</td>\n                                    <td>10</td>\n                                    <td>25.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Pet Bottles</td>\n                                    <td>2</td>\n                                    <td>15.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Tetra packs</td>\n                                    <td>5</td>\n                                    <td>48.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>News Papers</td>\n                                    <td>7</td>\n                                    <td>56.00</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <div class=\"download\">\n                              <p><i class=\"fa fa-download\" aria-hidden=\"true\"></i></p>\n                              <p class=\"download-txt\">Download Certificate</p>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                      <div class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#previouscollapse3\" aria-expanded=\"false\"\n                        aria-controls=\"previouscollapse3\">\n                        <label class=\"bordered\">Slot: 02-12-2019</label>\n                        <label class=\"bordered\">Quantity: 9Kg</label>\n                        <label>Price: Rs 45/-</label>\n                        <label class=\"last\">View</label>\n                      </div>\n                    </div>\n\n                    <div id=\"previouscollapse3\" class=\"collapse  fade\" aria-labelledby=\"headingOne\" data-parent=\"#accordionPrevious\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-md-9\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table borderless\">\n                                <thead>\n                                  <th>\n                                    <h5>Paper</h5>\n                                  </th>\n                                </thead>\n\n                                <tbody>\n                                  <tr>\n                                    <td>Bottle</td>\n                                    <td>5</td>\n                                    <td>35.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Copper</td>\n                                    <td>10</td>\n                                    <td>25.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Pet Bottles</td>\n                                    <td>2</td>\n                                    <td>15.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>Tetra packs</td>\n                                    <td>5</td>\n                                    <td>48.00</td>\n                                  </tr>\n                                  <tr>\n                                    <td>News Papers</td>\n                                    <td>7</td>\n                                    <td>56.00</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                          <div class=\"col-md-3\">\n                            <div class=\"download\">\n                              <p><i class=\"fa fa-download\" aria-hidden=\"true\"></i></p>\n                              <p class=\"download-txt\">Download Certificate</p>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </section> -->\n          <!--sectin ends here-->\n          <h4 style=\"text-align:center; margin-top: 2em\">No Previous Orders</h4>\n        </div>\n        <!--Right section starts here-->\n        <div class=\"col-md-3 sec text-center\">\n          <h5>Trees Saved</h5>\n          <!-- <p class=\"count\">501</p> -->\n          <span class=\"tree-img\"></span>\n          <span class=\"tree-img\"></span>\n          <span class=\"tree-img\"></span>\n          <span class=\"tree-img\"></span>\n        </div>\n        <!--Right section ends here-->\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.ts ***!
  \**************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent(authService) {
        this.authService = authService;
        this.cart = [];
        this.totalamt = 0;
        this.totalkg = 0;
        this.TotalQuantity = 0;
        this.TotalPrice = 0;
        this.PreviousOrders = [];
    }
    MyaccountComponent.prototype.ngOnInit = function () {
        console.log(" From My Account Page");
        console.log(JSON.parse(localStorage.getItem("user")));
        this.UserDetails = JSON.parse(localStorage.getItem("user"));
        var meh = JSON.parse(localStorage.getItem("cart"));
        // this.cm=0;
        // if(meh)
        //   for(var g in meh)
        //   {
        //     this.cm++;
        //   }
        // for(var i in meh)
        // {
        //   this.cart.push([i,meh[i][0],meh[i][1]]);
        // }
        // console.log(this.cart);
        for (var i in meh) {
            this.cart.push({
                Name: i,
                Quantity: meh[i][0],
                Price: meh[i][1]
            });
            this.TotalPrice += meh[i][1];
            this.TotalQuantity += meh[i][0];
        }
    };
    MyaccountComponent.prototype.logout = function () {
        this.authService.logout();
    };
    MyaccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myaccount',
            template: __webpack_require__(/*! ./myaccount.component.html */ "./src/app/myaccount/myaccount.component.html"),
            styles: [__webpack_require__(/*! ./myaccount.component.css */ "./src/app/myaccount/myaccount.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MyaccountComponent);
    return MyaccountComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg1 {\r\n    background: #3c8a2e;\r\n}\r\n\r\n\r\n.header-main {\r\n    background-color: #fefefe;\r\n}\r\n\r\n\r\n.header-main .brand-logo {\r\n    width: 100px\r\n}\r\n\r\n\r\n.header-main .brand-logo img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n\r\n.poi {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.poi a{\r\n    color:white;\r\n    font-size: 16px;\r\n    /* font-family: Foundry Streling W01; */\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 13px 30px;\r\n}\r\n\r\n\r\n.rotate i {\r\n    -webkit-transform: rotate(100deg);\r\n            transform: rotate(100deg);\r\n}\r\n\r\n\r\n.border-left a::after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    height: 15px;\r\n    width: 100%;\r\n    bottom: 0;\r\n    border-left: 1px solid #fff;\r\n    top: 0;\r\n    left: 0;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    width: 1px;\r\n}\r\n\r\n\r\n.border-left {\r\n    border: 0px !important;\r\n    position: relative;\r\n}\r\n\r\n\r\n.drag ul li:hover {\r\n    background-color: #4ca115;\r\n\r\n}\r\n\r\n\r\n.drag ul li a {\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    padding: 13px 30px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\n\r\n.active {\r\n    background-color: #4ca115;\r\n}\r\n\r\n\r\n.poi {\r\n    cursor: pointer;\r\n   \r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"header-main\">\n    <div class=\"container\">\n      <div class=\"brand-logo\">\n        <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo.png\"></a>\n      </div>\n    </div>\n  <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto \">\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/pricelist\">Price List <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/design\">Book a Pickup</a>\n          </li>\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/associate\">Associates</a>\n          </li>\n          <li *ngIf=\"!userDetails\" class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/design\">Login</a>\n          </li>\n          <li *ngIf=\"userDetails\" class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/myaccount\"> My Account</a>\n          </li>\n          <li *ngIf=\"userDetails\" class=\"nav-item poi\">\n              <a class=\"nav-link\" (click)=\"logout()\"> Logout</a>\n          </li>\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\">Help</a>\n          </li>\n          <li class=\"nav-item poi border-left\">\n              <a class=\"nav-link rotate\"><i class=\"fa fa-phone\"></i></a>\n            </li>\n        </ul>\n\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var vm = this;
        setTimeout(function () {
            if (vm.authService.isLoggedIn()) {
                vm.userDetails = true;
            }
            else {
                vm.userDetails = false;
            }
        }, 1000);
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pickup/pickup.component.css":
/*!*********************************************!*\
  !*** ./src/app/pickup/pickup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo & navigation*/\n\n.bg1 {\n    background: #3c8a2e;\n}\n\n.poi {\n    cursor: pointer;\n}\n\n/* top header css */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n.poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n\n/* top header css ends here */\n\n/* body box css starts here */\n\n.box-container-main {\n    background: #f9f9f9;\n    padding: 30px;\n}\n\n.box-container {\n    background: #fff;   \n    min-height: 600px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\n.page-head {\n    text-align: center;\n    margin: 15px auto;\n}\n\n.page-head span {\n    color: #3c8a2e;\n}\n\nform.pickup-form {\n    width: 80%;\n    margin: 15px auto 30px;\n}\n\n.alert-danger {    \n    margin-right: 0.3rem;\n}\n\nform .form-group  label{\n    display: none;\n}\n\n.form-group{\n    margin-right: 0.3rem;\n}\n\ninput::-webkit-input-placeholder{\n    color: gray;\n}\n\ninput::-ms-input-placeholder{\n    color: gray;\n}\n\ninput::placeholder{\n    color: gray;\n}"

/***/ }),

/***/ "./src/app/pickup/pickup.component.html":
/*!**********************************************!*\
  !*** ./src/app/pickup/pickup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <!----Address fields -------------------------->\n\n  <div class=\"box-container-main\">\n    <div class=\"container\">\n      <div class=\"box-container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <p class=\"page-head\">Where and When do we come to Pick your <span>SCRAP?</span></p>\n          </div>\n        </div>\n\n        <div class=\"\">\n          <form [formGroup]=\"pickupForm\" class=\"pickup-form\">\n\n            <div style=\"display: flex; justify-content:space-around\" class=\"form-row col-md-12\">\n              <div class=\"col-md-5\">\n                <div class=\"form-group \">\n                  <label for=\"pincode\">Pincode : </label>\n                  <input type=\"text\" formControlName=\"pincode\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Enter Pincode\">\n                </div>\n                <div *ngIf=\"pickupForm.get('pincode').hasError('required') && pickupForm.get('pincode').touched \" class=\"alert alert-danger \">\n                  Pincode is required\n                </div>\n              </div>\n\n              <div class=\"col-md-5\">\n                <div class=\"form-group \">\n                  <label for=\"exampleFormControlSelect1\">Available slots:</label>\n                  <select formControlName=\"slot\" class=\"form-control form-control-sm\" id=\"exampleFormControlSelect1\">\n                    <option value=\"0\">Available slots</option>\n                    <option value=\"21/12/2018\">21/12/2018</option>\n                    <option value=\"28/12/2018\">28/12/2018</option>\n\n                  </select>\n                </div>\n              </div>\n            </div>\n\n\n            <div style=\"display: flex; justify-content:space-around\" class=\"form-row col-md-12\">\n              <div class=\"col-md-5\">\n                <div class=\"form-group \">\n                  <label for=\"location\">Location</label>\n                  <select id=\"inputState\" formControlName=\"location\" class=\"form-control\">\n                    <option value=\"0\">Select Location</option>\n                    <option *ngFor=\"let m of location\" value={{m}}>{{m}}</option>\n                  </select>\n\n                </div>\n                <div *ngIf=\"pickupForm.get('location').hasError('required') && pickupForm.get('location').touched \"\n                  class=\"alert alert-danger\">\n                  Location is required\n                </div>\n              </div>\n\n\n              <div class=\"col-md-5\">\n                <div class=\"form-group \">\n                  <label for=\"add1\">Address</label>\n                  <input type=\"text\" formControlName=\"address\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Enter Address\">\n                </div>\n                <div *ngIf=\"pickupForm.get('address').hasError('required') && pickupForm.get('address').touched \" class=\"alert alert-danger\">\n                  Adress is required\n                </div>\n              </div>\n            </div>\n\n\n            <!--\n            <div class=\"form-row col-md-12\">\n\n              <div class=\"form-group col-md-12\">\n                <input type=\"text\" formControlName=\"address1\" class=\"form-control\" id=\"inputAddress1\">\n              </div>\n            </div>-->\n\n\n            <div style=\"display: flex; justify-content:space-around\" class=\"form-row col-md-12\">\n              <div class=\"col-md-5\">\n                <div class=\"form-group \">\n                  <label for=\"city\">City</label>\n                  <input type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"inputCity\" placeholder=\"Enter City\">\n\n                </div>\n                <div *ngIf=\"pickupForm.get('city').hasError('required') && pickupForm.get('city').touched \" class=\"alert alert-danger\">\n                  City is required\n                </div>\n\n              </div>\n\n\n              <div class=\"col-md-5\">\n                <div class=\"form-group \">\n                  <label for=\"state\">State</label>\n                  <select id=\"inputState\" formControlName=\"state\" class=\"form-control\">\n                    <option value=\"0\">Select State</option>\n                    <option *ngFor=\"let m of states\" value={{m}}>{{m}}</option>\n                  </select>\n\n                </div>\n                <div *ngIf=\"pickupForm.get('state').hasError('required') && pickupForm.get('state').touched \" class=\"alert alert-danger\">\n                  State is required\n                </div>\n              </div>\n            </div>\n\n            <div style=\"display: flex; justify-content:space-around\" class=\"form-row col-md-12\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group \">\n                      <label for=\"phone\">Phone number</label>\n                      <input type=\"text\" formControlName=\"phone\" class=\"form-control\" id=\"phone\" placeholder=\"Enter phone number\">\n  \n                  </div>\n                  <div *ngIf=\"pickupForm.get('phone').hasError('required') && pickupForm.get('phone').touched \" class=\"alert alert-danger\">\n                      Phone number is required\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-5\">\n                    <div class=\"form-group \">\n                        <label for=\"phone\">Alternate Phone number</label>\n                        <input type=\"text\" formControlName=\"altphone\" class=\"form-control\" id=\"altphone\" placeholder=\"Alternate phone number\">\n    \n                    </div>\n                  \n                  </div>\n              </div>\n\n  \n            <div class=\" form-row col-md-12 text-center justify-content-center\">\n              <div class=\"form-group col-md-6\">\n                <button style=\"margin-top: 2em; text-transform: capitalize\" type=\"submit\" class=\"btn btn-success btn-block\" (click)=\"onSubmit()\" [disabled]=\"!pickupForm.valid\">\n                  Proceed</button>\n              </div>\n\n            </div>\n          </form>\n        </div>\n\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pickup/pickup.component.ts":
/*!********************************************!*\
  !*** ./src/app/pickup/pickup.component.ts ***!
  \********************************************/
/*! exports provided: PickupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupComponent", function() { return PickupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var PickupComponent = /** @class */ (function () {
    function PickupComponent(formBuilder, authService, db, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.db = db;
        this.router = router;
        this.location = [];
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.authService.isLoggedIn());
        this.pickupForm = this.formBuilder.group({
            location: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            slot: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            altphone: ['']
        });
        console.log("mew", JSON.parse(localStorage.getItem("user")));
        this.states = ["Andhra Pradesh", "Arunachal Pradesh ", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "National Capital Territory of Delhi", "Puducherry"];
        this.db.collection("locations").snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.location.push(res[i].payload.doc.id);
            }
        });
    };
    PickupComponent.prototype.logout = function () {
        this.authService.logout();
    };
    PickupComponent.prototype.pack = function () {
        var _this = this;
        var pro = new Promise(function (resolve, reject) {
            var details = _this.pickupForm.value;
            console.log(details);
            localStorage.setItem("pickup_details", JSON.stringify(details));
            localStorage.setItem("cm", JSON.stringify(0));
            console.log("rerouting");
            resolve("done");
        });
        return pro;
    };
    PickupComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.pack().then(function (res) { _this.router.navigate(["collections"]); });
                return [2 /*return*/];
            });
        });
    };
    PickupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pickup',
            template: __webpack_require__(/*! ./pickup.component.html */ "./src/app/pickup/pickup.component.html"),
            styles: [__webpack_require__(/*! ./pickup.component.css */ "./src/app/pickup/pickup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PickupComponent);
    return PickupComponent;
}());



/***/ }),

/***/ "./src/app/pricelist/pricelist.component.css":
/*!***************************************************!*\
  !*** ./src/app/pricelist/pricelist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.active a {\n\n}\n\n.bg1 {\n    background: #3c8a2e;\n}\n\n.bg {\n    background: url('footer.png') no-repeat bottom right;\n    width: 100%;\n    height: auto;\n    background-size: cover;\n    background-position: -5px -8.20751px;\n    padding: 50px 0;\n    margin-top: 50px;\n}\n\n/* image blocks */\n\n.clear {\n    clear: both;\n}\n\n.chead {\n    font-size: 50px;\n}\n\n.ctext {\n    text-align: justify;\n}\n\n.cc {\n    width: 160px;\n    height: 160px;\n}\n\n.cc1 {\n    border: none;\n}\n\n.chead1 {\n    padding: 10px;\n}\n\n.cmain {\n    padding: 50px;\n}\n\n.list li {\n    display: inline-block;\n    padding: 7px 12px;\n}\n\n.pi {\n    /* IE 9 */\n    -webkit-transform: skewY(20deg);\n    /* Safari 3-8 */\n    transform: skewY(20deg);\n}\n\n.pi-right {\n    /* IE 9 */\n    -webkit-transform: skewY(-15deg);\n    /* Safari 3-8 */\n    transform: skewY(-15deg);\n}\n\n.txt-rght {\n    font-weight: bold;\n    font-size: 1.3rem;\n    text-decoration: none;\n}\n\n.pad {\n    padding: 19px 45px;\n    border: 2px solid white;\n}\n\n.state {\n    top: 70%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    width: 100%;\n    max-width: 200px;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n}\n\n.book {\n    color: white;\n    font: 24px;\n}\n\n.size {\n    font-size: 24px;\n    padding: 5px 0 0 0;\n}\n\n.space {\n    padding: 30px 0 40px;\n}\n\n.align {\n    display: inline-block;\n    border: none;\n    padding: 15px;\n    text-align: center;\n}\n\n.align img {\n    width: 80% !important;\n    height: 80% !important;\n    max-width: 200px;\n}\n\n.align p {\n    font-size: 1.5rem;\n}\n\n.cbr {\n\n}\n\n/* top header css */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n.poi span {\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 2px 2px;\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    display: inline-block;\n    font-size: 8px;\n    position: relative;\n    top: -13px;\n    left: -13px;\n}\n\n/* top header css ends here */\n\n/* custom css starts here*/\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.txt-img {\n    top: 50%;\n    -webkit-transform: translatey(-50%);\n    transform: translatey(-50%);\n    width: 100%;\n    display: block;\n    right: 30%;\n    left: 0;\n    text-align: center;\n    position: absolute !important;\n    color: #fff;\n    font-size: 2rem;\n}\n\n.txt-p {\n    margin: 15px 0;\n    font-size: 1.2rem;\n}\n\nh1 {\n    color: #3c8a2e;\n    margin: 15px auto 25px;\n    text-align: center;\n    font-size: 1.4em;\n}\n\nh3 {\n    font-size: 1rem;\n    font-weight: 400;\n    text-transform: uppercase;\n}\n\n/* body box css starts here */\n\n.box-container-main {\n    background: #f9f9f9;\n    padding: 30px;\n}\n\n.box-container {\n    background: #fff;\n    padding: 1em;\n    min-height: 800px;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\n.thumbnail{\n    padding: 15px 10px;\n    border: 2px solid #3c8a2e;\n    margin: 10px;\n    text-align: center;\n    min-height: 120px;\n}\n\n.thumbnail img{\n    width: 100px;\n    float: left!important;\n    padding-right: 15px;\n}\n\n.caption{\n    padding: 10px;\n    color: #3c8a2e;\n}\n\n.thumbnail p{\n    line-height: 16px;\n}\n\n.thumbnail .cpt-head{\n    font-size: 0.8em;\n    font-weight: bold;\n}\n\n.thumbnail .cpt-sm{\n    display: block;\n    font-size: 0.6em;\n}\n\n/*\n.content-des-txt:hover{\n    border: 1px solid #ccc;\n    transform: scale(0.9);\n}\n*/\n\n/* @include media-breakpoint-up(xs){\n.head{\n        font-size:20px;\n    }\n} */\n\n/* media queries */\n\n/********************* 120 width   ****************************/\n\n@media only screen and (min-width: 120px) {\n    .head {\n        font-size: 20px;\n    }\n    .align img {\n        width: 168px;\n        height: 148px;\n    }\n    .img-css {\n        padding: 9px 1px 14px 29px;\n    }\n    .pad {\n        margin: 2px;\n        padding: 0px 0px;\n        font-size: 12px;\n    }\n    .book {\n        color: white;\n        font-size: 10px;\n    }\n}\n\n/********************* 576 width   ****************************/\n\n@media only screen and (min-width: 576px) {\n    .head {\n        font-size: 30px;\n    }\n    .align img {\n        width: 211px;\n        height: 199px;\n    }\n    .img-css {\n        padding: 0 0 0 0;\n    }\n    .pad {\n        margin: 7px;\n        padding: 6px 12px;\n    }\n    .book {\n        color: white;\n        font-size: 24px;\n    }\n    .pad {\n        margin: 2px;\n        padding: 0px 0px;\n        font-size: 14px;\n    }\n}\n\n/********************* 768 width   ****************************/\n\n@media only screen and (min-width: 768px) {\n    .head {\n        font-size: 30px;\n    }\n    .align img {\n        width: 211px;\n        height: 199px;\n    }\n    .pad {\n        padding: 19px 45px;\n        border: 2px solid white;\n        font-size: 22px;\n    }\n    .pad {\n        margin: 2px;\n        padding: 3px 15px;\n        font-size: 20px;\n        border-radius: 0.2in;\n    }\n    .book {\n        color: white;\n        font-size: 24px;\n    }\n    /********************* 1024 width   ****************************/\n    @media only screen and (min-width: 1024px) {\n        .head {\n            font-size: 35px;\n        }\n        .align img {\n            width: 251px;\n            height: 217px;\n        }\n        .pad {\n            padding: 10px 50px;\n            border: 2px solid #fff;\n            font-size: 1.6rem;\n            border-radius: 60px;\n        }\n        .triangle-down {\n            width: 0;\n            height: 0;\n            border-left: 57px solid transparent;\n            border-right: 57px solid transparent;\n            border-top: 50px solid black;\n            float: right;\n        }\n        .container1 {\n            width: 768px;\n            margin: 0 auto;\n        }\n    }\n}\n\n.poi {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/pricelist/pricelist.component.html":
/*!****************************************************!*\
  !*** ./src/app/pricelist/pricelist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <!-- body content starts here-->\n  <div class=\"box-container-main\">\n\n\n    <div class=\"container\">\n      <div class=\"box-container\">\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1>Reboxit Scrap Prices</h1>\n          </div>\n        </div>\n\n\n\n        <div class=\"row\">\n\n          <div class=\"col-md-3\">\n              <div class=\"thumbnail\">\n                  <img src=\"../assets/pngs/carton_boxes.png\" />\n                  <div class=\"caption\">\n                      <p><span class=\"cpt-head\">Carton Boxes</span>\n                      <span class=\"cpt-sm\">Rs 10 per KG</span>\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-md-3\">\n              <div class=\"thumbnail\">\n                  <img src=\"../assets/pngs/newspapers_magazines.png\" />\n                  <div class=\"caption\">\n                      <p><span class=\"cpt-head\">Newspapers & Magazines</span>\n                      <span class=\"cpt-sm\">Rs 10 per KG</span>\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-md-3\">\n              <div class=\"thumbnail\">\n                  <img src=\"../assets/pngs/tetra_pack.png\" />\n                  <div class=\"caption\">\n                      <p><span class=\"cpt-head\">Tera Packs</span>\n                      <span class=\"cpt-sm\">Rs 10 per KG</span>\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-md-3\">\n              <div class=\"thumbnail\">\n                  <img src=\"../assets/pngs/text_books.png\" />\n                  <div class=\"caption\">\n                      <p><span class=\"cpt-head\">Text Books & Note Books</span>\n                      <span class=\"cpt-sm\">Rs 10 per KG</span>\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-md-3\">\n              <div class=\"thumbnail\">\n                  <img src=\"../assets/pngs/other_bits_pieces.png\" />\n                  <div class=\"caption\">\n                      <p><span class=\"cpt-head\">Other Bits & Pieces</span>\n                      <span class=\"cpt-sm\">Rs 10 per KG</span>\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n\n        </div>\n\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- body content ends here-->\n\n\n</div>"

/***/ }),

/***/ "./src/app/pricelist/pricelist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pricelist/pricelist.component.ts ***!
  \**************************************************/
/*! exports provided: PricelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistComponent", function() { return PricelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricelistComponent = /** @class */ (function () {
    function PricelistComponent() {
    }
    PricelistComponent.prototype.ngOnInit = function () {
    };
    PricelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricelist',
            template: __webpack_require__(/*! ./pricelist.component.html */ "./src/app/pricelist/pricelist.component.html"),
            styles: [__webpack_require__(/*! ./pricelist.component.css */ "./src/app/pricelist/pricelist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricelistComponent);
    return PricelistComponent;
}());



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"productinfoModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n  \n  <!-- Modal content-->\n  <div class=\"modal-content\" *ngIf=\"fulldetails\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <h4 class=\"modal-title\">{{fulldetails.product_name}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{fulldetails.product_details}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n    </div>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent() {
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list.subscribe(function (det) {
            console.log(det);
            _this.fulldetails = det;
            $("#productinfoModal").modal('show');
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], ProductdetailsComponent.prototype, "list", void 0);
    ProductdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/productlist/productlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/productlist/productlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/productlist/productlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/productlist/productlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Image</th>\n      <th>Name</th>\n      <th>Price</th>\n      <th>Quatity</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let list of products\">\n        <td>{{list.product_id}}</td>\n        <td><img src=\"{{list.product_img}}\" class=\"img-thumbnail\" style=\"height:100px;\" /></td>\n        <td>{{list.product_name}}</td>\n        <td>{{list.product_price}}</td>\n        <td>{{list.product_quality}}\n             <button class=\"btn btn-success btn-xs plus\" (click)=\"add(list.product_id)\">\n               <i class=\"glyphicon glyphicon-plus\"></i>\n              </button>\n              <button class=\"btn btn-danger btn-xs minus\" (click)=\"del(list.product_id)\">\n                <i class=\"glyphicon glyphicon-minus\"></i>\n              </button>\n        </td>\n        <td>\n              <button class=\"btn btn-primary btn-sm\" (click)=\"getpopup(list)\">View</button> &nbsp;\n              <button class=\"btn btn-danger btn-sm\" (click)=\"delpopup(list.product_id)\">Delete</button>\n        </td>\n       </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td>Total Price</td><td colspan=\"6\" class=\"text-right\">{{total | currency: 'INR' }}</td>\n        </tr>\n      </tfoot>\n    </table>\n\n<app-productdetails [list] = \"selectedProduct\"></app-productdetails>"

/***/ }),

/***/ "./src/app/productlist/productlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductlistComponent = /** @class */ (function () {
    function ProductlistComponent() {
        this.upproducts = [];
        this.selectedProduct = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"];
        this.total = 0;
        this.products = [
            {
                product_id: "pd100",
                product_img: "https://rukminim1.flixcart.com/image/312/312/j7hxmkw0/computer/b/g/j/hp-na-laptop-original-imaexq9fgzxzhmas.jpeg?q=70",
                product_name: "Laptop",
                product_price: 30000,
                product_details: "Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Laptop  (15.6 inch, Onyx Black, 2.2 kg)",
                product_quality: 3
            },
            {
                product_id: "pd101",
                product_img: "https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",
                product_name: "Mobile",
                product_price: 54000,
                product_details: "Stunning visuals on a 15.2-cm (5.99) FHD+ display, a powerful 1.8 GHz Snapdragon 636 processor, and expandable memory of up to 128 GB - the Redmi Note 5 Pro has much to offer. The (12 MP + 5 MP) dual rear camera setup and a 20 MP front camera, coupled with features such as Beautify 4.0, let you take truly beautiful pictures and selfies.",
                product_quality: 5
            },
            {
                product_id: "pd102",
                product_img: "https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2014/tvv/cat/tv/tv_size4a.jpg;maxHeight=333;maxWidth=333",
                product_name: "Television",
                product_price: 22000,
                product_details: "Bring home the Mi LED Smart TV 4A 108 cm (43) and delight your senses with crisp images and rich audio quality. It features Full HD LED Display that gives you crystal clear visuals while the Stereo Speakers make for immersive sound quality, leaving no room for a dull moment.",
                product_quality: 6
            },
            {
                product_id: "pd103",
                product_img: "https://rukminim1.flixcart.com/image/312/312/j6gs6fk0/headphone/z/d/h/apple-beats-solo3-original-imaewxpd7eqgqqvq.jpeg?q=70",
                product_name: "Headphone",
                product_price: 1300,
                product_details: "Enjoy enhanced and immersive listening experience by investing in these Sony headphones. The pair is designed for you to enjoy the powerful bass and clear sound. They are durable and can handle rough use as well.",
                product_quality: 13
            }
        ];
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        this.totalPrice();
    };
    ProductlistComponent.prototype.getpopup = function (det) {
        this.selectedProduct.next(det);
    };
    ProductlistComponent.prototype.delpopup = function (pid) {
        console.log(pid);
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id === pid) {
                this.products.splice(i, 1);
            }
        }
        this.totalPrice();
        console.log(this.products);
    };
    ProductlistComponent.prototype.totalPrice = function () {
        this.total = 0;
        for (var i = 0; i < this.products.length; i++) {
            this.total += (this.products[i].product_price * this.products[i].product_quality);
        }
    };
    ProductlistComponent.prototype.add = function (pid) {
        console.log(pid);
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id === pid) {
                this.products[i].product_quality += 1;
            }
        }
        this.totalPrice();
        console.log(this.products);
    };
    ProductlistComponent.prototype.del = function (pid) {
        console.log(pid);
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id === pid) {
                this.products[i].product_quality -= 1;
            }
        }
        this.totalPrice();
        console.log(this.products);
    };
    ProductlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! ./productlist.component.html */ "./src/app/productlist/productlist.component.html"),
            styles: [__webpack_require__(/*! ./productlist.component.css */ "./src/app/productlist/productlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductlistComponent);
    return ProductlistComponent;
}());



/***/ }),

/***/ "./src/app/recycler/recycler.component.css":
/*!*************************************************!*\
  !*** ./src/app/recycler/recycler.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navcl li a{\n    color: white;\n}"

/***/ }),

/***/ "./src/app/recycler/recycler.component.html":
/*!**************************************************!*\
  !*** ./src/app/recycler/recycler.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-info col-lg-12\">\n  <div class=\"text-center h1\" style=\"color:white;\">{{companyname}}\n  </div>\n</div>\n<div class=\"container-fluid mh-100\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 col-lg-2 bg-dark\">\n      <nav class=\"navbar navbar-default navbar-fixed-side\" style=\"min-height:100vh\">\n          <ul class=\"nav navbar-nav\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\" routerLink=\"/recycler\">Pickups</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\" routerLink=\"/recyclereqadmin\">Request Admin</a>\n              </li>\n              <li class=\"nav-item\">\n                    <a class=\"nav-link active\" routerLink=\"\" (click)=\"logout()\">Logout</a>\n              </li>\n            </ul>\n      </nav>\n    </div>\n    <div class=\"col-sm-10 col-lg-10\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead class=\"thead-dark\">\n                  <tr>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Address</th>\n                    <th scope=\"col\">Phone</th>\n                    <th scope=\"col\">Email</th>\n                    <th scope=\"col\">Slot</th>\n                    <th scope=\"col\">Scrap Type</th>\n                    <th scope=\"col\">Estimated Wt</th>\n                    <th scope=\"col\">Estimated Cost</th>\n                    <th scope=\"col\">Updated Details</th>\n                    <th scope=\"col\">Final Cost</th>\n                    <th scope=\"col\">Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let i of assignedPickups let idx=index\">\n                    <td>{{i[\"name\"]}}</td>\n                    <td>{{i[\"address\"]}}</td>\n                    <td>{{i[\"phone\"]}}</td>\n                    <td>{{i[\"email\"]}}</td>\n                    <td>{{i[\"slot\"]}}</td>\n                    <td>{{i[\"scraptype\"]}}</td>\n                    <td>{{i[\"totalwt\"]}} Kgs</td>\n                    <td>Rs {{i[\"totalamt\"]}}</td>\n                    <td>\n                          <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content,idx)\">Update</button>\n                    </td>\n                    <td>Rs {{finalcost[idx]}}</td>\n                    <td>\n                      <button class=\"btn btn-lg btn-outline-info\" (click)=\"submit(idx)\">Confirm</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Details</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click');updateCost();\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n        <div class=\"form-row align-items-center\">\n            <div class=\"col-sm-6 my-1\">\n                <label class=\"control-label\" for=\"scrape\">Enter the amount{{currscrape}}</label>\n                <input type=\"number\" class=\"form-control form-control-sm\" id=\"scrape\" name=\"scrape\" [(ngModel)]=\"currwt\" (change)=\"showCart()\">\n              </div>\n        </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click');updateCost();\">Save</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/recycler/recycler.component.ts":
/*!************************************************!*\
  !*** ./src/app/recycler/recycler.component.ts ***!
  \************************************************/
/*! exports provided: RecyclerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecyclerComponent", function() { return RecyclerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RecyclerComponent = /** @class */ (function () {
    function RecyclerComponent(formBuilder, router, db, modalService, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.db = db;
        this.modalService = modalService;
        this.auth = auth;
        this.assignedPickups = [];
        this.finalcost = [];
        this.finalwt = [];
    }
    RecyclerComponent.prototype.open = function (content, id) {
        this.currscrape = this.associateDetails["scrapetype"];
        this.currwt = this.finalwt[id];
        this.item = this.assignedPickups[id]["scrapetype"];
        this.lastIndex = id;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
        });
    };
    RecyclerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.associateDetails = JSON.parse(localStorage.getItem("user"));
        this.companyname = this.associateDetails["companyname"];
        this.db.collection("pickup_sd", function (ref) { return ref.where("assigned", "==", true).where("assignedTo", "==", _this.associateDetails["id"]).where("collected", "==", false); })
            .snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                var k = res[i].payload.doc.data();
                k["id"] = res[i].payload.doc.id;
                _this.assignedPickups.push(k);
                _this.finalcost.push(_this.assignedPickups[i]["totalamt"]);
                _this.finalwt.push(_this.assignedPickups[i]["totalwt"]);
            }
        });
        this.db.collection("pickup_aggre", function (ref) { return ref.where("assigned", "==", true).where("assignedTo", "==", _this.associateDetails["id"]).where("collected", "==", false); })
            .snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                var k = res[i].payload.doc.data();
                k["id"] = res[i].payload.doc.id;
                _this.assignedPickups.push(k);
                _this.finalcost.push(_this.assignedPickups[i]["totalamt"]);
                _this.finalwt.push(_this.assignedPickups[i]["totalwt"]);
            }
        });
        console.log(this.assignedPickups);
    };
    RecyclerComponent.prototype.showCart = function () {
        this.finalwt[this.lastIndex] = this.currwt;
        this.finalcost[this.lastIndex] = this.finalwt[this.lastIndex] * 10;
    };
    RecyclerComponent.prototype.updateCost = function () {
    };
    RecyclerComponent.prototype.submit = function (k) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assignedPickups[k]["collected"] = true;
                        this.assignedPickups[k]["totalamt"] = this.finalcost[k];
                        this.assignedPickups[k]["totalwt"] = this.finalwt[k];
                        return [4 /*yield*/, this.db.doc("pickup_sd/" + this.assignedPickups[k].id).update(this.assignedPickups[k]).then(function () {
                                console.log("successful");
                                window.location.reload();
                            }).catch(function () { })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.db.doc("pickup_aggre/" + this.assignedPickups[k].id).update(this.assignedPickups[k]).then(function () {
                                console.log("successful");
                                window.location.reload();
                            }).catch(function () { })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecyclerComponent.prototype.logout = function () {
        this.auth.logout();
    };
    RecyclerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recycler',
            template: __webpack_require__(/*! ./recycler.component.html */ "./src/app/recycler/recycler.component.html"),
            styles: [__webpack_require__(/*! ./recycler.component.css */ "./src/app/recycler/recycler.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RecyclerComponent);
    return RecyclerComponent;
}());



/***/ }),

/***/ "./src/app/recyclereqadmin/recyclereqadmin.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recyclereqadmin/recyclereqadmin.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo & navigation*/\n\n.bg1{\n    background: #3d882f;\n}\n\n.drag ul li a{\ncolor:white;\nfont-size: 18px;\npadding: 0 15px;\n}\n\n.poi{\ncursor: pointer;\n}"

/***/ }),

/***/ "./src/app/recyclereqadmin/recyclereqadmin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recyclereqadmin/recyclereqadmin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n            <div class=\"\">\n                <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo1.png\"></a>\n              \n             </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        </div>\n\n    </div>\n\n    \n     <!-----------Navigation Starts Here-->\n   \n   <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n       <a class=\"navbar-brand\" href=\"#\"></a>\n       <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n         <span class=\"navbar-toggler-icon\"></span>\n       </button>\n     \n       <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n         <h4>{{companyname}}</h4>\n         <ul class=\"navbar-nav ml-auto \">\n\n              <li class=\"nav-item poi\">\n                  <a class=\"nav-link\" routerLink=\"/recycler\" ><p id=\"size\">Assigned pickups</p></a>\n                </li>\n              <li class=\"nav-item poi\">\n                <a class=\"nav-link\" routerLink=\"/recyclereqadmin\"><p style=\"font-size:18px;\">Request Admin</p></a>\n              </li>\n\n              <li class=\"nav-item poi\">\n                <a class=\"nav-link\" (click)=\"logout()\"><p style=\"font-size:18px;\">Logout</p></a>\n              </li>\n         </ul>\n       \n       </div>\n     </nav>\n<br><br>\n\n\n\n\n     <div class=\"d-flex justify-content-center align-items-center container card bg-dark text-white\" >\n        <form [formGroup]=\"pickupForm\" class=\"form-horizontal col-md-8\">\n              <div *ngFor=\"let p of prods\" class=\"form-group row pt-2\">\n                  <label class=\"control-label col-sm-2\" for=\"{{p}}\">{{p}}</label>\n                  <div class=\"col-sm-10\">\n                    <input class=\"form-control\" formControlName=\"{{p}}\" type=\"number\" [(ngModel)]=\"cart[p]\">\n                  </div>\n                  \n              </div>\n\n\n\n\n\n\n\n\n\n            \n          \n                <div class=\"text-center\">  \n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"!pickupForm.valid\">\n                  Proceed\n                  </button>\n                </div>\n          </form>\n     </div>"

/***/ }),

/***/ "./src/app/recyclereqadmin/recyclereqadmin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recyclereqadmin/recyclereqadmin.component.ts ***!
  \**************************************************************/
/*! exports provided: RecyclereqadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecyclereqadminComponent", function() { return RecyclereqadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecyclereqadminComponent = /** @class */ (function () {
    function RecyclereqadminComponent(formBuilder, authService, db, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.db = db;
        this.router = router;
        this.location = [];
        this.cart = {};
        this.prods = [];
    }
    RecyclereqadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
        this.companyname = this.user["companyname"];
        this.pickupForm = this.formBuilder.group({});
        console.log("mew", JSON.parse(localStorage.getItem("user")));
        this.states = ["Andhra Pradesh", "Arunachal Pradesh ", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "National Capital Territory of Delhi", "Puducherry"];
        this.db.collection("locations").snapshotChanges().subscribe(function (res) {
            for (var i in res) {
                _this.location.push(res[i].payload.doc.id);
            }
        });
        this.prods.push(this.user["scrapetype"]);
        this.pickupForm.addControl(this.user["scrapetype"], new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        this.cart[this.user["scrapetype"]] = 0;
    };
    RecyclereqadminComponent.prototype.onSubmit = function () {
        for (var m in this.cart) {
            if (this.cart[m] > 0) {
                var u = JSON.parse(localStorage.getItem("user"));
                var req = {};
                req["scraptype"] = u["scrapetype"];
                req["totalwt"] = this.cart[m];
                req["name"] = u["username"];
                req["email"] = u["email"];
                req["phone"] = u["phone"];
                req["address"] = u["address"];
                req["userid"] = u["id"];
                req["location"] = u["location"];
                if (u["pincode"])
                    req["pincode"] = u["pincode"];
                this.db.collection("pickup_rec").add(req).then(function (res) {
                    console.log("uploaded", req);
                    window.location.reload();
                });
            }
        }
    };
    RecyclereqadminComponent.prototype.logout = function () {
        this.authService.logout();
    };
    RecyclereqadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recyclereqadmin',
            template: __webpack_require__(/*! ./recyclereqadmin.component.html */ "./src/app/recyclereqadmin/recyclereqadmin.component.html"),
            styles: [__webpack_require__(/*! ./recyclereqadmin.component.css */ "./src/app/recyclereqadmin/recyclereqadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RecyclereqadminComponent);
    return RecyclereqadminComponent;
}());



/***/ }),

/***/ "./src/app/scraperequestadmin/scraperequestadmin.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/scraperequestadmin/scraperequestadmin.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo & navigation*/\n\n.bg1{\n    background: #3c8a2e;\n}\n\n.poi{\ncursor: pointer;\n}\n\n/* top header css */\n\n.header-main{\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo{\n    width: 100px\n}\n\n.header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border-left: 2px solid #fff !important;\n}\n\n.rotate {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 0 30px;\n}\n\n.active a {\n    text-decoration: underline;\n}\n\n.poi span{\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 3px 2px;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    display: inline-block;\n  }\n\n/* top header css ends here */\n\n.box-container-top{\n    margin: 15px 0;\n}\n\n.box-container-top p.head{\n    font-size: 0.9rem;\n    text-align: center;\n}\n\n.box-container-top .box{\n    border: 2px solid #fff;\n    color: #000;\n    padding: 5px;\n    text-align: center;\n    margin: 15px auto;\n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n}\n\n.left{\n    background: #fdd6b9;\n}\n\n.right{\n    \n    background: #cfbbec;\n}\n\n.box-container-top .box p{\n    font-size: 1.3rem;\n    font-weight: 700;\n}\n\n.icon{\n    margin-bottom: 0.3rem;\n}\n\n.body-container{\n    background-color: #dedcdd;\n}\n\n.disabled{\n    opacity: 0.5;\n}\n\n.box-container{\n    background: #fff;\n    border: 1px solid #3c8a2e;   \n    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);\n    margin: 15px auto;\n}\n\n.borderless td {\n    border: none;\n}\n\ntable{\n    font-weight: 700;\n}\n\ntd.v-c-center{\n    vertical-align: middle;\n    text-align: center;\n}\n\nh3{\n    margin: 15px auto;\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.btm-btn{\n    margin: 15px;\n}"

/***/ }),

/***/ "./src/app/scraperequestadmin/scraperequestadmin.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/scraperequestadmin/scraperequestadmin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-main\">\n  <div class=\"container\">\n    <div class=\"brand-logo\">\n      <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo.png\"></a>\n    </div>\n  </div>\n</div>\n\n<!-----------Navigation Starts Here-->\n<nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto \">\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/scrape\">Notifications</a>\n        </li>\n        <li class=\"nav-item poi active\">\n          <a class=\"nav-link\" routerLink=\"/scrapereqadmin\">Assigned Pickups</a>\n        </li>\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" routerLink=\"/allotedaggre\">Request to Admin</a>\n        </li>\n\n        <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/allotedaggre\">Request to Aggregator</a>\n          </li>\n\n\n        <li class=\"nav-item poi\">\n          <a class=\"nav-link\" (click)=\"logout()\"> Logout</a>\n        </li>\n\n      </ul>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"body-container\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-5 box-container-top\">\n            <p class=\"head\">Overloaded???Put a request for collecting</p>\n            <div class=\"box left\">\n              <p class=\"icon\"><i class=\"fa fa-plus\"></i></p>\n              <p>Add new request</p>\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n\n          </div>\n\n          <div class=\"col-md-5 box-container-top disabled\">\n            <p class=\"head\">Who is picking up your scrap?</p>\n            <div class=\"box right\">\n              <p class=\"icon\">&nbsp;</p>\n              <p>Alloted</p>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8 box-container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n            <h3>Choose your category</h3>\n\n            <table class=\"table borderless\">\n\n              <tbody>\n                <tr>\n                  <td rowspan=\"6\" class=\"v-c-center\">Paper</td>\n\n                </tr>\n                <tr>\n                  <td>Newspapers & Magazines</td>\n                  <td>200 kg</td>\n                </tr>\n                <tr>\n                  <td>Carton boxes</td>\n                  <td>500 kg</td>\n                </tr>\n                <tr>\n                  <td>Notebooks & Text books</td>\n                  <td>--</td>\n                </tr>\n                <tr>\n                  <td>Tera packs</td>\n                  <td>--</td>\n                </tr>\n                <tr>\n                  <td>Other bits and pices</td>\n                  <td>--</td>\n                </tr>\n              </tbody>\n            </table>\n\n            <div class=\"row justify-content-center\">\n              <div class=\"text-center col-md-6  btm-btn\">\n                <button type=\"submit\" class=\"btn btn-success btn-block\" (click)=\"onSubmit()\" [disabled]=\"!pickupForm.valid\">\n                  Submit\n                </button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--row ends here-->\n\n\n  </div>\n\n\n<!--\n  <div class=\"d-flex justify-content-center align-items-center container card bg-dark text-white\">\n    <form [formGroup]=\"pickupForm\" class=\"form-horizontal col-md-8 pt-2\">\n      <div *ngFor=\"let p of prods\" class=\"form-group row pt-2\">\n        <label class=\"control-label col-sm-2\" for=\"{{p}}\">{{p}}</label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\" formControlName=\"{{p}}\" type=\"number\" [(ngModel)]=\"cart[p]\">\n        </div>\n\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\" [disabled]=\"!pickupForm.valid\">\n          Proceed\n        </button>\n      </div>\n    </form>\n  </div>\n\n</div>-->"

/***/ }),

/***/ "./src/app/scraperequestadmin/scraperequestadmin.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/scraperequestadmin/scraperequestadmin.component.ts ***!
  \********************************************************************/
/*! exports provided: ScraperequestadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScraperequestadminComponent", function() { return ScraperequestadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScraperequestadminComponent = /** @class */ (function () {
    function ScraperequestadminComponent(formBuilder, authService, db, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.db = db;
        this.router = router;
        this.location = [];
        this.cart = {};
        this.prods = [];
    }
    ScraperequestadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pickupForm = this.formBuilder.group({});
        this.companyname = JSON.parse(localStorage.getItem("user"))["companyname"];
        console.log("mew", JSON.parse(localStorage.getItem("user")));
        this.db.collection("products").snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                _this.prods.push(res[i].payload.doc.id);
                _this.pickupForm.addControl(res[i].payload.doc.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
                _this.cart[res[i].payload.doc.id] = 0;
            }
        });
    };
    ScraperequestadminComponent.prototype.onSubmit = function () {
        for (var m in this.cart) {
            if (this.cart[m] > 0) {
                var u = JSON.parse(localStorage.getItem("user"));
                var req = {};
                req["scraptype"] = u["scrapetype"];
                req["totalwt"] = this.cart[m];
                req["name"] = u["username"];
                req["email"] = u["email"];
                req["phone"] = u["phone"];
                req["address"] = u["address"];
                req["userid"] = u["id"];
                req["location"] = u["location"];
                req["assigned"] = false;
                req["assignedTo"] = "";
                req["collected"] = false;
                if (u["pincode"])
                    req["pincode"] = u["pincode"];
                this.db.collection("pickup_sd").add(req).then(function (res) {
                    console.log("uploaded", req);
                    window.location.reload();
                });
            }
        }
    };
    ScraperequestadminComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ScraperequestadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scraperequestadmin',
            template: __webpack_require__(/*! ./scraperequestadmin.component.html */ "./src/app/scraperequestadmin/scraperequestadmin.component.html"),
            styles: [__webpack_require__(/*! ./scraperequestadmin.component.css */ "./src/app/scraperequestadmin/scraperequestadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ScraperequestadminComponent);
    return ScraperequestadminComponent;
}());



/***/ }),

/***/ "./src/app/sd/sd.component.css":
/*!*************************************!*\
  !*** ./src/app/sd/sd.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n.main-height {\n    height: 100%;\n}\n\n.bg {\n    background: url('signup.jpg') no-repeat bottom right;\n    width: 100%;\n    height: calc(100% - 118px);\n    height: -webkit-calc(100% - 118px);\n    background-size: cover;\n}\n\n.bg1 {\n    background: #3d882f;\n}\n\n.drag ul li:hover {\n    background: #32CD32;\n}\n\n.poi {\n    cursor: pointer;\n}\n\n#input {\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #000000;\n}\n\n.gg {\n    padding: 10px 17px;\n}\n\n.tag li {\n    display: inline-block;\n}\n\n.navcl li a {\n    color: white;\n}\n\n#size {\n    font-size: 18px;\n}\n\n#secc {\n    display: inline-block;\n    width: 60%;\n}\n\n.cat {\n    color: orange;\n}\n\n/* medial queries */\n\n/* top header css */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n/* top header css ends here */\n\n.table .thead-dark th {\n    font-weight: 400;\n}\n\n.table td {\n    border-top: 2px solid #000;\n    padding-bottom: 0px;\n}\n\n.table td p {\n    margin: 0;\n}\n\n.table .fa.fa-check {\n    color: #3d882f\n}\n\n.table .fa.fa-times {\n    color: red;\n}\n\n.table .fa {\n    margin-right: 10px\n}\n\n.toggle-btn {\n    border-radius: 0;\n    background: transparent;\n}\n\n.inline-block {\n    display: inline-block;\n}\n\n.row-right {\n    margin: 15px 0 0;\n}\n\n.inner-table {\n    background: rgba(243, 243, 243, 0.6);\n    padding: 0 30px 15px;\n    box-shadow: 0 2px 15px #d4d4d4;\n}\n\n.borderless td,\n.borderless th {\n    border: none;\n}\n\n.table .update-btn {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.table .update-btn .btn {\n    min-width: 140px;\n    border-radius: 0;\n}\n\n.circle-plus {\n    background: #3d882f;\n    padding: 5px;\n    border-radius: 20px;\n    width: 30px;\n    height: 30px;\n    font-size: 14px;\n    display: block;\n    text-align: center;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/sd/sd.component.html":
/*!**************************************!*\
  !*** ./src/app/sd/sd.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"header-main\">\n    <div class=\"container\">\n      <div class=\"brand-logo\">\n        <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo.png\"></a>\n      </div>\n    </div>\n  </div>\n\n\n  <!-----------Navigation Starts Here-->\n\n  <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto \">\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/design\">Assigned Pickups</a>\n          </li>\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/design\">Alloted Drops</a>\n          </li>\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/associate\">Request Admin</a>\n          </li>\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\" routerLink=\"/design\"> Request Aggregator</a>\n          </li>\n\n          <li class=\"nav-item poi\">\n            <a class=\"nav-link\">My Sheets</a>\n          </li>\n          <li class=\"nav-item poi border-left\">\n            <a class=\"nav-link rotate\"><i class=\"fa fa-phone\"></i></a>\n          </li>\n        </ul>\n\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid\">\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12 \">\n        <div class=\"float-right row-right\">\n          <div class=\"dropdown inline-block\">\n            <button class=\"btn dropdown-toggle toggle-btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Sort by\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" href=\"#\">Pincode</a>\n              <a class=\"dropdown-item\" href=\"#\">Locality</a>\n\n            </div>\n          </div>\n\n          <div class=\"inline-block mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-sm\"\n              placeholder=\"Enter Pincode\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Slot</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Address</th>\n          <th scope=\"col\">Phone</th>\n          <th scope=\"col\">Alt Phone No</th>\n          <th scope=\"col\">Payment Mode</th>\n          <th scope=\"col\">Quantity/Number</th>\n          <!-- \n           \n           <th scope=\"col\">Email</th>\n           <th scope=\"col\">Slot</th>\n          <th scope=\"col\">Estimated Wt</th>\n          <th scope=\"col\">Estimated Cost</th>\n          <th scope=\"col\">Updated Details</th>\n        -->\n          <th scope=\"col\"  class=\"text-center\">Price</th>\n          <th scope=\"col\" class=\"text-center\">Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let i of assignedPickups let idx=index\">\n          <td>{{i[\"slot\"]}}</td>\n          <td>{{i[\"name\"]}}</td>\n          <td>{{i[\"address\"]}}</td>\n          <td>{{i[\"phone\"]}}</td>\n          <td>{{i[\"alterphone\"]}}</td>\n          <td>{{i[\"payment\"]}}</td>\n          <td></td>\n          <!--\n          <td>{{i[\"email\"]}}</td>\n          <td>{{i[\"slot\"]}}</td>\n          <td>{{i[\"totalwt\"]}} Kgs</td>\n          <td>Rs {{i[\"totalamt\"]}}</td>\n          \n          <td>\n            <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content,idx)\">Update</button>\n          </td>\n\n          -->\n          <td>Rs {{finalcost[idx]}}</td>\n          <td>\n            <button class=\"btn btn-lg btn-outline-info\" (click)=\"submit(idx)\">Confirm</button>\n          </td>\n        </tr>\n\n        <tr>\n          <td>10-10-2019</td>\n          <td>Pranavi</td>\n          <td>RTC Colony, 500014</td>\n          <td>9866723654</td>\n          <td>9866723654</td>\n          <td class=\"text-center\">UPI</td>\n          <td class=\"text-center\">35 <p><a href=\"#\">Edit</a></p>\n          </td>\n          <td class=\"text-center\">Rs 40/-</td>\n          <td class=\"text-center\">Pending\n            <p class=\"icons\">\n              <i class=\"fa fa-check \" aria-hidden=\"true\"></i>\n\n              <i class=\"fa fa-times\"></i>\n            </p>\n          </td>\n        </tr>\n\n        <tr>\n          <td>10-10-2019</td>\n          <td>Pranavi</td>\n          <td>RTC Colony, 500014</td>\n          <td>9866723654</td>\n          <td>9866723654</td>\n          <td class=\"text-center\">UPI</td>\n          <td class=\"text-center\">35 <p><a href=\"#\">Edit</a></p>\n          </td>\n          <td class=\"text-center\">Rs 40/-</td>\n          <td class=\"text-center\">Pending\n            <p class=\"icons\">\n              <i class=\"fa fa-check \" aria-hidden=\"true\"></i>\n\n              <i class=\"fa fa-times\"></i>\n            </p>\n          </td>\n\n        </tr>\n\n        <tr>\n          <td>10-10-2019</td>\n          <td>Pranavi</td>\n          <td>RTC Colony, 500014</td>\n          <td>9866723654</td>\n          <td>9866723654</td>\n          <td class=\"text-center\">UPI</td>\n          <td class=\"text-center\">35 <p><a href=\"#\">Edit</a></p>\n          </td>\n          <td class=\"text-center\">Rs 40/-</td>\n          <td class=\"text-center\">Pending\n            <p class=\"icons\">\n              <i class=\"fa fa-check \" aria-hidden=\"true\"></i>\n\n              <i class=\"fa fa-times\"></i>\n            </p>\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n    <div class=\"inner-table\">\n      <table class=\"table borderless\">\n        <thead>\n          <tr>\n            <th> Items</th>\n            <th class=\"text-center\"> Estimated Kg/Number</th>\n            <th class=\"text-center\"> Actual Kg/Number</th>\n            <th class=\"text-center\"> Price</th>\n            <th> </th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td>Newspaper & Magazines</td>\n            <td class=\"text-center\">10</td>\n            <td class=\"text-center\">05</td>\n            <td class=\"text-center\">50</td>\n            <td rowspan=\"4\" class=\"update-btn\"><button class=\"btn btn-primary\">Update</button></td>\n          </tr>\n\n          <tr>\n            <td>Newspaper & Magazines</td>\n            <td class=\"text-center\">10</td>\n            <td class=\"text-center\">05</td>\n            <td class=\"text-center\">50</td>\n          </tr>\n\n          <tr>\n            <td>Newspaper & Magazines</td>\n            <td class=\"text-center\">10</td>\n            <td class=\"text-center\">05</td>\n            <td class=\"text-center\">50</td>\n          </tr>\n\n          <tr>\n            <td>Newspaper & Magazines</td>\n            <td class=\"text-center\">10</td>\n            <td class=\"text-center\">05</td>\n            <td class=\"text-center\">50</td>\n          </tr>\n        </tbody>\n\n      </table>\n\n      <div>\n        <p><span class=\"circle-plus\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></p>\n      </div>\n    </div>\n\n  </div>\n\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Details</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click');updateCost();\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-row align-items-center\">\n          <div *ngFor=\"let g of products let idx=index\" class=\"col-sm-6 my-1\">\n            <label class=\"control-label\" for=\"{{g}}\">{{g}}</label>\n            <input type=\"number\" class=\"form-control form-control-sm\" id=\"{{g}}\" name=\"{{g}}\" placeholder=\"{{g}}\"\n              [(ngModel)]=\"universalcart[g]\" (change)=\"showCart()\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click');updateCost();\">Save</button>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/sd/sd.component.ts":
/*!************************************!*\
  !*** ./src/app/sd/sd.component.ts ***!
  \************************************/
/*! exports provided: SdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdComponent", function() { return SdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SdComponent = /** @class */ (function () {
    function SdComponent(formBuilder, router, db, modalService, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.db = db;
        this.modalService = modalService;
        this.auth = auth;
        this.assignedPickups = [];
        this.products = [];
        this.finalcost = [];
        this.productDetails = {};
        this.universalcart = {};
    }
    SdComponent.prototype.open = function (content, id) {
        this.lastIndex = id;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
        });
        var cart = JSON.parse(this.assignedPickups[id].cart);
        for (var m in this.universalcart) {
            if (cart[m])
                this.universalcart[m] = cart[m][0];
            else
                this.universalcart[m] = 0;
        }
        console.log("updated univ cart is", this.universalcart);
    };
    SdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyname = JSON.parse(localStorage.getItem("user"))["companyname"];
        this.associateDetails = JSON.parse(localStorage.getItem("user"));
        this.db.collection("pickup_user", function (ref) { return ref.where("assigned", "==", true).where("assignedTo", "==", _this.associateDetails["id"]).where("collected", "==", false); }).snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                var k = res[i].payload.doc.data();
                k["id"] = res[i].payload.doc.id;
                _this.assignedPickups.push(k);
                _this.finalcost[i] = _this.assignedPickups[i]["totalamt"];
            }
        });
        this.db.collection("products").snapshotChanges().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                var cat = res[i].payload.doc.data();
                for (var m in cat) {
                    if (m.search("thumb") == -1) {
                        _this.productDetails[m] = cat[m];
                        _this.universalcart[m] = 0;
                        _this.products.push(m);
                    }
                }
            }
        });
        console.log(this.products);
        console.log(this.assignedPickups);
    };
    SdComponent.prototype.showCart = function () {
        console.log(this.universalcart);
    };
    SdComponent.prototype.updateCost = function () {
        var sum = 0;
        for (var m in this.universalcart) {
            sum = sum + this.universalcart[m] * this.productDetails[m];
        }
        this.finalcost[this.lastIndex] = sum;
        this.assignedPickups[this.lastIndex]["cart"] = this.universalcart;
    };
    SdComponent.prototype.submit = function (k) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.assignedPickups[k]["collected"] = true;
                        this.assignedPickups[k]["cart"] = JSON.stringify(this.assignedPickups[k]["cart"]);
                        this.assignedPickups[k]["totalamt"] = this.finalcost[k];
                        return [4 /*yield*/, this.db.doc("pickup_user/" + this.assignedPickups[k].id).update(this.assignedPickups[k]).then(function () {
                                console.log("successful");
                            })];
                    case 1:
                        _a.sent();
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        });
    };
    SdComponent.prototype.logout = function () {
        this.auth.logout();
    };
    SdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sd',
            template: __webpack_require__(/*! ./sd.component.html */ "./src/app/sd/sd.component.html"),
            styles: [__webpack_require__(/*! ./sd.component.css */ "./src/app/sd/sd.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SdComponent);
    return SdComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signUp = function (email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) {
            console.log("signed out successfully");
            localStorage.removeItem("user");
            location.reload();
            _this.router.navigate(["/design"]);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n.main-height {\n    height: 100%;\n}\n\n.bg {\n    background: url('signup.jpg') no-repeat bottom right;\n    width: 100%;\n    height: 100%;\n    /* height: calc(100% - 118px);\n     height: -webkit-calc(100% - 118px); */\n    background-size: cover;\n}\n\n.bg1 {\n    background: #3d882f;\n}\n\n.form2 {\n    border: 1px solid;\n    padding: 50px 60px;\n    margin-top: 30px;\n    background: #fff;\n}\n\n.poi {\n    cursor: pointer;\n}\n\n/* top header css */\n\n.header-main {\n    background-color: #fefefe;\n}\n\n.header-main .brand-logo {\n    width: 100px\n}\n\n.header-main .brand-logo img {\n    width: 100%;\n    height: auto;\n}\n\n.border-left {\n    border: 0px !important;\n    position: relative;\n}\n\n.border-left a::after {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 15px;\n    width: 100%;\n    bottom: 0;\n    border-left: 1px solid #fff;\n    top: 0;\n    left: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 1px;\n}\n\n.btm-txt {\n    text-align: center;\n    padding: 15px;\n    font-size: 1.2rem;\n    margin: 0.6em;\n    color: rgba(0, 0, 0, .6);\n}\n\n.rotate i {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 13px 30px;\n}\n\n.signUp {\n    color: #3c8a2e;\n    text-decoration: none;\n    font-weight: 500;\n}\n\n.drag ul li:hover {\n    background-color: #4ca115;\n}\n\n.active {\n    background-color: #4ca115;\n}\n\n/* top header css ends here */\n\n/* custom css starts here */\n\nh1 {\n    color: #fff;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: 0;\n    font-size: 1.6rem;\n}\n\n.btn.btn-success {\n    text-transform: capitalize;\n}\n\n.add {\n    padding: 36px 0 0 0;\n}\n\n.form-container {\n    border: 1px solid;\n    padding: 50px 60px;\n    margin-top: 15px;\n    background: rgba(255, 255, 255, 0.8);\n}\n\ninput::-webkit-input-placeholder{\n    color: gray;\n}\n\ninput::-ms-input-placeholder{\n    color: gray;\n}\n\ninput::placeholder{\n    color: gray;\n}\n\nselect {\n    color: gray;\n}\n\nbutton:focus {outline:0;}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-height\">\n  <!---Form Starts Here-->\n  <div class=\"bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n        <div class=\"col-md-6 col-sm-6 col-xs-12 add\">\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h1>Register As User</h1>\n            </div>\n          </div>\n\n          <!---Login Form starts here-->\n\n          <div class=\"\">\n\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-group form2 form-container\">\n\n              <div class=\"form-group \">\n                <!-- <label for=\"exampleInputEmail1\">Select Usertype</label> -->\n                <select formControlName=\"usertype\" class=\"form-control\" name=\"usertype\" id=\"utype\">\n                  <option selected value=\"0\"> Type of User </option>\n                  <option value=\"House_hold \"> House hold </option>\n                  <option value=\"Business\"> Business </option>\n                  <option value=\"Education\"> Education </option>\n                  <option value=\" Corporate_Offices\"> Corporate Offices </option>\n                  <option value=\"Others\"> Others</option>\n                </select>\n\n              </div>\n              <div *ngIf=\"signupForm.get('usertype').hasError('required')  && signupForm.get('usertype').touched \"\n                class=\"alert alert-danger\">\n                User Type is Required\n              </div>\n\n              <div class=\"form-group \">\n\n                <input type=\"text\" formControlName=\"username\" name=\"username\" class=\"form-control form-control-sm\"\n                  placeholder=\"Username\">\n              </div>\n              <div *ngIf=\"signupForm.get('username').hasError('required')  && signupForm.get('username').touched \"\n                class=\"alert alert-danger\">\n                Username is required\n              </div>\n\n           \n\n              <div class=\"form-group\">\n\n                <input type=\"text\" formControlName=\"email\" name=\"email\" class=\"form-control form-control-sm\"\n                  placeholder=\"Email I'd\">\n              </div>\n              <div *ngIf=\"signupForm.get('email').hasError('required')  && signupForm.get('email').touched \" class=\"alert alert-danger\">\n                Email is required\n              </div>\n\n              <div class=\"form-group \">\n\n                  <input type=\"password\" formControlName=\"password\" name=\"password\" class=\"form-control form-control-sm\"\n                    placeholder=\"Password\">\n                </div>\n                <div *ngIf=\"signupForm.get('password').hasError('required')  && signupForm.get('password').touched  \"\n                  class=\"alert alert-danger\">\n                  password is required\n                </div>\n                <div *ngIf=\"signupForm.get('password').hasError('password') \" class=\"alert alert-danger\">\n                  Password must be 8 characters required\n                </div>\n\n                <div class=\"form-group \">\n\n                    <input type=\"password\" formControlName=\"password\" name=\"password\" class=\"form-control form-control-sm\"\n                      placeholder=\"Confirm Password\">\n                  </div>\n                  \n\n              <div class=\"form-group\">\n\n                <input type=\"text\" formControlName=\"phone\" name=\"phone\" class=\"form-control form-control-sm\" id=\"exampleInputPassword1\"\n                  placeholder=\"Phone Number\">\n              </div>\n              <div *ngIf=\"signupForm.get('phone').hasError('required')  && signupForm.get('phone').touched \" class=\"alert alert-danger\">\n                Phone Number is required\n              </div>\n\n              <div class=\"\"></div>\n\n              <button class=\"SignUpButton\" type=\"submit\" class=\"btn btn-success btn-block\">Sign Up</button>\n              <div class=\"text-center btm-txt\">\n                <p>Already have an account ? <span><a routerLink=\"/design\" class=\"signUp\" >LogIn</a></span></p>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-12\"></div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, formBuilder, db, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.db = db;
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            usertype: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SignupComponent.prototype.showLogin = function () {
        this.router.navigate(['/design']);
    };
    SignupComponent.prototype.showSignup = function () {
        this.router.navigate(['/signup']);
    };
    SignupComponent.prototype.showAsso = function () {
        this.router.navigate(['/associate']);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.signUp(this.signupForm.value.email, this.signupForm.value.password)
            .then(function (res) {
            console.log("authentication created");
            var details = _this.signupForm.value;
            details["role"] = "user";
            var obj = _this.db.collection('user_website').add(details)
                .then(function (res) {
                console.log("data uploaded");
                _this.db.collection("user_website", function (ref) { return ref.where("email", "==", _this.signupForm.value.email); }).snapshotChanges().
                    subscribe(function (resu) {
                    console.log("resu", resu);
                    var k = resu[0].payload.doc.data();
                    var id = resu[0].payload.doc.id;
                    k["id"] = id;
                    localStorage.setItem("user", JSON.stringify(k));
                    _this.router.navigate(['/design']);
                });
            })
                .catch(function (err) { console.log(err); });
        })
            .catch(function (err) { console.log(err); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signupadmin/signupadmin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signupadmin/signupadmin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n.main-height {height: 100%;}\n.bg{\n    background: url('signup.jpg') no-repeat bottom right;\n    width: 100%;\n     /* height: calc(100% - 118px);\n     height: -webkit-calc(100% - 118px); */\n     height: 100%;\n     background-size: cover;\n\n    }\n.bg1{\n        background: #3d882f;\n    }\n.drag ul li a{\n        color:white;\n        font-size: 18px;\n        padding: 0 15px;\n}\n/* container of background*/\n.form-container{\n    border:1px solid;\n    padding: 50px 60px ;\n    margin-top: 30px;\n   background: white;\n   opacity: 0.6;\n\n}\n.add{\n    padding:36px 0 0 0;\n}\n.poi{\n    cursor:pointer;\n}\n/* top header css */\n.header-main{\n    background-color: #fefefe;\n}\n.header-main .brand-logo{\n    width: 100px\n}\n.header-main .brand-logo img{\n    width: 100%;\n    height: auto;\n}\n.border-left {\n    border-left: 2px solid #fff !important;\n}\n.rotate {\n    -webkit-transform: rotate(100deg);\n            transform: rotate(100deg);\n}\n.drag ul li a {\n    color: #fff;\n    font-size: 1rem;\n    padding: 0 30px;\n}\n.active a {\n    text-decoration: underline;\n}\n.poi span{\n    background-color: #ef1111;\n    margin: 0 5px;\n    padding: 3px 2px;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    display: inline-block;\n  }\n/* top header css ends here */"

/***/ }),

/***/ "./src/app/signupadmin/signupadmin.component.html":
/*!********************************************************!*\
  !*** ./src/app/signupadmin/signupadmin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div class=\"main-height\">\n    <div class=\"header-main\">\n        <div class=\"container\">\n          <div class=\"brand-logo\">\n            <a routerLink=\"/landing\"> <img src=\"../assets/images/Categories/logo.png\"></a>\n          </div>\n        </div>\n      </div>\n  <!-----Navigation Starts Here-->\n\n\n  <nav class=\"navbar navbar-expand-sm navbar-light bg1\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n  \n        <div class=\"collapse navbar-collapse  drag\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item poi\">\n                <a class=\"nav-link\" (click)=\"showLogin()\" >Login</a>\n            </li>\n            <li class=\"nav-item poi active\">\n                <a class=\"nav-link\" (click)=\"showSignup()\">SignUp</a>\n            </li>\n            <li class=\"nav-item poi\">\n                <a class=\"nav-link\" (click)=\"showAsso()\">Associates</a>\n            </li>\n            <li class=\"nav-item poi\">\n                <a class=\"nav-link\" routerLink=\"/signupadmin\">Admin Signup</a>\n            </li>\n  \n           \n  \n            <li class=\"nav-item poi\">\n              <a class=\"nav-link\">Help</a>\n            </li>\n            <li class=\"nav-item poi border-left\">\n              <a class=\"nav-link rotate\"><i class=\"fa fa-phone\"></i></a>\n            </li>\n          </ul>\n  \n        </div>\n      </div>\n    </nav>\n\n\n\n  \n  <!---Form Starts Here-->\n\n  <div class=\"bg\">\n    <div class=\"\">\n\n     \n    </div>\n      <div class=\"row\">\n          <div class=\"col-md-4 col-sm-4 col-xs-12 text-center text-white\">Admin Singup</div>\n          <div class=\"col-md-4 col-sm-4 col-xs-12 add\">\n          \n      \n     <!---Login Form starts here-->\n            <div class=\"\">\n                <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" class=\"form-container\">\n                    <div class=\"alert alert-danger\" *ngIf=\"error\">\n                        <strong>{{error}}</strong>\n                      </div>\n                   \n                    <div class=\"form-group\">\n                       \n                        <input type=\"text\" formControlName=\"email\"  class=\"form-control form-control-sm\" placeholder=\"enter email\"/>\n                    </div>\n\n                    <div *ngIf=\"signupForm.get('email').hasError('required') && signupForm.get('email').touched\" class=\"alert alert-danger\">\n                            email is required\n                    </div>\n                    <div *ngIf=\"signupForm.get('email').hasError('email') \" class=\"alert alert-danger\">\n                        email is invalid\n                   </div>\n                    <div class=\"form-group\">\n                        \n                        <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-sm\" placeholder=\"enter password\"   />\n                     </div >\n                  \n                  <div *ngIf=\"signupForm.get('password').hasError('required') && signupForm.get('password').touched\" class=\"alert alert-danger\">\n                           password required\n                  </div>\n                  <div *ngIf=\"signupForm.get('password').hasError('minlength')  \" class=\"alert alert-danger\">\n                      password must be 8 characters\n                 </div>\n                   \n                    \n                  \n               \n                  <div class=\"text-center\" >\n                      <button  class=\"btn btn-success btn-sm btn-block\" (click)=\"submit()\">\n                          Sign Up Admin\n                      </button>\n                     \n                  </div>\n                  \n                 \n                 </form>\n               \n                </div>\n\n              </div>\n              <div class=\"col-md-4 col-sm-4 col-xs-12\"></div>\n          </div>\n          \n    \n      </div>\n    </div>\n    \n   \n            \n          "

/***/ }),

/***/ "./src/app/signupadmin/signupadmin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signupadmin/signupadmin.component.ts ***!
  \******************************************************/
/*! exports provided: SignupadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupadminComponent", function() { return SignupadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupadminComponent = /** @class */ (function () {
    function SignupadminComponent(router, db, auth, formBuilder) {
        this.router = router;
        this.db = db;
        this.auth = auth;
        this.formBuilder = formBuilder;
    }
    SignupadminComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    SignupadminComponent.prototype.submit = function () {
        var _this = this;
        this.auth.signUp(this.signupForm.value.email, this.signupForm.value.password)
            .then(function (res) {
            console.log("authentication created");
            var details = _this.signupForm.value;
            details["role"] = "admin";
            var obj = _this.db.collection('user_website').add(details)
                .then(function (res) {
                console.log("data uploaded");
                _this.db.collection("user_website", function (ref) { return ref.where("email", "==", _this.signupForm.value.email); }).snapshotChanges().
                    subscribe(function (resu) {
                    console.log("resu", resu);
                    var k = resu[0].payload.doc.data();
                    var id = resu[0].payload.doc.id;
                    k["id"] = id;
                    localStorage.setItem("user", JSON.stringify(k));
                    _this.router.navigate(['/design']);
                });
            })
                .catch(function (err) { console.log(err); });
        })
            .catch(function (err) { console.log(err); });
    };
    SignupadminComponent.prototype.showLogin = function () {
        this.router.navigate(['/design']);
    };
    SignupadminComponent.prototype.showSignup = function () {
        this.router.navigate(['/signup']);
    };
    SignupadminComponent.prototype.showAsso = function () {
        this.router.navigate(['/associate']);
    };
    SignupadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signupadmin',
            template: __webpack_require__(/*! ./signupadmin.component.html */ "./src/app/signupadmin/signupadmin.component.html"),
            styles: [__webpack_require__(/*! ./signupadmin.component.css */ "./src/app/signupadmin/signupadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupadminComponent);
    return SignupadminComponent;
}());



/***/ }),

/***/ "./src/app/sub-collection/sub-collection.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sub-collection/sub-collection.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* logo && navigation*/\n\n    .bg1{\n        background: #3d882f;\n    }\n\n    .poi{\n  cursor: pointer;\n}\n\n    /* blocks  */\n\n    form {\n    width: 300px;\n    margin: 0 auto;\n    text-align: center;\n    padding-top: 50px;\n  }\n\n    .value-button {\n    display: inline-block;\n    border: 1px solid #ddd;\n    margin: 0px;\n    width: 40px;\n    height: 20px;\n    text-align: center;\n    vertical-align: middle;\n    padding: 11px 0;\n    background: #eee;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n    .value-button:hover {\n    cursor: pointer;\n  }\n\n    form #decrease {\n    margin-right: -4px;\n    border-radius: 8px 0 0 8px;\n  }\n\n    form #increase {\n    margin-left: -4px;\n    border-radius: 0 8px 8px 0;\n  }\n\n    form #input-wrap {\n    margin: 0px;\n    padding: 0px;\n  }\n\n    input#number {\n    text-align: center;\n    border: none;\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd; \n    margin: 0px;\n    width: 40px;\n    height: 40px;\n  }\n\n    input[type=number]::-webkit-inner-spin-button,\n  input[type=number]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n  }\n\n    .left li{\n      display: inline-block;\n  }\n\n    .new li{\n     display: inline-block;\n  }\n\n    /* top header css */\n\n    .header-main {\n  background-color: #fefefe;\n}\n\n    .header-main .brand-logo {\n  width: 100px\n}\n\n    .header-main .brand-logo img {\n  width: 100%;\n  height: auto;\n}\n\n    .border-left {\n  border: 0px !important;\n  position: relative;\n}\n\n    .border-left a::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  height: 15px;\n  width: 100%;\n  bottom: 0;\n  border-left: 1px solid #fff;\n  top: 0;\n  left: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 1px;\n}\n\n    .rotate i {\n  -webkit-transform: rotate(100deg);\n          transform: rotate(100deg);\n}\n\n    .drag ul li a {\n  color: #fff;\n  font-size: 1rem;\n  padding: 13px 30px;\n}\n\n    .drag ul li:hover {\n  background-color: #4ca115;\n}\n\n    .active {\n  background-color: #4ca115;\n}\n\n    .poi span {\n  background-color: #ef1111;\n  margin: 0 5px;\n  padding: 2px 2px;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  text-align: center;\n  display: inline-block;\n  font-size: 8px;\n  position: relative;\n  top: -13px;\n  left: -13px;\n}\n\n    /* top header css ends here */\n\n    /* custom css starts here */\n\n    .page-title{\n    margin:  20px auto;\n  }\n\n    /*\nh4::before{\n  content: '';\n  width: 40px;\n  height: 2px;\n  background-color: rgb(33,37,41);\n  position: relative;\n  display: inline-block;\n  top: -4px;\n  margin-right: 15px;\n}\nh4::after{\n  content: '';\n  width: 40px;\n  height: 2px;\n  background-color: rgb(33,37,41);\n  position: relative;\n  display: inline-block;\n  top: -4px;\n  margin-left: 15px;\n}\n*/\n\n    .subcats-title{\n    font-size: 1.2rem;\n    margin: 5px auto 0px;  \n  }\n\n    .subcat-thumbnail{\n    margin: 0 0 30px 0;\n    box-shadow: 0 2px 15px #d4d4d4;\n    border-radius: 0;\n    padding: 1.25rem;\n  }\n\n    /* .btn-success{\n    border-radius: 0;\n    padding: 6px 15px;\n    margin: 0 15px;\n    font-size: 1em;\n  } */\n\n    .add-more{\n    border: none;\n    background-color: transparent;\n    font-weight: 700;\n    margin: 0px 20px;\n    font-size: 1.1em;\n  }\n\n    .row-width {\n    width: 270px;\n   \n    margin: 0 auto;\n  }\n\n    .border-primary{\n    border: 0px solid #6b6969 !important;\n    max-width: 150px;\n    max-height: 150px;\n    padding: 30px;\n    border-radius: 4px;\n  }\n\n    .border-primary:hover {\n    box-shadow: 1px 2px #ccc;\n}\n\n    .subcats-des span{\n    display: block;\n  }\n\n    .subcats-des span.subcats-price{\n    color: #3d882f;\n    font-size: 0.7rem;\n  }\n\n    .subcats-txt{\n    font-size: 0.7rem;\n  }\n\n    .bodered{\n    border: 1px solid #3d882f;\n  }\n\n    .bodered input{\n    border: 0;\n  }\n\n    .row.bodered .col-sm-4 {\n    padding: 0px 5px;\n    font-weight: 400;\n}\n\n    .btm-buttons{\n  margin:  25px auto;\n  \n}"

/***/ }),

/***/ "./src/app/sub-collection/sub-collection.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sub-collection/sub-collection.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n\n  <div class=\"container\">\n\n    <div class=\"page-title\">\n      <h4 class=\"text-center text-uppercase\">{{title}}</h4>\n    </div>\n    <!----sub collection starts -->\n\n\n    <div class=\"row text-center\">\n      <div *ngFor=\"let m of subcats\" class=\"col-sm-4 p-tb-4\">\n\n        <div class=\"subcat-thumbnail\">\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <img src=\"{{m[3]}}\" class=\"img-responsive border border-primary\" width=\"100%\">\n            </div>\n            <div class=\"col-sm-12 subcats-des\">\n              <span class=\"subcats-title\">{{m[0]}}</span>\n              <span style=\"font-weight:bold; font-size: 0.8em\" class=\"subcats-price\">(Rs 10 per Kg)</span>\n            </div>\n\n          </div>\n\n          <div class=\"row row-width\">\n            <div class=\"col-sm-5\">\n              <div class=\"subcats-txt\">Estimated Qty</div>\n              <div class=\"row bodered\">\n                <b class=\"col-sm-4\" (click)=\"decreaseValue(m)\">-</b>\n                <input type=\"number\" class=\"col-sm-4\" value={{m[2]}} [(ngModel)]=\"m[2]\">\n                <b class=\"col-sm-4 \" (click)=\"increaseValue(m)\">+</b>\n              </div>\n            </div>\n            <div class=\"col-sm-2\"></div>\n\n            <div class=\"col-sm-5\">\n              <div class=\"subcats-txt\">Estimated Price</div>\n              <div class=\"bodered\">\n                {{m[1]*m[2]}}\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"text-center btm-buttons\">\n      <button (click)=\"addMore()\" class=\"add-more\">+Add more</button>\n    </div>\n    <div class=\"text-center btm-buttons\">\n      <button style=\"text-transform: capitalize;text-decoration: none;\" class=\"btn btn-success\" (click)=\"proceedToCart()\">Proceed to Pickup</button>\n    </div>\n   \n    \n\n  </div>"

/***/ }),

/***/ "./src/app/sub-collection/sub-collection.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sub-collection/sub-collection.component.ts ***!
  \************************************************************/
/*! exports provided: SubCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCollectionComponent", function() { return SubCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SubCollectionComponent = /** @class */ (function () {
    function SubCollectionComponent(router, db) {
        this.router = router;
        this.db = db;
        this.subcats = [];
    }
    SubCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meh = JSON.parse(localStorage.getItem("cart"));
        this.cm = 0;
        if (meh)
            for (var m in meh) {
                this.cm++;
            }
        console.log("cm", this.cm);
        console.log("meh", meh);
        var id = this.router.url.split("/");
        console.log(id[2]);
        this.title = id[2];
        this.db.collection("products").doc(id[2]).get().subscribe(function (res) {
            if (res.exists) {
                for (var k in res.data()) {
                    if (k != "thumb" && (k.search("_thumb") == -1)) {
                        if (meh && k in meh) {
                            _this.subcats.push([k, res.data()[k], meh[k][0], res.data()[k + "_thumb"]]);
                        }
                        else {
                            _this.subcats.push([k, res.data()[k], 0, res.data()[k + "_thumb"]]);
                        }
                    }
                }
            }
        });
        console.log(this.subcats);
    };
    SubCollectionComponent.prototype.decreaseValue = function (m) {
        console.log(m);
        if (m[2] != 0) {
            m[2]--;
            this.cm--;
        }
        this.pack();
    };
    SubCollectionComponent.prototype.increaseValue = function (m) {
        console.log(m);
        m[2]++;
        this.pack();
    };
    SubCollectionComponent.prototype.addMore = function () {
        this.pack();
        this.router.navigate(["/collections"]);
    };
    SubCollectionComponent.prototype.pack = function () {
        var m = {};
        if (localStorage.getItem("cart"))
            m = JSON.parse(localStorage.getItem("cart"));
        for (var i = 0; i < this.subcats.length; i++) {
            var pro = this.subcats[i][0];
            var qua = this.subcats[i][2];
            var price = this.subcats[i][1];
            m[pro] = [qua, price];
        }
        for (var k in m) {
            if (m[k][0] == 0) {
                delete m[k];
            }
        }
        localStorage.setItem("cart", JSON.stringify(m));
        this.cm = 0;
        for (var g in m) {
            this.cm++;
        }
    };
    SubCollectionComponent.prototype.proceedToCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pack()];
                    case 1:
                        _a.sent();
                        console.log("rerouting");
                        this.router.navigate(["/cart"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    SubCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-collection',
            template: __webpack_require__(/*! ./sub-collection.component.html */ "./src/app/sub-collection/sub-collection.component.html"),
            styles: [__webpack_require__(/*! ./sub-collection.component.css */ "./src/app/sub-collection/sub-collection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], SubCollectionComponent);
    return SubCollectionComponent;
}());



/***/ }),

/***/ "./src/app/userhome/userhome.component.css":
/*!*************************************************!*\
  !*** ./src/app/userhome/userhome.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-col{\n margin-top:20px;\n}\n.center li{ \n  padding: 10px;\n  text-align: center;\n}\n.my-center{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/userhome/userhome.component.html":
/*!**************************************************!*\
  !*** ./src/app/userhome/userhome.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"\">\n    <img src=\"../assets/images/Categories/logo1.png\">\n  </div>\n  <!-----Navigation Starts Here-->\n\n<!--<nav class=\"navbar navbar-expand-sm navbar-light bg-success\">\n    <a class=\"navbar-brand\" href=\"#\">Reboxit</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Price List <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"showLogin()\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"showSignup()\">SignUp</a>\n       </li>\n         <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"showAssociate()\">Associates</a>\n         </li>\n         <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact Us</a>\n       </li>\n       <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Help</a>\n     </li>\n      </ul>\n    \n    </div>\n  </nav>-->\n\n<!----Blocks here---->\n\n  <!---<div class=\"my-col\">\n      <ul class=\"nav nav-pills nav-fill\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#\" style=\"background:skyblue;\">Your Pickups</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#\" style=\"background:blue;\">Request Admin</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#\" style=\"background:green;\">Request ScrapeDealer</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"#\" style=\"background:orangered;\">My Sheets</a>\n          </li>\n        </ul>\n  </div>-->\n  <div class=\"contanier\"> \n   \n    <div class=\"col\">\n      <nav class=\"navbar navbar-expand-sm navbar-light bg-white\">\n          <a class=\"navbar-brand\" href=\"#\"></a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n        \n          <div class=\"collapse navbar-collapse my-center\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav center\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#\" style=\"background:skyblue;\">Your Pickups</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#\" style=\"background:blue;\">Request Admin</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#\" style=\"background:green;\">Request ScrapeDealer</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#\" style=\"background:orangered;\" (click)=\"showDataForm()\">My Sheets</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link active\" href=\"#\" style=\"background:orangered;\" (click)=\"showAddForm()\">+</a>\n                    </li>\n             \n            </ul>\n          \n          </div>\n        </nav>\n     </div>\n </div>\n\n <!------>\n <div ngIf=\"dataForm\">\n    <div class=\"container\">\n        <div class=\"main-content\">\n          <div class=\"row\">\n            <div class=\"col-md-12\" style=\"border:1px solid;\"> \n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\"> My Data</h4>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead class=\" text-primary\" >\n                        <th>\n                          Usertype\n                        </th>\n                        <th>\n                            Email\n                        </th>\n                        <th>\n                            Phone\n                        </th>\n                        <th>\n                            Username\n                        </th>\n                        <th>\n                            Password\n                        </th>\n                        \n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>\n                              house hold\n                          </td>\n                          <td>\n                              \n                          </td>\n                          <td>\n                            \n                          </td>\n                          <td>\n                              \n                          </td>\n                          <td>\n                              \n                          </td>\n                         \n                        </tr>\n                       \n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n        </div>\n       </div>\n      </div>\n<!---Add Form-->\n\n    <div *ngIf=\"addForm\">\n      <div class=\"\">\n        <div class=\"\">\n          \n         </div>\n      </div>\n\n    </div>\n  \n\n\n\n</div>"

/***/ }),

/***/ "./src/app/userhome/userhome.component.ts":
/*!************************************************!*\
  !*** ./src/app/userhome/userhome.component.ts ***!
  \************************************************/
/*! exports provided: UserhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhomeComponent", function() { return UserhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserhomeComponent = /** @class */ (function () {
    function UserhomeComponent() {
        this.dataForm = false;
        this.addForm = false;
    }
    UserhomeComponent.prototype.ngOnInit = function () { };
    UserhomeComponent.prototype.showAddForm = function (valid) {
        this.addForm = true;
        this.dataForm = false;
    };
    UserhomeComponent.prototype.showDataForm = function (valid) {
        this.addForm = false;
        this.dataForm = true;
    };
    UserhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userhome',
            template: __webpack_require__(/*! ./userhome.component.html */ "./src/app/userhome/userhome.component.html"),
            styles: [__webpack_require__(/*! ./userhome.component.css */ "./src/app/userhome/userhome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserhomeComponent);
    return UserhomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDgk8qQ8YPHirUatVaKkhac_QMV-vvL0p8",
        authDomain: "reboxit-504d8.firebaseapp.com",
        databaseURL: "https://reboxit-504d8.firebaseio.com",
        projectId: "reboxit-504d8",
        storageBucket: "reboxit-504d8.appspot.com",
        messagingSenderId: "947460326724"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chsvk/Chsvk/Practice/ReboxitAmarnath/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map