webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  background-color: #323b5f;\n  color: white;\n  padding: 10px 15px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.created-by {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  position: fixed;\n  bottom: 20px;\n  color: white;\n  margin-bottom: 0px;\n  right: 20px;\n  z-index: 1;\n}\n\n.created-by a {\n  color: white;\n  font-weight: bold;\n  transition: all 0.2s;\n}\n\n.created-by .photo-credit {\n  margin-bottom: 10px;\n}\n\n.created-by a:hover {\n  color: #303030;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n\n.generator-container {\n  height: 100vh;\n  padding-top: 10vh;\n}\n\n.generate-button {\n  color: white;\n  background: red !important;\n  border: 2px solid #323b5f;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container generator-container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 col-sm-offset-2\">\n      <h1 class=\"title\">Vancouver Ipsum</h1>\n      <app-generator></app-generator>\n    </div>\n  </div>\n  <div class=\"created-by\">\n    <p>Created by <a href=\"https://www.linkedin.com/in/joshcoles/\">Josh Coles</a>.</p>\n    <p>Photo by <a href=\"https://unsplash.com/@gabrielssantiago?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\" target=\"_blank\" rel=\"noopener noreferrer\">Gabriel Santiago</a>.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generator_generator_component__ = __webpack_require__("../../../../../src/app/generator/generator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__generator_generator_component__["a" /* GeneratorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/generator/generator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".instructions {\n  background-color: #9aa847;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  padding: 15px;\n}\n\n.vancouver-words {\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 20px;\n  border-radius: 3px;\n  margin: 30px 0 100px 0;\n  position: relative;\n  z-index: 2;\n}\n\n.vancouver-words p {\n  padding-bottom: 15px;\n  margin-bottom: 0px;\n}\n\n.options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n}\n\ninput[type=\"number\"] {\n  border: none;\n  border-radius: 3px;\n  color: #323b5f;\n  min-width: 40px;\n  max-width: 70px;\n  height: 30px;\n  font-size: 20px;\n  padding-left: 12px;\n  margin-right: 20px;\n}\n\nbutton.generate-button {\n  border: 2px solid transparent;\n  border-radius: 3px;\n  background-color: #323b5f;\n  color: white;\n  padding: 5px 10px;\n  transition: all 0.2s;\n}\n\nbutton.generate-button:hover {\n  background-color: transparent;\n  border-color: #323b5f;\n  color: white;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/generator/generator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"word-generator\">\n  <div class=\"instructions\">\n    <p>{{instructions}}</p>\n      <div class=\"options\">\n        <input\n        (input)=\"onUpdateParagraphNumber($event)\"\n        type=\"number\"\n        name=\"input\"\n        value=\"1\"\n        required>\n        <button\n          class=\"generate-button\"\n          (click)=\"onGenerate()\"\n          >\n          {{generateText}}\n        </button>\n      </div>\n  </div>\n\n</div>\n<div *ngIf=\"displayWords\" class=\"vancouver-words\">\n  <div *ngFor=\"let paragraph of paragraphs\">\n    <p>{{paragraph}}</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/generator/generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneratorComponent = (function () {
    function GeneratorComponent() {
        this.vancouverWords = [
            { word: 'seawall' },
            { word: 'mountains' },
            { word: 'stanley park' },
            { word: 'lulu lemon' },
            { word: 'main street' },
            { word: 'granville' },
            { word: 'rent' },
            { word: 'ramen' },
            { word: 'canucks' },
            { word: 'vancouver' },
            { word: 'government' },
            { word: 'expensive' },
            { word: 'property' },
            { word: 'rain' },
            { word: 'cambie' },
            { word: 'translink' },
            { word: 'skytrain' },
            { word: 'false creek' },
            { word: 'broadway' },
            { word: 'whitecaps' },
            { word: "arby's" },
            { word: 'lions' },
            { word: 'gastown' },
            { word: 'commercial' },
            { word: 'heading up to whistler' },
            { word: 'vancouverites' },
            { word: 'developers' },
            { word: 'I just need to be close to the mountains' },
            { word: 'west coast best coast' },
            { word: 'namaste' },
            { word: 'sedins' },
            { word: 'new brunch spot on main street' },
        ];
        this.displayWords = false;
        // Each paragraph is generated uniquely and pushed into 'paragraphs' array
        this.paragraph = '';
        this.paragraphs = [];
        // Sets default paragraph number. This changes any time
        // the user changes the number, and is not tied to the
        // actual 'submit';
        this.paragraphNumber = 1;
        this.instructions = 'How many paragraphs of vancouver ipsum do you want?';
        this.generateText = 'Generate';
    }
    // TODO error handling for if user types in a letter
    // input comes in as string, so this turns it to number
    GeneratorComponent.prototype.onUpdateParagraphNumber = function (event) {
        this.paragraphNumber = parseInt(event.srcElement.value);
    };
    // TODO remove duplicate words from same paragarph
    // This function generates a new paragraph for each
    // number in 'paragraphNumber', pushes it into 'paragraphs',
    // and displays it
    GeneratorComponent.prototype.onGenerate = function () {
        var newParagraph = "";
        this.displayWords = true;
        // Checks if it's the last loop. If not, add a space
        // after word
        for (var i = 0; i < this.paragraphNumber; i++) {
            for (var i_1 = 0; i_1 < this.vancouverWords.length; i_1++) {
                var index = Math.floor(this.vancouverWords.length * Math.random());
                if (i_1 != this.vancouverWords.length - 1) {
                    newParagraph += this.vancouverWords[index].word + " ";
                }
                else {
                    newParagraph += this.vancouverWords[index].word;
                }
            }
            // Capitalizes first letter + add period at end
            newParagraph += ".";
            newParagraph = newParagraph.charAt(0).toUpperCase() + newParagraph.slice(1);
            this.paragraphs.push(newParagraph);
        }
    };
    GeneratorComponent.prototype.ngOnInit = function () {
    };
    return GeneratorComponent;
}());
GeneratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-generator',
        template: __webpack_require__("../../../../../src/app/generator/generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/generator/generator.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GeneratorComponent);

//# sourceMappingURL=generator.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map