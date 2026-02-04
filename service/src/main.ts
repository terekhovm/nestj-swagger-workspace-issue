import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    try {
        await runApp();
    } catch (e) {
        console.error(e);
        throw e;
    }
}

const PORT = 5555;

async function runApp() {
    const app = await NestFactory.create(AppModule);
    app.enableShutdownHooks();

    const swaggerImport = await import("@nestjs/swagger");
    const swaggerConfig = new swaggerImport.DocumentBuilder().setTitle("Service").setVersion("1.0").build();
    const document = swaggerImport.SwaggerModule.createDocument(app, swaggerConfig);
    swaggerImport.SwaggerModule.setup("api", app, document);

    await app.listen(PORT);
}

bootstrap();
