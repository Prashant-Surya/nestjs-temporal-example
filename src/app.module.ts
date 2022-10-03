import { Module } from '@nestjs/common';
import { TemporalModule } from '../../nestjs-temporal/lib/index';
import { GreetingActivity } from './app.activity';
import { AppController } from './app.controller';

@Module({
  imports: [
    TemporalModule.forRoot({
      taskQueue: 'default',
      workflowsPath: require.resolve('./app.workflows.js'),
    }),
    TemporalModule.registerClient(),
  ],
  controllers: [AppController],
  providers: [GreetingActivity],
})
export class AppModule {}
