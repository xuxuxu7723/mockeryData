webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_models/field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

var Field = (function () {
    function Field(fieldName, dateTypeName, _id, option, blank, fb) {
        this.fieldName = fieldName;
        this.dateTypeName = dateTypeName;
        this._id = _id;
        this.option = option;
        this.blank = blank;
        this.fb = fb;
    }
    Field.prototype.buildField = function () {
        return this.fb.group({
            name: [this.fieldName, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required],
            dataType: this.fb.group({
                name: [this.dateTypeName, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required],
                _id: [this._id, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required]
            }),
            option: this.option,
            blank: [this.blank, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].pattern('^([0-9]|([1-9][0-9])|100)$')]]
        });
    };
    return Field;
}());



/***/ }),

/***/ "../../../../../src/app/_service/AuthGuardService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.sessionService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, sessionService) {
        this.http = http;
        this.sessionService = sessionService;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.http.post('/mockdata/api/v1/login', user);
    };
    AuthenticationService.prototype.logout = function () {
        return this.http.get('/mockdata/api/v1/logout');
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.sessionService.getUser();
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/data.type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTypeService = (function () {
    function DataTypeService(http) {
        this.http = http;
    }
    DataTypeService.prototype.getAllDataTypes = function () {
        return this.http.get('/mockdata/api/v1/types');
    };
    DataTypeService.prototype.getTemplate = function () {
        return this.http.get('/mockdata/api/v1/template');
    };
    DataTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataTypeService);
    return DataTypeService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_service/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/_service/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_type_service__ = __webpack_require__("../../../../../src/app/_service/data.type.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_service__ = __webpack_require__("../../../../../src/app/_service/schema.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visitor_service__ = __webpack_require__("../../../../../src/app/_service/visitor.service.ts");
/* unused harmony namespace reexport */








/***/ }),

/***/ "../../../../../src/app/_service/schema.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchemaService = (function () {
    function SchemaService(http) {
        this.http = http;
    }
    SchemaService.prototype.getSchemasByUserId = function (id) {
        return this.http.get("/mockdata/api/v1/users/" + id + "/schemas");
    };
    SchemaService.prototype.getSchemaById = function (id) {
        return this.http.get("/mockdata/api/v1/schemas/" + id);
    };
    SchemaService.prototype.create = function (schema) {
        return this.http.post("/mockdata/api/v1/schemas", schema);
    };
    SchemaService.prototype.remove = function (id) {
        return this.http.delete("/mockdata/api/v1/schemas/" + id);
    };
    SchemaService.prototype.update = function (schema) {
        return this.http.put("/mockdata/api/v1/schemas/" + schema.id, schema);
    };
    SchemaService.prototype.previewBySchemaId = function (id) {
        return this.http.get("/mockdata/api/v1/schemas/" + id + "/preview");
    };
    SchemaService.prototype.checkIfGenerate = function (id) {
        return this.http.get("/mockdata/api/v1/schemas/" + id + "/exist");
    };
    SchemaService.prototype.generateMockData = function (id) {
        return this.http.get("/mockdata/api/v1/schemas/" + id + "/generate");
    };
    SchemaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SchemaService);
    return SchemaService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SessionService = (function () {
    function SessionService() {
    }
    SessionService.prototype.create = function (user) {
        sessionStorage.user = JSON.stringify(user);
    };
    SessionService.prototype.destory = function () {
        delete sessionStorage.user;
    };
    SessionService.prototype.isAuthenticated = function () {
        return sessionStorage.user && true;
    };
    SessionService.prototype.getUser = function () {
        if (sessionStorage.user) {
            return JSON.parse(sessionStorage.user);
        }
        else {
            return null;
        }
    };
    SessionService.prototype.isLogin = function () {
        var user = this.getUser();
        return user ? true : false;
    };
    SessionService.prototype.hasRole = function (role) {
        var user = this.getUser();
        return user && user.role === role ? true : false;
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.create = function (user) {
        return this.http.post("/mockdata/api/v1/users", user);
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get("/mockdata/api/v1/users");
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get("/mockdata/api/v1/users/" + id);
    };
    UserService.prototype.updateUserStatus = function (id, status) {
        return this.http.put("/mockdata/api/v1/users/" + id + "/status", { status: status });
    };
    UserService.prototype.updateUserRole = function (id, role) {
        return this.http.put("/mockdata/api/v1/users/" + id + "/role", { role: role });
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put("/mockdata/api/v1/users/" + id, user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/visitor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisitorService = (function () {
    function VisitorService(http) {
        this.http = http;
    }
    VisitorService.prototype.preview = function () {
        return this.http.get('/mockdata/api/v1/visitor/preview');
    };
    VisitorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VisitorService);
    return VisitorService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#userDropdown {\n  cursor: pointer !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img src=\"../favicon.ico\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\">\n    </a>\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      MOCKERY DATA\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\">\n            HOME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"users\" *ngIf=\"sessionService.hasRole('admin')\">\n            USERS\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"schemas\" *ngIf=\"sessionService.isLogin() && sessionService.hasRole('user')\">\n            SCHEMAS\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" *ngIf=\"sessionService.isLogin()\">\n          <a class=\"nav-link dropdown-toggle\" id=\"userDropdown\"\n             data-toggle=\"dropdown\" aria-expanded=\"false\">\n            HI, {{sessionService.getUser().username | uppercase}}\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"userDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"profile\">PROFILE</a>\n            <a class=\"dropdown-item\" routerLink=\"logout\">LOGOUT</a>\n          </div>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!sessionService.isLogin()\">\n          <a class=\"nav-link\" routerLink=\"login\">LOGIN</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!sessionService.isLogin()\">\n          <a class=\"nav-link\" routerLink=\"register\">REGISTER</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br>\n<br>\n<br>\n<div class=\"container mt-1\">\n  <ng-progress [spinner]=\"false\" [thick]=\"true\"></ng-progress>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service__ = __webpack_require__("../../../../../src/app/_service/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(sessionService, authenticationService) {
        this.sessionService = sessionService;
        this.authenticationService = authenticationService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__service_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_progressbar_core__ = __webpack_require__("../../../../@ngx-progressbar/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_progressbar_router__ = __webpack_require__("../../../../@ngx-progressbar/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_authentication_service__ = __webpack_require__("../../../../../src/app/_service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_user_service__ = __webpack_require__("../../../../../src/app/_service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_data_type_service__ = __webpack_require__("../../../../../src/app/_service/data.type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_visitor_service__ = __webpack_require__("../../../../../src/app/_service/visitor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schema_list_schema_list_component__ = __webpack_require__("../../../../../src/app/schema-list/schema-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__create_schema_create_schema_component__ = __webpack_require__("../../../../../src/app/create-schema/create-schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_schema_service__ = __webpack_require__("../../../../../src/app/_service/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__schema_details_schema_details_component__ = __webpack_require__("../../../../../src/app/schema-details/schema-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__update_schema_update_schema_component__ = __webpack_require__("../../../../../src/app/update-schema/update-schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__formula_syntax_formula_syntax_component__ = __webpack_require__("../../../../../src/app/formula-syntax/formula-syntax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_AuthGuardService__ = __webpack_require__("../../../../../src/app/_service/AuthGuardService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__schema_list_schema_list_component__["a" /* SchemaListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__create_schema_create_schema_component__["a" /* CreateSchemaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__schema_details_schema_details_component__["a" /* SchemaDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_25__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_26__user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__update_schema_update_schema_component__["a" /* UpdateSchemaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_29__formula_syntax_formula_syntax_component__["a" /* FormulaSyntaxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ngx_progressbar_router__["a" /* NgProgressRouterModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                // attach csrf token to post and put request
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["c" /* HttpClientXsrfModule */].withOptions({
                    headerName: 'csrf-token',
                    cookieName: 'csrf-token'
                }),
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_30__service_AuthGuardService__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_9__service_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_10__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__service_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_12__service_data_type_service__["a" /* DataTypeService */], __WEBPACK_IMPORTED_MODULE_21__service_schema_service__["a" /* SchemaService */], __WEBPACK_IMPORTED_MODULE_13__service_visitor_service__["a" /* VisitorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-schema/create-schema.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".type-input {\n  cursor: pointer;\n  background-color: white;\n}\n\ni.fa {\n  margin-top: 8px;\n  cursor: pointer;\n}\n\ni.fa-pencil {\n  color: #006b80;\n}\n\n.type {\n  float: left;\n  height: 96px;\n  width: 210px;\n  line-height: 20px;\n  padding: 8px 10px;\n  margin: 0 8px 8px 0;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.type-name {\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n  margin-bottom: 2px;\n}\n\n.type:hover {\n  background-color: #f0f0f0;\n}\n\n.type-description {\n  color: #606060;\n  font-size: 12px;\n}\n\n.tab-content {\n  overflow: auto;\n  height: 300px;\n  width: inherit;\n}\n\n.datatable-scroll {\n  width: 100% !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-schema/create-schema.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"createSchemaForm\" [formGroup]=\"createSchemaForm\">\n  <div class=\"col-md-7 col-sm-12\">\n    <h3><strong>New Schema</strong></h3>\n    <div class=\"alert-danger\" *ngIf=\"schemaError\">{{schemaError}}</div>\n    <div class=\"card\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n        <tr>\n          <th>Field Name</th>\n          <th>Type</th>\n          <th>Blank(%)</th>\n          <th>Options</th>\n        </tr>\n        </thead>\n        <tbody formArrayName=\"fields\">\n        <tr *ngFor=\"let field of createSchemaForm.controls.fields.controls; let i = index\" [formGroupName]=\"i\">\n          <td>\n            <input class=\"form-control\" formControlName=\"name\">\n          </td>\n          <td>\n            <input class=\"form-control type-input\" readonly\n                   data-toggle=\"modal\" data-target=\"#modal\"\n                   [value]=field.value.dataType.name (click)=\"selectedIndex = i\">\n          </td>\n          <td>\n            <input class=\"form-control\" formControlName=\"blank\" style=\"width: 60px\"\n                   data-toggle=\"popover\" data-trigger=\"focus\"\n                   data-content=\"Tip: fields with the same blank % will be blank at the same time.\">\n          </td>\n          <td>\n            <i class=\"fa fa-pencil ml-4\" data-toggle=\"modal\" data-target=\"#optionModal\" (click)=\"fillTextfield(i)\"></i>\n          </td>\n          <td>\n            <i class=\"fa fa-times\" (click)=\"removeField(i)\"></i>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"btn btn-outline-dark col-md-5 col-sm-12\" (click)=\"addField()\">Add another field</button>\n  </div>\n\n  <div class=\"container col-md-5\">\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">#Rows:</label>\n      <div class=\"col-md-8\">\n        <input class=\"form-control\" placeholder=\"number of rows\" formControlName=\"count\">\n        <div class=\"alert alert-danger\"\n             *ngIf=\"createSchemaForm.controls['count'].dirty && createSchemaForm.controls['count'].invalid\">\n          Rows should be a positive integer!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">Format:</label>\n      <div class=\"col-md-8\">\n        <select class=\"custom-select form-control\" formControlName=\"fileFormat\">\n          <option selected>JSON</option>\n          <option>CSV</option>\n          <option>XML</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">Schema Name:</label>\n      <div class=\"col-md-8\">\n        <input class=\"form-control\" placeholder=\"schema name\" formControlName=\"name\">\n        <div class=\"alert alert-danger\"\n             *ngIf=\"createSchemaForm.controls['name'].dirty && createSchemaForm.controls['name'].invalid\">\n          Schema name is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-outline-info col-sm-12 col-md-8\" (click)=\"createSchema(createSchemaForm.value)\"\n                [disabled]=\"createSchemaForm.invalid\">Save Schema\n        </button>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalLabel\">\n          Choose a Type\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"nav nav-pills\">\n          <li class=\"nav-item\" *ngFor=\"let key of category; let i = index\">\n            <a class=\"nav-link text-uppercase\" [ngClass]=\"{active: i==0}\" data-toggle=\"tab\" href=\"#{{key}}\" role=\"tab\"\n               aria-controls=key aria-selected=\"true\">{{key}}</a>\n          </li>\n        </ul>\n        <div class=\"tab-content container\">\n          <div class=\"tab-pane fade show\" [ngClass]=\"{active: i==0}\" id={{key}}\n               *ngFor=\"let key of category; let i = index\">\n            <div class=\"type\" *ngFor=\"let type of dataTypes[key]\" (click)=\"selectType(type)\"\n                 data-dismiss=\"modal\">\n              <div class=\"type-name\">{{type.name}}</div>\n              <div class=\"type-description\">{{type.description}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"optionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">\n          Formula\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <div style=\"font-size: 95%\">\n          <p>Alter the value of this field using <a routerLink=\"/syntax\" target=\"_blank\">Mockery formula syntax</a>. Use this to refer to the value of this\n            schema.</p>\n          Example: <br>\n          <p><code>this.firstname</code> => refer to the value of firstname which is defined in schema</p>\n          <p><code>faker.name.firstName()</code> => use the <a href=\"https://github.com/Marak/faker.js\" target=\"_blank\">faker</a>\n            generator to generate random first name</p>\n          <p><code>chance.first()</code> => use the <a href=\"https://github.com/chancejs/chancejs\" target=\"_blank\">chance</a>\n            generator to generate random first name</p>\n          <p><code>casual.first_name</code> => use the <a href=\"https://github.com/boo1ean/casual\" target=\"_blank\">casual</a>\n            generator to generate random first name</p>\n        </div>\n        <div class=\"container\">\n          <ace-editor [theme]=\"'tomorrow'\" style=\"min-height: 100px; width:100%; overflow: auto;\" [mode]=\"'javascript'\"\n                      class=\"form-control\" columns=\"60\" placeholder=\"example: upper(this)\" rows=\"4\" spellcheck=\"false\"\n                      [(ngModel)]=\"textfield\">\n          </ace-editor>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"applyOption()\">Apply</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-schema/create-schema.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSchemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_type_service__ = __webpack_require__("../../../../../src/app/_service/data.type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_schema_service__ = __webpack_require__("../../../../../src/app/_service/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brace__ = __webpack_require__("../../../../brace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_brace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_brace_theme_tomorrow__ = __webpack_require__("../../../../brace/theme/tomorrow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_brace_theme_tomorrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_brace_theme_tomorrow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_field__ = __webpack_require__("../../../../../src/app/_models/field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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









var CreateSchemaComponent = (function () {
    function CreateSchemaComponent(sessionService, fb, dataTypeService, schemaService, router) {
        var _this = this;
        this.sessionService = sessionService;
        this.fb = fb;
        this.dataTypeService = dataTypeService;
        this.schemaService = schemaService;
        this.router = router;
        this.dataTypes = {};
        this.textfield = '';
        this.category = ["address", "company", "date", "finance", "internet", "name", "phone", "random", "system"];
        this.dataTypeService.getAllDataTypes().subscribe(function (dataTypes) { return _this.categorizeTypes(dataTypes); });
    }
    CreateSchemaComponent.prototype.categorizeTypes = function (dataTypes) {
        for (var index in this.category) {
            var kind = this.category[index];
            this.dataTypes[kind] = dataTypes.filter(function (type) { return type.name.startsWith(kind); }).map(function (type) {
                type.name = type.name.substring(type.name.indexOf('.') + 1).replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
                return type;
            });
        }
    };
    CreateSchemaComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.buildForm()];
                    case 1:
                        _a.createSchemaForm = _d.sent();
                        _c = (_b = console).log;
                        return [4 /*yield*/, this.buildForm()];
                    case 2:
                        _c.apply(_b, [_d.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateSchemaComponent.prototype.buildField = function () {
        var fields = this.createSchemaForm.controls['fields'];
        var lastOne = fields.controls[fields.length - 1];
        return this.fb.group(lastOne.controls);
    };
    CreateSchemaComponent.prototype.buildFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var dataTypes, fields, fieldGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataTypeService.getTemplate().toPromise()];
                    case 1:
                        dataTypes = _a.sent();
                        fields = dataTypes.map(function (dataType) {
                            var field = {
                                name: dataType.name.split('.')[1],
                                dataType: dataType,
                                option: '',
                                blank: 0
                            };
                            return field;
                        });
                        fieldGroup = fields.map(function (field) { return new __WEBPACK_IMPORTED_MODULE_8__models_field__["a" /* Field */](field.name, field.dataType.name, field.dataType._id, field.option, field.blank, _this.fb).buildField(); });
                        return [2 /*return*/, this.fb.array(fieldGroup)];
                }
            });
        });
    };
    CreateSchemaComponent.prototype.buildForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.fb).group;
                        _c = {
                            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
                            count: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[1-9]+[0-9]*$')]],
                            fileFormat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
                        };
                        return [4 /*yield*/, this.buildFields()];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.fields = _d.sent(),
                                _c)])];
                }
            });
        });
    };
    CreateSchemaComponent.prototype.removeField = function (index) {
        var fields = this.createSchemaForm.controls['fields'];
        if (fields.length == 1) {
            alert("The schema should have one field at least!");
        }
        else {
            fields.removeAt(index);
        }
    };
    CreateSchemaComponent.prototype.addField = function () {
        var fields = this.createSchemaForm.controls['fields'];
        var lastField = this.buildField();
        var newField = new __WEBPACK_IMPORTED_MODULE_8__models_field__["a" /* Field */]("New" + lastField.value.name, lastField.value.dataType.name, lastField.value.dataType._id, '', 0, this.fb).buildField();
        fields.push(newField);
    };
    CreateSchemaComponent.prototype.applyOption = function () {
        var fields = this.createSchemaForm.controls['fields'];
        fields.controls[this.selectedIndex].patchValue({ option: this.textfield });
        fields.controls[this.selectedIndex].patchValue({
            dataType: {
                _id: "5a2b5ca6bbeb612e307415f7",
                name: "self-defined"
            }
        });
    };
    CreateSchemaComponent.prototype.selectType = function (type) {
        var fields = this.createSchemaForm.controls['fields'];
        fields.controls[this.selectedIndex].patchValue({ dataType: type });
    };
    CreateSchemaComponent.prototype.fillTextfield = function (index) {
        this.selectedIndex = index;
        var fields = this.createSchemaForm.controls['fields'];
        this.textfield = fields.controls[index].value.option;
    };
    CreateSchemaComponent.prototype.createSchema = function (newSchema) {
        var _this = this;
        // Check if same name occurs in different column
        if (!this.checkFieldName(newSchema.fields))
            return;
        this.schemaService.create(newSchema).subscribe(function (data) { return _this.router.navigate(['/user', _this.sessionService.getUser().id, 'schemas']); }, function (error) { return _this.schemaError = error.error.text; });
    };
    CreateSchemaComponent.prototype.checkFieldName = function (fields) {
        var set = new Set();
        for (var i in fields) {
            if (set.has(fields[i].name)) {
                this.schemaError = "Different field cannot have the same name!";
                return false;
            }
            set.add(fields[i].name);
        }
        return true;
    };
    CreateSchemaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-schema',
            template: __webpack_require__("../../../../../src/app/create-schema/create-schema.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-schema/create-schema.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__service_data_type_service__["a" /* DataTypeService */],
            __WEBPACK_IMPORTED_MODULE_3__service_schema_service__["a" /* SchemaService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], CreateSchemaComponent);
    return CreateSchemaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/formula-syntax/formula-syntax.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/formula-syntax/formula-syntax.component.html":
/***/ (function(module, exports) {

module.exports = "<h3><strong>Formulas Syntax</strong></h3>\n<p class=\"lead\">Formulas allow you to use Javascript code to generate data based on customized logic.</p>\n<h4>Operators</h4>\n<p><code>+ - * / %</code></p>\n<h4>Logic</h4>\n<p><code>&lt; &gt; &lt;= &gt;= == != and or</code></p>\n<h4>Functions</h4>\n<p>\n  Mockery data is built on top of\n  <a href=\"https://github.com/Marak/faker.js\" target=\"_blank\">faker</a>,\n  <a href=\"https://github.com/chancejs/chancejs\" target=\"_blank\">chance</a> and\n  <a href=\"https://github.com/boo1ean/casual\" target=\"_blank\">casual</a>.\n  You can easily make use of the functions provided by these libraries.\n</p>\nExamples:\n<h5>Faker</h5>\n<p class=\"mb-1\"><code>faker.internet.email()</code></p>\n<p class=\"mb-1\"><code>faker.company.companyName()</code></p>\n<p class=\"mb-1\"><code>faker.date.past()</code></p>\n<p><code>faker.image.imageUrl()</code></p>\n<p class=\"mb-1\">Please go the <a href=\"https://github.com/Marak/faker.js#api-methods\" target=\"_blank\">Faker.js</a> to see more\n  examples.</p>\n<h5>Chance</h5>\n<p class=\"mb-1\"><code>chance.address()</code></p>\n<p class=\"mb-1\"><code>chance.age({{ '{' + \"type: 'child'\" + '}'}})</code></p>\n<p class=\"mb-1\"><code>chance.ipv6()</code></p>\n<p><code>chance.country()</code></p>\n<p>Please go the <a href=\"http://chancejs.com\" target=\"_blank\">Chance.js</a> to see more examples.</p>\n<h5>Casual</h5>\n<p class=\"mb-1\"><code>casual.username</code></p>\n<p class=\"mb-1\"><code>casual.rgb_hex</code></p>\n<p class=\"mb-1\"><code>casual.domain</code></p>\n<p><code>casual.state</code></p>\n<p>Please go the <a href=\"https://github.com/boo1ean/casual#embedded-generators\" target=\"_blank\">Casual.js</a> to see\n  more examples.</p>\n"

/***/ }),

/***/ "../../../../../src/app/formula-syntax/formula-syntax.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaSyntaxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormulaSyntaxComponent = (function () {
    function FormulaSyntaxComponent() {
    }
    FormulaSyntaxComponent.prototype.ngOnInit = function () {
    };
    FormulaSyntaxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-formula-syntax',
            template: __webpack_require__("../../../../../src/app/formula-syntax/formula-syntax.component.html"),
            styles: [__webpack_require__("../../../../../src/app/formula-syntax/formula-syntax.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormulaSyntaxComponent);
    return FormulaSyntaxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\n  .modal-xl {\n    width: 75%;\n    max-width:1200px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-7 col-sm-12\">\n    <div class=\"card\">\n      <h6 class=\"card-body\">\n        Need some mock data to test your app?<br>\n        Mockery Data lets you generate up to 100,000 rows of realistic test data in JSON, CSV, and XML formats.\n        <div>\n          Need more data? <a [routerLink]=\"['/register']\">Sign up now!</a>\n        </div>\n      </h6>\n    </div>\n    <div class=\"card\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n        <tr>\n          <th>Field Name</th>\n          <th>Type</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>\n            <div class=\"form-control\">id</div>\n          </td>\n          <td>\n            <div class=\"form-control\">number</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <div class=\"form-control\">firstName</div>\n          </td>\n          <td>\n            <div class=\"form-control\">firstName</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <div class=\"form-control\">lastName</div>\n          </td>\n          <td>\n            <div class=\"form-control\">lastName</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <div class=\"form-control\">email</div>\n          </td>\n          <td>\n            <div class=\"form-control\">email</div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <div class=\"form-control\">nationality</div>\n          </td>\n          <td>\n            <div class=\"form-control\">country</div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"container col-md-5\">\n    <div class=\"form-group\">\n      <label class=\"col-md-3 col-form-label\">#Rows:</label>\n      <div class=\"col-md-8\">\n        <div class=\"form-control\">1000</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-3 col-form-label\">Format:</label>\n      <div class=\"col-md-8\">\n        <div class=\"form-control\">JSON</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-outline-primary col-sm-12 col-md-8 mb-1\" data-toggle=\"modal\" data-target=\"#modal\"\n                (click)=\"preview()\">Preview</button>\n        <a class=\"btn btn-outline-success col-sm-12 col-md-8 mb-1\"\n           href='/mockdata/api/v1/visitor/file'>Download Data</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-xl\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-primary\" id=\"modalLabel\">\n          Preview (Up to 100)\n        </h5>\n      </div>\n      <div class=\"modal-body container\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#table\" role=\"tab\">Table</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#json\" role=\"tab\">Json</a>\n          </li>\n        </ul>\n        <div class=\"tab-content\">\n          <br/>\n          <div class=\"tab-pane fade show active\" id=\"table\" role=\"tabpanel\">\n            <ngx-datatable\n              #table\n              class=\"material\"\n              [loadingIndicator]=\"loadingIndicator\"\n              [rows]=\"rows\"\n              [columns]=\"headers\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"'auto'\"\n              [limit]=\"5\"\n              [scrollbarH]=\"true\">\n            </ngx-datatable>\n          </div>\n          <div class=\"tab-pane fade\" id=\"json\" role=\"tabpanel\" style=\"overflow: auto;height: 310px; width: inherit;\">\n            <pre *ngFor=\"let row of rows\" [innerHTML]=\"row | json\"></pre>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_visitor_service__ = __webpack_require__("../../../../../src/app/_service/visitor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(visitorService) {
        this.visitorService = visitorService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.preview = function () {
        var _this = this;
        if (!this.rows) {
            this.visitorService.preview().subscribe(function (mockData) {
                _this.rows = mockData;
                _this.buildHeaders();
            }, function (error) { return console.log(error); });
        }
    };
    HomeComponent.prototype.buildHeaders = function () {
        var headers = [];
        for (var name_1 in this.rows[0]) {
            headers.push({ prop: name_1 });
        }
        this.headers = headers;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_visitor_service__["a" /* VisitorService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 col-md-offset-3\">\n  <h3><strong>Login</strong></h3>\n  <form [formGroup]=\"loginForm\">\n    <div class=\"alert alert-danger\" *ngIf=\"error\">\n      {{error}}\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\"><strong>Email:</strong></label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"email\" required/>\n      <div class=\"alert alert-danger\"\n           *ngIf=\"loginForm.controls['email'].invalid && loginForm.controls['email'].dirty\">\n        <div *ngIf=\"loginForm.controls['email'].hasError('required')\">\n          Email is required!\n        </div>\n        <div\n          *ngIf=\"!loginForm.controls['email'].hasError('required') && loginForm.controls['email'].hasError('email')\">\n          Email format wrong!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\"><strong>Password:</strong></label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"password\" required/>\n      <div class=\"alert alert-danger\"\n           *ngIf=\"loginForm.controls['password'].invalid && loginForm.controls['password'].dirty\">\n        <div *ngIf=\"loginForm.controls['password'].hasError('required')\">\n          Password is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary pull-right\" [disabled]=\"!loginForm.valid\" (click)=\"login(loginForm.value)\">Login\n      </button>\n    </div>\n    <hr class=\"mt-1 mb-1\">\n    <div class=\"form-group\">\n      <div style=\"font-size:85%\">\n        Don't have an account!\n        <a [routerLink]=\"['/register']\">\n          Sign Up Here\n        </a>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_index__ = __webpack_require__("../../../../../src/app/_service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authenticationService, router, sessionService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.sessionService = sessionService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.authenticationService.login(user)
            .subscribe(function (data) {
            _this.sessionService.create(data);
            _this.loginForm.reset();
            _this.router.navigate(['/']);
        }, function (error) {
            _this.error = error.error;
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_index__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_session_service__["a" /* SessionService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service__ = __webpack_require__("../../../../../src/app/_service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(authenticationService, router, sessionService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.sessionService = sessionService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function (data) { return _this.sessionService.destory(); });
        this.router.navigate(['/']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: '',
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_session_service__["a" /* SessionService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <strong>Oops! The page you requested was not found.</strong>\n    <br>\n    <strong>Go to <a routerLink=\"/\">Homepage</a>.</strong>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 col-md-offset-1\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\"><h3 class=\"panel-title\"><strong>Profile</strong></h3></div>\n    <div class=\"panel-body\">\n      <form [formGroup]=\"profileForm\">\n        <div class=\"alert alert-danger\" *ngIf=\"profileForm.invalid\">\n          <li *ngIf=\"profileForm.controls['firstName'].invalid\">\n            First name is required!\n          </li>\n          <li *ngIf=\"profileForm.controls['lastName'].invalid\">\n            Last name is required!\n          </li>\n          <li *ngIf=\"profileForm.controls['username'].invalid\">\n            Length of username should between 3 and 10!\n          </li>\n          <li *ngIf=\"profileForm.controls['email'].hasError('email')\">\n            Email format wrong!\n          </li>\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\">\n          {{error}}\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>First Name:</strong></label>\n              <input type=\"text\" formControlName=\"firstName\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>Last Name:</strong></label>\n              <input type=\"text\" formControlName=\"lastName\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Username:</strong></label>\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Email:</strong></label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <button data-toggle=\"modal\" data-target=\"#pswModal\" class=\"form-control col-sm-6 col-md-3 btn btn-primary\">Change\n            Password\n          </button>\n          <button (click)=\"update(profileForm.value)\" class=\"pull-right btn btn-success col-sm-6 col-md-3\"\n                  [disabled]=\"profileForm.invalid\">\n            Update\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"pswModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">\n          Update password\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container\">\n          <div class=\"alert alert-danger\" *ngIf=\"psw != confirmedPsw\">\n            Password and confirm password are different!\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>New password:</strong></label>\n              <input type=\"password\" [(ngModel)]=\"psw\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>Confirm password:</strong></label>\n              <input type=\"password\" [(ngModel)]=\"confirmedPsw\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                (click)=\"update({password:psw})\" [disabled]=\"!(psw?.length > 0 && psw == confirmedPsw)\">Update\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__("../../../../../src/app/_service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, sessionService) {
        this.userService = userService;
        this.sessionService = sessionService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)])),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])
        });
        this.profileForm.patchValue(this.sessionService.getUser());
    };
    ProfileComponent.prototype.update = function (updateUser) {
        var _this = this;
        this.userService.updateUser(this.sessionService.getUser().id, updateUser)
            .subscribe(function (user) {
            _this.sessionService.create(user);
            alert("Profile updated!");
        }, function (error) {
            console.log(error);
            alert(error.error.text);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_index__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__service_session_service__["a" /* SessionService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 col-md-offset-1\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\"><h3 class=\"panel-title\"><strong>Register</strong></h3></div>\n\n    <div class=\"panel-body\">\n      <form [formGroup]=\"registerForm\">\n        <div class=\"alert alert-danger\" *ngIf=\"!registerForm.hasError('clean') && registerForm.invalid\">\n          <li *ngIf=\"registerForm.controls['firstName'].dirty && registerForm.controls['firstName'].invalid\">\n            First name is required!\n          </li>\n          <li *ngIf=\"registerForm.controls['lastName'].dirty && registerForm.controls['lastName'].invalid\">\n            Last name is required!\n          </li>\n          <li *ngIf=\"registerForm.controls['username'].dirty && registerForm.controls['username'].invalid\">\n            Length of username should between 3 and 10!\n          </li>\n          <li *ngIf=\"registerForm.controls['email'].dirty && registerForm.controls['email'].hasError('email')\">\n            Email format wrong!\n          </li>\n          <li *ngIf=\"registerForm.controls['password'].dirty && registerForm.controls['password'].invalid\">\n            Password is required!\n          </li>\n          <li *ngIf=\"registerForm.controls['confirmedPassword'].dirty && registerForm.hasError('pswNotMatch')\">\n            Password and confirm password are different!\n          </li>\n          <li *ngIf=\"error\">\n            First name is required!\n          </li>\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\">\n          {{error}}\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>First Name:</strong></label>\n              <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" placeholder=\"First Name\">\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>Last Name:</strong></label>\n              <input type=\"text\" formControlName=\"lastName\" class=\"form-control \" placeholder=\"Last Name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Username:</strong></label>\n          <input type=\"text\" formControlName=\"username\" class=\"form-control \" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Email:</strong></label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control \" placeholder=\"Email Address\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>Password:</strong></label>\n              <input type=\"password\" formControlName=\"password\" class=\"form-control \" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"col-form-label\"><strong>Confirm password:</strong></label>\n              <input type=\"password\" formControlName=\"confirmedPassword\" class=\"form-control \"\n                     placeholder=\"Confirm Password\">\n            </div>\n          </div>\n        </div>\n        <button (click)=\"register(registerForm.value)\" class=\"btn btn-primary pull-right\" [disabled]=\"registerForm.invalid\">\n          Register\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_index__ = __webpack_require__("../../../../../src/app/_service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)])),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            confirmedPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
        }, this.formGroupValidator);
    };
    RegisterComponent.prototype.register = function (newUser) {
        var _this = this;
        delete newUser.confirmedPassword;
        this.userService.create(newUser)
            .subscribe(function (data) {
            _this.registerForm.reset();
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
            _this.error = error.error;
        });
    };
    RegisterComponent.prototype.formGroupValidator = function (formGroup) {
        var res = { pswNotMatch: false, clean: false };
        // check password equality
        if (formGroup.controls['password'].value != formGroup.controls['confirmedPassword'].value) {
            res.pswNotMatch = true;
        }
        // check if all inputs are dirty or not
        for (var key in formGroup.controls) {
            if (!formGroup.controls[key].dirty) {
                res.clean = true;
                break;
            }
        }
        return (!res.clean && !res.pswNotMatch) ? null : res;
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_index__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schema_list_schema_list_component__ = __webpack_require__("../../../../../src/app/schema-list/schema-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_schema_create_schema_component__ = __webpack_require__("../../../../../src/app/create-schema/create-schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schema_details_schema_details_component__ = __webpack_require__("../../../../../src/app/schema-details/schema-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__update_schema_update_schema_component__ = __webpack_require__("../../../../../src/app/update-schema/update-schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__formula_syntax_formula_syntax_component__ = __webpack_require__("../../../../../src/app/formula-syntax/formula-syntax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__ = __webpack_require__("../../../../../src/app/_service/AuthGuardService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'user/:id/schemas', component: __WEBPACK_IMPORTED_MODULE_6__schema_list_schema_list_component__["a" /* SchemaListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'schemas', component: __WEBPACK_IMPORTED_MODULE_6__schema_list_schema_list_component__["a" /* SchemaListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'schemas/new', component: __WEBPACK_IMPORTED_MODULE_7__create_schema_create_schema_component__["a" /* CreateSchemaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'schemas/:id/update', component: __WEBPACK_IMPORTED_MODULE_12__update_schema_update_schema_component__["a" /* UpdateSchemaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'users/:userid/schemas/:id', component: __WEBPACK_IMPORTED_MODULE_8__schema_details_schema_details_component__["a" /* SchemaDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_11__user_details_user_details_component__["a" /* UserDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__service_AuthGuardService__["a" /* AuthGuardService */]] },
    { path: 'syntax', component: __WEBPACK_IMPORTED_MODULE_14__formula_syntax_formula_syntax_component__["a" /* FormulaSyntaxComponent */] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */] },
    // otherwise redirect to not found
    { path: '**', redirectTo: 'notfound' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/schema-details/schema-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\n  .modal-xl {\n    width: 75%;\n    max-width:1200px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/schema-details/schema-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12 container\">\n  <a routerLink=\"/schemas\" class=\"text-left\" [routerLink]=\"['/user', userid, 'schemas']\">\n    Schema List </a>&nbsp;> {{schema?.name}}\n</div>\n<ng4-loading-spinner *ngIf=\"spinner\"></ng4-loading-spinner>\n<div class=\"row\">\n  <div class=\"col-md-7 col-sm-12\">\n    <h3><strong>{{schema?.name}}</strong></h3>\n    <div class=\"card\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n        <tr>\n          <th>Field Name</th>\n          <th>Type/Options</th>\n          <th>Blank(%)</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let field of schema?.fields\">\n          <td>\n            <div class=\"form-control text-primary\">{{field?.name}}</div>\n          </td>\n          <td *ngIf=\"field?.option == ''\">\n            <div class=\"form-control text-info\">{{field?.dataType?.name}}</div>\n          </td>\n          <td *ngIf=\"field?.option != ''\">\n            <div class=\"form-control text-info\">{{field?.option}}</div>\n          </td>\n          <td>\n            <div class=\"form-control text-info\">{{field?.blank}}</div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"container col-md-5\">\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">#Rows:</label>\n      <div class=\"col-md-8\">\n        <div class=\"form-control\">{{schema?.count}}</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">Format:</label>\n      <div class=\"col-md-8\">\n        <div class=\"form-control\">{{schema?.fileFormat}}</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-12\">\n        <button *ngIf=\"exist\" class=\"btn btn-outline-info col-sm-12 col-md-8 mb-1\"\n                data-toggle=\"modal\" data-target=\"#modal\" (click)=\"preview()\">Preview\n        </button>\n        <a *ngIf=\"exist\" class=\"btn btn-outline-success col-sm-12 col-md-8 mb-1\"\n           href='/mockdata/api/v1/schemas/{{schema?.id}}/file'>\n          Download\n        </a>\n        <button *ngIf=\"!exist\" class=\"btn btn-outline-info col-sm-12 col-md-8\"\n                (click)=\"generate()\">Generate\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-xl\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-primary\" id=\"modalLabel\">\n          Preview (Up to 100)\n        </h5>\n      </div>\n      <div class=\"modal-body container\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#table\" role=\"tab\">Table</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#json\" role=\"tab\">Json</a>\n          </li>\n        </ul>\n        <div class=\"tab-content\">\n          <br/>\n          <div class=\"tab-pane fade show active\" id=\"table\" role=\"tabpanel\">\n            <ngx-datatable\n              #table\n              class=\"material\"\n              [loadingIndicator]=\"loadingIndicator\"\n              [rows]=\"rows\"\n              [columns]=\"headers\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"'auto'\"\n              [limit]=\"5\"\n              [scrollbarH]=\"true\">\n            </ngx-datatable>\n          </div>\n          <div class=\"tab-pane fade\" id=\"json\" role=\"tabpanel\" style=\"overflow: auto;height: 310px; width: inherit;\">\n            <pre *ngFor=\"let row of rows\" [innerHTML]=\"row | json\"></pre>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/schema-details/schema-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_schema_service__ = __webpack_require__("../../../../../src/app/_service/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchemaDetailsComponent = (function () {
    function SchemaDetailsComponent(route, schemaService, sessionService, spinnerService) {
        var _this = this;
        this.route = route;
        this.schemaService = schemaService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.spinner = false;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.userid = params['userid'];
            _this.schemaService.getSchemaById(id).subscribe(function (schema) {
                _this.schema = schema;
                _this.checkIfGenerate();
                _this.spinner = true;
            }, function (error) { return console.log(error); });
        });
    }
    SchemaDetailsComponent.prototype.ngOnInit = function () {
    };
    SchemaDetailsComponent.prototype.generate = function () {
        var _this = this;
        if (this.sessionService.getUser().id != this.userid) {
            alert("You can't generate data since you don't own this schema!");
        }
        else {
            this.spinnerService.show();
            this.schemaService.generateMockData(this.schema.id).subscribe(function (data) {
                _this.spinnerService.hide();
                _this.exist = true;
                alert("Data generation is done!");
            }, function (error) {
                _this.spinnerService.hide();
                alert("Data generation fails!");
                console.log(error);
            });
        }
    };
    SchemaDetailsComponent.prototype.checkIfGenerate = function () {
        var _this = this;
        this.schemaService.checkIfGenerate(this.schema.id).subscribe(function (res) { return _this.exist = res; }, function (error) { return console.log(error); });
    };
    SchemaDetailsComponent.prototype.preview = function () {
        var _this = this;
        if (!this.rows) {
            this.schemaService.previewBySchemaId(this.schema.id).subscribe(function (mockData) {
                _this.rows = mockData.data;
                _this.buildHeaders();
            }, function (error) { return console.log(error); });
        }
    };
    // build headers for table base on mock data fields name
    SchemaDetailsComponent.prototype.buildHeaders = function () {
        var headers = [];
        for (var name_1 in this.rows[0]) {
            headers.push({ prop: name_1 });
        }
        this.headers = headers;
    };
    SchemaDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schema-details',
            template: __webpack_require__("../../../../../src/app/schema-details/schema-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/schema-details/schema-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_schema_service__["a" /* SchemaService */], __WEBPACK_IMPORTED_MODULE_4__service_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], SchemaDetailsComponent);
    return SchemaDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/schema-list/schema-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.fa {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/schema-list/schema-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3><strong>Schemas</strong></h3>\n<a class=\"btn btn-outline-primary\" routerLink=\"/schemas/new\" *ngIf=\"sessionService.hasRole('user')\">Create a Schema</a>\n<table class=\"table table-responsive\" *ngIf=\"schemas?.length != 0\">\n  <thead>\n  <tr>\n    <th class=\"col-md-8\">Schema</th>\n    <th class=\"col-md-2\">&nbsp;</th>\n    <th class=\"col-md-2\">&nbsp;</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let schema of schemas; let i = index;\">\n    <td><span><a [routerLink]=\"['/users',id,'schemas', schema?.id]\">{{schema?.name}}</a></span>\n      <div>\n        <span class=\"mr-3 text-secondary\" *ngFor=\"let field of schema?.fields\">{{field?.name}}</span>\n      </div>\n    </td>\n    <td>\n      <i class=\"fa fa-pencil mt-1\" [routerLink]=\"['/schemas', schema?.id, 'update']\"></i>\n    </td>\n    <td>\n      <i class=\"fa fa-times mt-1\" (click)=\"deleteSchema(i)\"></i>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<div class=\"alert alert-info\" *ngIf=\"schemas?.length == 0\">Not schema found from this user!</div>\n"

/***/ }),

/***/ "../../../../../src/app/schema-list/schema-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_schema_service__ = __webpack_require__("../../../../../src/app/_service/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchemaListComponent = (function () {
    function SchemaListComponent(route, schemaService, sessionService) {
        var _this = this;
        this.route = route;
        this.schemaService = schemaService;
        this.sessionService = sessionService;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (!_this.id) {
                _this.id = sessionService.getUser().id;
            }
            schemaService.getSchemasByUserId(_this.id).subscribe(function (schemas) { return _this.schemas = schemas; });
        });
    }
    SchemaListComponent.prototype.ngOnInit = function () {
    };
    SchemaListComponent.prototype.deleteSchema = function (index) {
        if (this.sessionService.getUser().id != this.schemas[index].user) {
            alert("You can't delete the schema since you don't own this schema!");
        }
        else {
            if (confirm("Are you sure to delete this schema? Related mock data will be removed!")) {
                this.schemaService.remove(this.schemas[index].id)
                    .subscribe(function (msg) { return console.log(msg); }, function (error) { return console.log(error); });
                this.schemas.splice(index, 1);
            }
        }
    };
    SchemaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schema-list',
            template: __webpack_require__("../../../../../src/app/schema-list/schema-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/schema-list/schema-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__service_schema_service__["a" /* SchemaService */], __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]])
    ], SchemaListComponent);
    return SchemaListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-schema/update-schema.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".type-input {\n  cursor: pointer;\n  background-color: white;\n}\n\ni.fa {\n  margin-top: 8px;\n  cursor: pointer;\n}\n\ni.fa-pencil {\n  color: #006b80;\n}\n\n.type {\n  float: left;\n  height: 96px;\n  width: 210px;\n  line-height: 20px;\n  padding: 8px 10px;\n  margin: 0 8px 8px 0;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.type-name {\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n  margin-bottom: 2px;\n}\n\n.type:hover{\n  background-color: #f0f0f0;\n}\n\n.type-description {\n  color: #606060;\n  font-size: 12px;\n}\n\n.tab-content{\n  overflow: auto;\n  height: 300px;\n  width: inherit;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-schema/update-schema.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"schema\" [formGroup]=\"updateSchemaForm\">\n  <div class=\"col-md-7 col-sm-12\">\n    <h3><strong>Update Schema</strong></h3>\n    <div class=\"alert-danger\" *ngIf=\"schemaError\">{{schemaError}}</div>\n    <div class=\"card\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n        <tr>\n          <th>Field Name</th>\n          <th>Type</th>\n          <th>Blank(%)</th>\n          <th>Options</th>\n        </tr>\n        </thead>\n        <tbody formArrayName=\"fields\">\n        <tr *ngFor=\"let field of updateSchemaForm.controls.fields.controls; let i = index\" [formGroupName]=\"i\">\n          <td>\n            <input class=\"form-control\" formControlName=\"name\">\n          </td>\n          <td>\n            <input class=\"form-control type-input\" readonly\n                   data-toggle=\"modal\" data-target=\"#modal\"\n                   [value]=field.value.dataType.name (click)=\"selectedIndex = i\">\n          </td>\n          <td>\n            <input class=\"form-control\" formControlName=\"blank\" style=\"width: 60px\">\n          </td>\n          <td>\n            <i class=\"fa fa-pencil ml-4\"  data-toggle=\"modal\" data-target=\"#optionModal\" (click)=\"fillTextfield(i)\"></i>\n          </td>\n          <td>\n            <i class=\"fa fa-times\" (click)=\"removeField(i)\"></i>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"btn btn-outline-dark col-md-5 col-sm-12\" (click)=\"addField()\">Add another field</button>\n  </div>\n\n  <div class=\"container col-md-5\">\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">#Rows:</label>\n      <div class=\"col-md-8\">\n        <input class=\"form-control\" placeholder=\"number of rows\" formControlName=\"count\">\n        <div class=\"alert alert-danger\"\n             *ngIf=\"updateSchemaForm.controls['count'].dirty && updateSchemaForm.controls['count'].invalid\">\n          Rows should be a positive integer!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">Format:</label>\n      <div class=\"col-md-8\">\n        <select class=\"custom-select form-control\" formControlName=\"fileFormat\">\n          <option selected>JSON</option>\n          <option>CSV</option>\n          <option>XML</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-md-4 col-form-label\">Schema Name:</label>\n      <div class=\"col-md-8\">\n        <input class=\"form-control\" placeholder=\"schema name\" formControlName=\"name\">\n        <div class=\"alert alert-danger\"\n             *ngIf=\"updateSchemaForm.controls['name'].dirty && updateSchemaForm.controls['name'].invalid\">\n          Schema name is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-outline-info col-sm-12 col-md-8\"\n                (click)=\"updateSchema(updateSchemaForm.value)\"\n                [disabled]=\"updateSchemaForm.invalid\">Update Schema\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modalLabel\">\n          Choose a Type\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <ul class=\"nav nav-pills\">\n          <li class=\"nav-item\" *ngFor=\"let key of category; let i = index\">\n            <a class=\"nav-link text-uppercase\" [ngClass]=\"{active: i==0}\" data-toggle=\"tab\" href=\"#{{key}}\" role=\"tab\"\n               aria-controls=key aria-selected=\"true\">{{key}}</a>\n          </li>\n        </ul>\n        <div class=\"tab-content container\">\n          <div class=\"tab-pane fade show\" [ngClass]=\"{active: i==0}\" id={{key}}\n               *ngFor=\"let key of category; let i = index\">\n            <div class=\"type\" *ngFor=\"let type of dataTypes[key]\" (click)=\"selectType(type)\"\n                 data-dismiss=\"modal\">\n              <div class=\"type-name\">{{type.name}}</div>\n              <div class=\"type-description\">{{type.description}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"optionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">\n          Formula\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <div style=\"font-size: 95%\">\n          <p>Alter the value of this field using <a routerLink=\"/syntax\" target=\"_blank\">Mockery formula syntax</a>. Use this to refer to the value of this\n            schema.</p>\n          Example: <br>\n          <p><code>this.firstname</code> => refer to the value of firstname which is defined in schema</p>\n          <p><code>faker.name.firstName()</code> => use the <a href=\"https://github.com/Marak/faker.js\" target=\"_blank\">faker</a>\n            generator to generate random first name</p>\n          <p><code>chance.first()</code> => use the <a href=\"https://github.com/chancejs/chancejs\" target=\"_blank\">chance</a>\n            generator to generate random first name</p>\n          <p><code>casual.first_name</code> => use the <a href=\"https://github.com/boo1ean/casual\" target=\"_blank\">casual</a>\n            generator to generate random first name</p>\n        </div>\n        <div class=\"container\">\n          <ace-editor [theme]=\"'tomorrow'\" style=\"min-height: 100px; width:100%; overflow: auto;\" [mode]=\"'javascript'\"\n                      class=\"form-control\" columns=\"60\" placeholder=\"example: upper(this)\" rows=\"4\" spellcheck=\"false\"\n                      [(ngModel)]=\"textfield\">\n          </ace-editor>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"applyOption()\">Apply</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/update-schema/update-schema.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSchemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_type_service__ = __webpack_require__("../../../../../src/app/_service/data.type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_schema_service__ = __webpack_require__("../../../../../src/app/_service/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brace__ = __webpack_require__("../../../../brace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_brace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brace_theme_tomorrow__ = __webpack_require__("../../../../brace/theme/tomorrow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brace_theme_tomorrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_brace_theme_tomorrow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_field__ = __webpack_require__("../../../../../src/app/_models/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UpdateSchemaComponent = (function () {
    function UpdateSchemaComponent(fb, dataTypeService, sessionService, schemaService, route, router) {
        var _this = this;
        this.fb = fb;
        this.dataTypeService = dataTypeService;
        this.sessionService = sessionService;
        this.schemaService = schemaService;
        this.route = route;
        this.router = router;
        this.dataTypes = {};
        this.textfield = '';
        this.category = ["address", "company", "date", "finance", "internet", "name", "phone", "random", "system"];
        this.dataTypeService.getAllDataTypes().subscribe(function (dataTypes) { return _this.categorizeTypes(dataTypes); });
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.schemaService.getSchemaById(id).subscribe(function (schema) {
                _this.schema = schema;
                _this.updateSchemaForm = _this.buildForm();
            }, function (error) { return console.log(error); });
        });
    }
    UpdateSchemaComponent.prototype.ngOnInit = function () {
    };
    UpdateSchemaComponent.prototype.categorizeTypes = function (dataTypes) {
        for (var index in this.category) {
            var kind = this.category[index];
            this.dataTypes[kind] = dataTypes.filter(function (type) { return type.name.startsWith(kind); }).map(function (type) {
                type.name = type.name.substring(type.name.indexOf('.') + 1).replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
                return type;
            });
        }
    };
    UpdateSchemaComponent.prototype.buildField = function () {
        var fields = this.updateSchemaForm.controls['fields'];
        var lastOne = fields.controls[fields.length - 1];
        return this.fb.group(lastOne.controls);
    };
    UpdateSchemaComponent.prototype.buildFields = function () {
        var _this = this;
        var fields = this.schema.fields.map(function (field) { return new __WEBPACK_IMPORTED_MODULE_7__models_field__["a" /* Field */](field.name, field.dataType.name, field.dataType._id, field.option, field.blank, _this.fb).buildField(); });
        return this.fb.array(fields);
    };
    UpdateSchemaComponent.prototype.buildForm = function () {
        return this.fb.group({
            name: [this.schema.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            count: [this.schema.count, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[1-9]+[0-9]*$')]],
            fileFormat: [this.schema.fileFormat, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            fields: this.buildFields()
        });
    };
    UpdateSchemaComponent.prototype.removeField = function (index) {
        var fields = this.updateSchemaForm.controls['fields'];
        if (fields.length == 1) {
            alert("The schema should have one field at least!");
        }
        else {
            fields.removeAt(index);
        }
    };
    UpdateSchemaComponent.prototype.addField = function () {
        var fields = this.updateSchemaForm.controls['fields'];
        var lastField = this.buildField();
        var newField = new __WEBPACK_IMPORTED_MODULE_7__models_field__["a" /* Field */]("New" + lastField.value.name, lastField.value.dataType.name, lastField.value.dataType._id, '', 0, this.fb).buildField();
        fields.push(newField);
    };
    UpdateSchemaComponent.prototype.applyOption = function () {
        var fields = this.updateSchemaForm.controls['fields'];
        fields.controls[this.selectedIndex].patchValue({ option: this.textfield });
        fields.controls[this.selectedIndex].patchValue({
            dataType: {
                _id: "5a2b5ca6bbeb612e307415f7",
                name: "self-defined"
            }
        });
    };
    UpdateSchemaComponent.prototype.selectType = function (type) {
        var fields = this.updateSchemaForm.controls['fields'];
        fields.controls[this.selectedIndex].patchValue({ dataType: type });
    };
    UpdateSchemaComponent.prototype.fillTextfield = function (index) {
        this.selectedIndex = index;
        var fields = this.updateSchemaForm.controls['fields'];
        this.textfield = fields.controls[index].value.option;
    };
    UpdateSchemaComponent.prototype.updateSchema = function (updateSchema) {
        var _this = this;
        // Check if same name occurs in different column
        if (!this.checkFieldName(updateSchema.fields))
            return;
        if (this.sessionService.getUser().id != this.schema.user) {
            alert("You can't update the schema since you don't own this schema!");
        }
        else {
            if (confirm("Are you sure to change it? Mock data related with this old schema will be removed!")) {
                updateSchema.id = this.schema.id;
                this.schemaService.update(updateSchema).subscribe(function (schema) { return _this.router.navigate(['/users', _this.sessionService.getUser().id, 'schemas', _this.schema.id]); }, function (error) { return _this.schemaError = error.error.text; });
            }
        }
    };
    UpdateSchemaComponent.prototype.checkFieldName = function (fields) {
        var set = new Set();
        for (var i in fields) {
            if (set.has(fields[i].name)) {
                this.schemaError = "Different column cannot have the same name!";
                return false;
            }
            set.add(fields[i].name);
        }
        return true;
    };
    UpdateSchemaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-schema',
            template: __webpack_require__("../../../../../src/app/update-schema/update-schema.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-schema/update-schema.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__service_data_type_service__["a" /* DataTypeService */],
            __WEBPACK_IMPORTED_MODULE_8__service_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__service_schema_service__["a" /* SchemaService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], UpdateSchemaComponent);
    return UpdateSchemaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12 container\">\n  <a routerLink=\"/users\" class=\"text-left\">Users </a>&nbsp;> {{user?.username}}\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7 col-sm-12\">\n    <h3><strong>{{user?.username}}</strong></h3>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>First Name:</strong></label>\n          <input type=\"text\" value=\"{{user?.firstName}}\" class=\"form-control text-info\" readonly>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Last Name:</strong></label>\n          <input type=\"text\" value=\"{{user?.lastName}}\" class=\"form-control text-info\" readonly>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\"><strong>Username:</strong></label>\n      <input type=\"text\" value=\"{{user?.username}}\" class=\"form-control text-info\" readonly>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-form-label\"><strong>Email:</strong></label>\n      <input type=\"email\" value=\"{{user?.email}}\" class=\"form-control text-info\" readonly>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Role:</strong></label>\n          <div class=\"custom-controls-stacked d-block my-3\">\n            <label class=\"custom-control custom-radio\">\n              <input name=\"role\" type=\"radio\" class=\"custom-control-input\" (click)=\"changeRole('admin')\"\n                     [disabled]=\"user.id == sessionService.getUser().id\" [checked]=\"user?.role === 'admin'\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Admin</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n              <input name=\"role\" type=\"radio\" class=\"custom-control-input\" (click)=\"changeRole('user')\"\n                     [disabled]=\"user.id == sessionService.getUser().id\" [checked]=\"user?.role === 'user'\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">User</span>\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"col-form-label\"><strong>Status:</strong></label>\n          <div class=\"custom-controls-stacked d-block my-3\">\n            <label class=\"custom-control custom-radio\">\n              <input name=\"status\" type=\"radio\" class=\"custom-control-input\" (click)=\"changeStatus('true')\"\n                     [disabled]=\"user.id == sessionService.getUser().id\" [checked]=\"user?.status\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">True</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n              <input name=\"status\" type=\"radio\" class=\"custom-control-input\" (click)=\"changeStatus('false')\"\n                     [disabled]=\"user.id == sessionService.getUser().id\" [checked]=\"!user?.status\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">False</span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" *ngIf=\"user?.role.toUpperCase() == 'USER'\" class=\"btn btn-outline-primary\"\n            [routerLink]=\"['/user', user?.id, 'schemas']\">\n      {{user?.username}}' s schemas\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/_service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_session_service__ = __webpack_require__("../../../../../src/app/_service/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = (function () {
    function UserDetailsComponent(route, userService, sessionService) {
        this.route = route;
        this.userService = userService;
        this.sessionService = sessionService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.userService.getUserById(id).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
        });
    };
    UserDetailsComponent.prototype.changeStatus = function (status) {
        var _this = this;
        if (this.user.id == this.sessionService.getUser().id) {
            alert("You can't change your own status!");
        }
        else {
            this.userService.updateUserStatus(this.user.id, status).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
        }
    };
    UserDetailsComponent.prototype.changeRole = function (role) {
        var _this = this;
        if (this.user.id == this.sessionService.getUser().id) {
            alert("You can't change your own role!");
        }
        else {
            this.userService.updateUserRole(this.user.id, role).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
        }
    };
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__("../../../../../src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__service_session_service__["a" /* SessionService */]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n  font-size: 14px;\n  display: block;\n  background: transparent;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #5264AE;\n  padding: 8px;\n  margin: 15px auto;\n  width: 40%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <h3><strong>Users</strong></h3>\n  <input placeholder='Type to filter the username/first name/last name/email'\n         (keyup)='updateFilter($event)' type=\"text\"/>\n  <ngx-datatable\n    #table\n    class=\"material\"\n    [rows]=\"users\"\n    [columns]=\"[{name:'Username'},{name:'First Name', prop:'firstName'},{name:'Last Name', prop:'lastName'}, {name: 'Email'}, {name:'Role'}, {name:'Status'}]\"\n    [columnMode]=\"'force'\"\n    [headerHeight]=\"50\"\n    [footerHeight]=\"50\"\n    [rowHeight]=\"45\"\n    [limit]=\"6\"\n    (activate)=\"selectUser($event)\">\n  </ngx-datatable>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/_service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        userService.getAllUsers().subscribe(function (users) {
            _this.users = users;
            _this.temp = users;
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.selectUser = function (event) {
        if (event.type == 'click') {
            var user = event.row;
            this.router.navigate(['/users', user.id]);
        }
    };
    UsersComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (user) {
            return user.username.toLowerCase().indexOf(val) !== -1 || user.firstName.toLowerCase().indexOf(val) !== -1 ||
                user.lastName.toLowerCase().indexOf(val) !== -1 || user.email.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.users = temp;
        this.table.offset = 0;
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map