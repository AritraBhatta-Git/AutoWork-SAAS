import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './config/config.module';
import { JobsModule } from './jobs/jobs.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { PCloudModule } from './pcloud/pcloud.module';
import { ContactsModule } from './contacts/contacts.module';
import { ImportsModule } from './imports/imports.module';
import { TemplatesModule } from './templates/templates.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { AutomationsModule } from './automations/automations.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HealthModule } from './health/health.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    JobsModule,
    AuthModule,
    UsersModule,
    OrganizationsModule,
    PCloudModule,
    ContactsModule,
    ImportsModule,
    TemplatesModule,
    CampaignsModule,
    AutomationsModule,
    DashboardModule,
    HealthModule,
    AdminModule,
  ],
})
export class AppModule {}
