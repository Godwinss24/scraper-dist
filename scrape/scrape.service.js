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
        return "_fbp=fb.1.1757484837783.791316301995086529; cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; intercom-id-nketzd4e=7b188e9b-37cd-4eb2-b237-03b7c1bd12be; intercom-device-id-nketzd4e=a417d689-3590-4d3d-a45e-8cd546b064f6; _tt_enable_cookie=1; _ttp=01K4S47S480VY8H1MNZZMZ0HFR_.tt.1; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNTM1MjJjZS0wYjQzLTRlZTctOWQxMy0yNGY4OTUyNDcyYzEiLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJhenV6ZTIyQGdvZHdpbnMud29yay5nZCIsImxhc3RFbWFpbENoZWNrIjoxNzU3NDg0OTM5MTc1LCJpYXQiOjE3NTc0ODQ5MzksImV4cCI6MTc2MDA3NjkzOX0.9Gyy7vfEZk7s58xUu62eDuqyFnsac01A70AYdPIKF7U; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNTM1MjJjZS0wYjQzLTRlZTctOWQxMy0yNGY4OTUyNDcyYzEiLCJpYXQiOjE3NTc0ODQ5MzksImV4cCI6MTc2MDA3NjkzOX0.4ERbWO_-YArh45Qdt2LhXlQy7UoKva3YTEte-OFIFgI; ttcsid=1759160365278::yd048W10np8wXKbJksaA.5.1759160380035.0; ttcsid_CO6OII3C77UAL9O5M6RG=1759160365276::Ib1bj_l-zBY4etyOEi5I.5.1759160380035.0; connect.sid=s%3ACuE_Xk3rMmX3Q0-G956RpGZx06hi8Go_.9n%2BUcM0dgWEOAUs6OBilT5qTstBUl3uX%2FsvF9QwdF5k; subdomain=root; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3A99943d24-7b13-4afb-8710-8b4a85df60e8%22%2C%22%24device_id%22%3A%2299943d24-7b13-4afb-8710-8b4a85df60e8%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; referrer-url=https://zealy.io/my-communities; intercom-session-nketzd4e=WEtBVUNxNkt1NmV2N0NGK3NlSDFwTm5SS2g0NUgxSlhGeFhxZ0dTdFBIMWZvK3VwejFCem9xUWFsUS8yQnJSZ0VqOEt2azYzYmhiK1hMSjZYSlRmdmhvcHVrM0NqSmluaFBDeGhpNHNPQ289LS1MR3p0UkxsaHhKVEhndUhlZDI1ZktnPT0=--a47fd842378916ea97ef6b0a12613e5a122cdaf9";
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