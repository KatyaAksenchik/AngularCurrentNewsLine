"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
// import { routing, appRoutingProviders } from './app-routing.module';
var app_component_1 = require("./app.component");
var editNews_component_1 = require("./editNews/editNews.component");
var editorPage_component_1 = require("./editorPage/editorPage.component");
var registration_component_1 = require("./registration/registration.component");
var article_service_1 = require("./shared/article.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            editNews_component_1.EditNewsComponent,
            registration_component_1.RegistrationComponent,
            editorPage_component_1.EditorPageComponent
        ],
        providers: [
            article_service_1.ArticleService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map