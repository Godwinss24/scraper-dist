"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const dotenv = require("dotenv");
const config_1 = require("@nestjs/config");
dotenv.config();
let AppService = class AppService {
    configService;
    botToken;
    baseUrl;
    constructor(configService) {
        this.configService = configService;
        this.botToken = this.configService.get("TELEGRAM_BOT_TOKEN") || "";
        this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
    }
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
        return fs_1.promises.readFile(filePath, "utf-8");
    }
    telegramIds = [];
    async onModuleInit() {
        this.telegramIds = process.env.TELEGRAM_IDS?.split(",") || [];
    }
    async getFile(fileName) {
        const fileContent = await this.getFileContent(fileName);
        return fileContent;
    }
    async sendMessage(chatId, text) {
        await fetch(`${this.baseUrl}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
            }),
        });
        console.log(`message sent to ${chatId}`);
    }
    async testing() {
        for (const id of this.telegramIds) {
            console.log(id);
            await this.sendMessage(id, `Testing...`);
        }
        return "messages sent";
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppService);
//# sourceMappingURL=app.service.js.map