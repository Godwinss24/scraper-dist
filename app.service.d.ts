import { OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
export declare class AppService implements OnModuleInit {
    private configService;
    private botToken;
    private baseUrl;
    constructor(configService: ConfigService);
    getHello(): string;
    buildFilePath(fileName: string): string;
    getFileContent(fileName: string): Promise<string>;
    private telegramIds;
    onModuleInit(): Promise<void>;
    getFile(fileName: string): Promise<string>;
    sendMessage(chatId: number, text: string): Promise<void>;
    testing(): Promise<string>;
}
