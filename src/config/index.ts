class Configuration {
    private host: string;
    private port: number;

    constructor(host: string = '0.0.0.0', port: number = 3000) {
        this.host = host;
        this.port = port;
    }

    public setHost(host: string) {
        this.host = host;
    };

    public setPort(port: number) {
        this.port = port;
    };

    public getHost() {
        return this.host
    };
    public getPort() {
        return this.port
    };
}

export default Configuration;