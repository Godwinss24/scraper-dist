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
exports.ScrapeService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const crypto = require("crypto");
let ScrapeService = class ScrapeService {
    configService;
    botToken;
    baseUrl;
    constructor(configService) {
        this.configService = configService;
        this.botToken = this.configService.get("TELEGRAM_BOT_TOKEN") || "";
        this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
    }
    create(createScrapeDto) {
        return "This action adds a new scrape";
    }
    findAll() {
        return `This action returns all scrape`;
    }
    findOne(id) {
        return `This action returns a #${id} scrape`;
    }
    update(id, updateScrapeDto) {
        return `This action updates a #${id} scrape`;
    }
    remove(id) {
        return `This action removes a #${id} scrape`;
    }
    buildFilePath(name) {
        return (0, path_1.join)(__dirname, "../assets", name);
    }
    cookieData() {
        return "_fbp=fb.1.1756223134620.86183643608396277; cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; intercom-id-nketzd4e=a1f2aea7-a286-48f7-92d3-bb1fe36170d5; intercom-device-id-nketzd4e=719f54e0-9db5-4435-a590-366d652addc2; _tt_enable_cookie=1; _ttp=01K3KHR0KA9XVGGDBQN1EFNQ9A_.tt.1; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWVlZWE4ZS0wMmUxLTQ3ZDEtYWM1OC02MmRmMDc5Njc0NDgiLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJnb2R3aW5zZ29kd2luOTczQGdtYWlsLmNvbSIsImxhc3RFbWFpbENoZWNrIjoxNzU2MjI0OTM3MjQ1LCJpYXQiOjE3NTYyMjQ5MzcsImV4cCI6MTc1ODgxNjkzN30.FyUMgOjWzbfTLerf1ZP-jYUqNRP0fPKfZE09phCF4Ug; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWVlZWE4ZS0wMmUxLTQ3ZDEtYWM1OC02MmRmMDc5Njc0NDgiLCJpYXQiOjE3NTYyMjQ5MzcsImV4cCI6MTc1ODgxNjkzN30.oh_VLXyJswcb_YrlW6hB5j5HJNllfnOk59x2866fiYE; subdomain=root; connect.sid=s%3AjiuPRuxdAv59jJJu5bHS-_8QSfbylEJv.lqnvCldiU%2FFgIg8R2w382ht9mV9EA9mE9PZ2dp%2FpALw; referrer-url=https://zealy.io/my-communities; intercom-session-nketzd4e=djJsS1V6Q1RsQ3Faa0NyTStvMFJVVFFBTU1YMk1NdHlQbjBQRHNlU1pMK1hEZjA4QTJiYkp2Y1FHVW9teENWeXE2c3J2WW9ZZXcramIrY1dOTWhIdXoxd0JETlc2alk0dGtDN0xkeUowU1U9LS1EUGxsamZvenFueUFmTzNFWnNpcDB3PT0=--8da34ef8740ed5a8f1c942293c54b55cd1c5a6b4; ttcsid_CO6OII3C77UAL9O5M6RG=1756235149046::A1uUndtCQYaLkCb5MRuR.2.1756235166917; ttcsid=1756235149047::Max4tg-qxAfYSaDISL51.2.1756235166917; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Aecf6f429-ec3d-4dfd-a5ae-3986cc7e53b9%22%2C%22%24device_id%22%3A%22ecf6f429-ec3d-4dfd-a5ae-3986cc7e53b9%22%2C%22%24initial_referrer%22%3A%22https%3A%2F%2Fzealy.io%2Fmy-communities%22%2C%22%24initial_referring_domain%22%3A%22zealy.io%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22https%3A%2F%2Fzealy.io%2Fmy-communities%22%2C%22%24initial_referring_domain%22%3A%22zealy.io%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D";
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
    }
    fetchUrl(url, requestOptions) {
        return fetch(url, requestOptions);
    }
    hashString(data) {
        return crypto.createHash("sha256").update(data).digest("hex");
    }
    buildRequestOptions(cookieData) {
        return {
            method: "GET",
            headers: {
                accept: "application/json",
                cookie: cookieData,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
                referer: "https://zealy.io/",
                origin: "https://zealy.io",
            },
            signal: AbortSignal.timeout(20000),
        };
    }
    async getFileContent(filePath) {
        const fileContent = await fs_1.promises.readFile(filePath, "utf-8");
        return fileContent;
    }
    async editFileContent(filePath, data) {
        await fs_1.promises.writeFile(filePath, data);
    }
    async getZealyData(link, fileName) {
        try {
            const cookieData = this.cookieData();
            const filePath = this.buildFilePath(fileName);
            const requestOptions = this.buildRequestOptions(cookieData);
            const response = await this.fetchUrl(link, requestOptions);
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            const res = await response.json();
            const hashedResponse = this.hashString(JSON.stringify(res));
            const fileContent = await this.getFileContent(filePath);
            if (fileContent === hashedResponse) {
                console.log('Same content', link);
            }
            else {
                await this.onLeaderboardChange(fileName);
                this.editFileContent(filePath, hashedResponse);
                console.log('different content');
            }
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
    async onLeaderboardChange(name) {
        console.log("Running your custom logic...");
        await this.sendMessage(5669972257, `Task Added`);
        await this.sendMessage(5727225410, `Task Added`);
        await this.sendMessage(7691672328, `Task Added`);
    }
    async scrapeData() {
        const rawLinks = this.configService.get("ZEALY_LINKS");
        if (!rawLinks) {
            console.error("ZEALY_LINKS not defined in .env");
            return;
        }
        let links;
        try {
            links = JSON.parse(rawLinks);
        }
        catch (err) {
            console.error("Invalid ZEALY_LINKS JSON in .env", err);
            return;
        }
        for (const event of links) {
            if (!event.link || !event.fileName) {
                console.error("Invalid entry in ZEALY_LINKS:", event);
                continue;
            }
            await this.getZealyData(event.link, event.fileName);
        }
    }
};
exports.ScrapeService = ScrapeService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_SECOND),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScrapeService.prototype, "scrapeData", null);
exports.ScrapeService = ScrapeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ScrapeService);
//# sourceMappingURL=scrape.service.js.map