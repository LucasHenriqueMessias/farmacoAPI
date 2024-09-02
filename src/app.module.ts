import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabMedicamentoModule } from './tab_medicamento/tab_medicamento.module';
import { TabComposicaoModule } from './tab_composicao/tab_composicao.module';
import { TabControladoModule } from './tab_controlado/tab_controlado.module';
import { TabManipuladorasModule } from './tab_manipuladoras/tab_manipuladoras.module';
import { TabMedicamento } from './tab_medicamento/entities/tab_medicamento.entity';
import { TabManipuladoras } from './tab_manipuladoras/entities/tab_manipuladora.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [TabMedicamento, TabManipuladoras],
      synchronize: true,
    }),
    TabMedicamentoModule,
    TabComposicaoModule,
    TabControladoModule,
    TabManipuladorasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}