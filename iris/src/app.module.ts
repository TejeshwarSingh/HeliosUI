import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { RestApiProjSystemsModule } from './rest_api_proj_systems/rest_api_proj_systems.module';
import { RestApiReqLogModule } from './rest_api_req_log/rest_api_req_log.module';
import { RestEventQueueHistModule } from './rest_event_queue_hist/rest_event_queue_hist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'Riddler.scgts.com',
      port: 1521,
      username: 'GTSREST',
      password: 'GTSREST',
      //schema: 'GTSREST',
      serviceName: 'tims2dev.scgts.com',
      //database: 'tims2dev.scgts.com',
      autoLoadEntities: true,
      synchronize: false,
      entities: [join(__dirname, '**', 'entities', '*.{ts,js}')],
      //entities: ['entities/*.js'],
      //entities: ['src/entities/**/*.{ts,js}'],
    }),
    RestApiProjSystemsModule,
    RestApiReqLogModule,
    RestEventQueueHistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//TypeOrmModule.forRoot({ type: 'oracle', host: 'ip of hostname', port: port number, username: 'username', password: 'password', serviceName: 'servicename', synchronize: false, entities: [] })
