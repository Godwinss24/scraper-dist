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
        return "cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; intercom-id-nketzd4e=08a700ec-28d5-4b62-aa35-5aeb4ef33d55; intercom-device-id-nketzd4e=ac144407-ae02-42e4-aced-c87e28611f3c; _fbp=fb.1.1759828535786.242667695334116567; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZDQ4ZDQ3Ni1mMzVmLTQzNTItOTc2MS03MTcxZDFhZWZhMTMiLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJtYXlhQGdvZHdpbnMud29yay5nZCIsImxhc3RFbWFpbENoZWNrIjoxNzY0MDY0MDM2ODI3LCJpYXQiOjE3NjQwNjQwMzYsImV4cCI6MTc2NjY1NjAzNn0.au156nv7yhzIHOM-Tpyw28hYZQT0d2mYxCdFHQcbvYI; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZDQ4ZDQ3Ni1mMzVmLTQzNTItOTc2MS03MTcxZDFhZWZhMTMiLCJpYXQiOjE3NjQwNjQwMzYsImV4cCI6MTc2NjY1NjAzNn0.ELBOt0DLDuoCDzsPquR_Rh2tZrs7wfszne8xOL3bwbo; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Af4d0e533-53e6-4f9b-8d42-9475c25399a2%22%2C%22%24device_id%22%3A%22f4d0e533-53e6-4f9b-8d42-9475c25399a2%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; connect.sid=s%3AzAV4E9AA5inb8YbfWSaAzZ8hjgXcU5Ee.lZilunpKU4yPusCsYmQNSZMXFf78dDJuuPnXl354h7M; intercom-session-nketzd4e=b1p4U0tpVnM5WWdDVTBFalVpaC9jWUIxSmhMYmpvZFd5cDhsNXVnNWdoeG5xcTl1bkFwS0M5djZnekRhZk05eTFKdDhXZGt0VzliaHc2eEJxZmRxK0M3Rjg2UzZHeTY4SzE2WnFFcDFNZTA9LS1ybFNHZTJKWVBQZTYrWGw0MnEzcDBnPT0=--9f6a13859e805dde22bd2703d9f13d25e6429229";
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
        await fs_1.promises.writeFile(filePath, data, "utf8");
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
            const minimalData = res.map((category) => ({
                id: category.id,
                totalQuestCount: category.totalQuestCount,
                quests: category.quests.map((q) => ({
                    id: q.id,
                    completed: q.completed,
                    claimed: q.claimed,
                })),
            }));
            const hashedResponse = this.hashString(JSON.stringify(minimalData));
            const fileContent = await this.getFileContent(filePath);
            if (fileContent.trim() === hashedResponse.trim()) {
                console.log("Same content", link);
            }
            else {
                await this.onLeaderboardChange(link);
                await this.editFileContent(filePath, hashedResponse);
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