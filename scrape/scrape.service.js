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
const get_quest_1 = require("./quest/get-quest");
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
    getQuestDetails(eventName, questId) {
        const cookie = this.cookieData();
        const questDetailsService = new get_quest_1.QuestDetails(eventName, questId, cookie);
        return questDetailsService.getQuestDetails();
    }
    buildFilePath(name) {
        return (0, path_1.join)(__dirname, "../assets", name);
    }
    cookieData() {
        return "cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; intercom-id-nketzd4e=272128c4-dbde-4692-b486-78e583258151; intercom-device-id-nketzd4e=cd97a6b3-32a2-41f7-b70f-3681cf4c4662; _fbp=fb.1.1756936701255.212593386515633543; _tt_enable_cookie=1; _ttp=01K48SHHRAAFNM2WS65XHV80XD_.tt.1; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4OWNkNTYxNS1hYTM2LTQ2NDAtYTI4OC05MzdmZWY0MWMyZGUiLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJkaXNjb0Bnb2R3aW5zLndvcmsuZ2QiLCJsYXN0RW1haWxDaGVjayI6MTc1NjkzNjg2MTE4MCwiaWF0IjoxNzU2OTM2ODYxLCJleHAiOjE3NTk1Mjg4NjF9.S-A1GG5laBW2-lu18gmYDN54GcTYSXeQR9j5Cf94V2Q; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4OWNkNTYxNS1hYTM2LTQ2NDAtYTI4OC05MzdmZWY0MWMyZGUiLCJpYXQiOjE3NTY5MzY4NjEsImV4cCI6MTc1OTUyODg2MX0.Hhs7oiyFL6pVfS01p6QHc0SguryhLAxx4L_BhT7KqD0; ttcsid=1758854531548::saqOlgufhFqgzTL6G3_Q.5.1758854821415.0; ttcsid_CO6OII3C77UAL9O5M6RG=1758854531546::grugUcN4TmX7cqoRuG7W.5.1758854822680.0; referrer-url=https://zealy.io/cw/clapp/questboard; connect.sid=s%3ADpF18fxtM1kwQ2B7GV6y9Gtgfm63dukc.sabxxV2fawStiwmhhgexRo153cUnAFFkldgUlTuBBAk; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Ab9e37084-f7f1-46fb-8ef4-503740eb01f4%22%2C%22%24device_id%22%3A%22b9e37084-f7f1-46fb-8ef4-503740eb01f4%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; intercom-session-nketzd4e=MlRiR09wdTJBWlJIS0N2MVl0MUQ3aGc2MW1RWDhLeWIyVFlWTDNRUmt1L1dzTzRrQ3NpKzRhMmdHMEQrcmhTZ3R3YTFHRGtLVUZra0RBQ2NPS1MxdG9na1o5WlpReUlWNkg4dlJ0YVhHblk9LS1zTGpxTGsycHRGYnJhejlpT21Ic3ZnPT0=--dfdaebfd0ed8fcfcfb142f2527c303af40faf3ff";
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
        try {
            const fileContent = await fs_1.promises.readFile(filePath, "utf-8");
            return fileContent;
        }
        catch (err) {
            if (err.code === "ENOENT") {
                await fs_1.promises.writeFile(filePath, "", "utf-8");
                return "";
            }
            throw err;
        }
    }
    async editFileContent(filePath, data) {
        await fs_1.promises.writeFile(filePath, data);
    }
    extractUsername(url) {
        try {
            const urlObj = new URL(url);
            const parts = urlObj.pathname.split("/");
            return parts[2] || null;
        }
        catch (error) {
            console.error("Invalid URL:", error);
            return null;
        }
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
                console.log("Same content", link);
            }
            else {
                await this.onLeaderboardChange(link);
                this.editFileContent(filePath, hashedResponse);
                console.log("different content");
            }
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
    async onLeaderboardChange(link) {
        console.log("Running your custom logic...");
        const telegramIds = process.env.TELEGRAM_IDS?.split(",") || [];
        for (const id of telegramIds) {
            await this.sendMessage(Number(id.trim()), `Task Added ${this.extractUsername(link)}`);
        }
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
        const tasks = links
            .filter((event) => event.link && event.fileName)
            .map((event) => this.getZealyData(event.link, event.fileName));
        await Promise.all(tasks);
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