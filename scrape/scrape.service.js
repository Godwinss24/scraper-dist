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
        return "_fbp=fb.1.1765822215547.341356565192513694; intercom-id-nketzd4e=92573c6b-208c-44bf-9fab-317b436d44b5; intercom-device-id-nketzd4e=63c8a7a5-c848-49cd-b18f-dd47f8020ea5; _tt_enable_cookie=1; _ttp=01KDPDSVM5HTR52Y4SJC85GZMD_.tt.1; ttcsid=1767057976978::MkYT4Syk1BilkC-csj4e.1.1767058418371.0; ttcsid_CO6OII3C77UAL9O5M6RG=1767057976976::_AjqQdhLOwYtTLnQ_Y6E.1.1767058418373.1; _twpid=tw.1773071588251.381682006720450485; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmYzAzOTFiZC05NWEwLTRkZDktYTQxYi00M2U4MmVkMmRkOTciLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJhc2hlcm5vdGtpbmVAZ21haWwuY29tIiwibGFzdEVtYWlsQ2hlY2siOjE3NzMwNzE2NDc3NjksImlhdCI6MTc3MzA3MTY0NywiZXhwIjoxNzc1NjYzNjQ3fQ.21GtvRMv7zA4Gnw906mGbIBhQR-RrLvbsklOp-HB1kE; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmYzAzOTFiZC05NWEwLTRkZDktYTQxYi00M2U4MmVkMmRkOTciLCJpYXQiOjE3NzMwNzE2NDcsImV4cCI6MTc3NTY2MzY0N30.-Z8biTH4shbxYw7wQMqzwGgU218RQCDDxvgHviM1AaI; subdomain=root; connect.sid=s%3ATZJLQk4CNmroY_QmEMoKeFVHT6t1zIRS.e3kkQo0Rtpdpwx27A7VBkBIECeuSWPQYBq2ngtsivjQ; cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3A4ca6d983-62f4-4481-9d81-cfc26cb6d6f1%22%2C%22%24device_id%22%3A%224ca6d983-62f4-4481-9d81-cfc26cb6d6f1%22%2C%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22%24direct%22%2C%22%24initial_referring_domain%22%3A%22%24direct%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; referrer-url=https://zealy.io/my-communities; intercom-session-nketzd4e=V2s3emw2ay9YOWFGdHl2Qm9KRVdKUllUeGVyay9ZQkpaT0UrMVQyTWlGbVFKVUVRbk1McXJldERFYlZ0Uy9XRzZJeEJBN2tWMmhIL0MvRzBvRjJHN1FFNFRjTGtMUlhQV3pxRG95ZGxpUXNWaE44RTF3cGFGQjI3TWZWeERXMExLNzlXek1UYmUwcGdNckhRR1kzUUs2ZjFwbGprcUY4dHNvSEo0SkdEa0FXcDh2Kzl2SWtWUVZjMkxxUW9HQWxiNHlWdXpvRGY0SWRqeEsyMVhMTy90Zz09LS1LcE9idHk3Zk1jOFpVcC9ZUzA5TzdRPT0=--1512d7e9dde45b3a692510e985fcab6242817467"
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
    async printFolderTree(dir, depth = 0, maxDepth = 4) {
        if (depth > maxDepth)
            return;
        try {
            const entries = await fs_1.promises.readdir(dir, { withFileTypes: true });
            for (const entry of entries) {
                if (entry.isDirectory() && entry.name === "node_modules") {
                    continue;
                }
                const prefix = "  ".repeat(depth);
                const fullPath = (0, path_1.join)(dir, entry.name);
                if (entry.isDirectory()) {
                    console.log(`${prefix}📁 ${entry.name}/`);
                    await this.printFolderTree(fullPath, depth + 1, maxDepth);
                }
                else {
                    console.log(`${prefix}📄 ${entry.name}`);
                }
            }
        }
        catch (err) {
            console.log(`❌ Cannot access ${dir}: ${err.message}`);
        }
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
                console.log("File content does not exist.");
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
            const minimalData = res.flatMap((category) => category.quests.map((q) => ({
                categoryId: category.id,
                questId: q.id,
                completed: q.completed,
                claimed: q.claimed,
                opened: q.opened,
                canRetry: q.canRetry,
                locked: q.locked,
            })));
            const fileContent = await this.getFileContent(filePath);
            if (!fileContent || fileContent.trim() === "") {
                if (minimalData.length > 0) {
                    console.log(`${fileName} initialized`);
                    await this.editFileContent(filePath, JSON.stringify(minimalData));
                }
                return res;
            }
            if (fileContent.trim() === JSON.stringify(minimalData)) {
                console.log("Same content", link);
            }
            else {
                const changedQuestIdsForTelegram = [];
                let previousData = [];
                try {
                    previousData = JSON.parse(fileContent);
                }
                catch {
                    console.warn("Could not parse previous file content for quest diff");
                }
                const prevMap = new Map();
                for (let i = 0; i < previousData.length; i++) {
                    const q = previousData[i];
                    prevMap.set(q.questId, q);
                }
                for (let i = 0; i < minimalData.length; i++) {
                    const quest = minimalData[i];
                    const oldQuest = prevMap.get(quest.questId);
                    if (!oldQuest ||
                        oldQuest.completed !== quest.completed ||
                        oldQuest.claimed !== quest.claimed ||
                        oldQuest.opened !== quest.opened ||
                        oldQuest.canRetry !== quest.canRetry ||
                        oldQuest.locked !== quest.locked) {
                        changedQuestIdsForTelegram.push({
                            categoryId: quest.categoryId,
                            questId: quest.questId,
                        });
                    }
                }
                if (changedQuestIdsForTelegram.length) {
                    await this.onLeaderboardChange(link, changedQuestIdsForTelegram);
                    console.log("different content");
                }
                await this.editFileContent(filePath, JSON.stringify(minimalData));
            }
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
    telegramIds = [];
    async onModuleInit() {
        this.telegramIds = process.env.TELEGRAM_IDS?.split(",") || [];
        for (const id of this.telegramIds) {
            console.log(id);
        }
    }
    async onLeaderboardChange(link, changedQuestIds) {
        console.log("Running your custom logic...");
        const sendPromises = [];
        for (const id of this.telegramIds) {
            if (changedQuestIds) {
                for (const q of changedQuestIds) {
                    const message = `Task Added ${this.extractUsername(link)}\nlink: https://zealy.io/cw/${this.extractUsername(link)}/questboard/${q.categoryId}/${q.questId}`;
                    sendPromises.push(this.sendMessage(Number(id.trim()), message));
                }
            }
            else {
                const message = `Task Added ${this.extractUsername(link)}`;
                sendPromises.push(this.sendMessage(Number(id.trim()), message));
            }
        }
        await Promise.all(sendPromises);
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