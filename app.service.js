"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const dotenv = require("dotenv");
dotenv.config();
let AppService = class AppService {
    getHello() {
        const rawLinks = process.env.ZEALY_LINKS;
        let links;
        try {
            links = JSON.parse(rawLinks);
        }
        catch (err) {
            return `An error occured while parsing the links`;
        }
        return `${links.map((c) => c.fileName).toString()}`;
    }
    buildFilePath(fileName) {
        return (0, path_1.join)(__dirname, "assets", fileName);
    }
    async getFileContent(fileName) {
        const filePath = this.buildFilePath(fileName);
        console.log("filepath", filePath)
        return fs_1.promises.readFile(filePath, "utf-8");
    }
    async getFile(fileName) {
        const fileContent = await this.getFileContent(fileName);
        return fileContent;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map