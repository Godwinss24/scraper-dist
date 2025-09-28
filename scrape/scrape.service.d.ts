import { CreateScrapeDto } from "./dto/create-scrape.dto";
import { UpdateScrapeDto } from "./dto/update-scrape.dto";
import { ConfigService } from "@nestjs/config";
export declare class ScrapeService {
    private configService;
    private botToken;
    private baseUrl;
    constructor(configService: ConfigService);
    create(createScrapeDto: CreateScrapeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateScrapeDto: UpdateScrapeDto): string;
    remove(id: number): string;
    getQuestDetails(eventName: string, questId: string): Promise<any>;
    private buildFilePath;
    private cookieData;
    sendMessage(chatId: number, text: string): Promise<void>;
    fetchUrl(url: string, requestOptions: RequestInit): Promise<Response>;
    hashString(data: string): string;
    buildRequestOptions(cookieData: string): RequestInit;
    getFileContent(filePath: string): Promise<string>;
    editFileContent(filePath: string, data: any): Promise<void>;
    extractUsername(url: string): string | null;
    getZealyData(link: string, fileName: string): Promise<any>;
    onLeaderboardChange(link: string): Promise<void>;
    scrapeData(): Promise<void>;
}
