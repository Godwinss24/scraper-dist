export declare class AppService {
    getHello(): string;
    buildFilePath(fileName: string): string;
    getFileContent(fileName: string): Promise<string>;
    getFile(fileName: string): Promise<string>;
}
