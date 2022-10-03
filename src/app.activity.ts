import { Injectable } from '@nestjs/common';
import { Activities, Activity } from '../../nestjs-temporal/lib/index';

@Injectable()
@Activities()
export class GreetingActivity {
  @Activity()
  async greeting(name: string): Promise<string> {
    return 'Hello ' + name;
  }
}

export interface IGreetingActivity {
  greeting(name: string): Promise<string>;
}
