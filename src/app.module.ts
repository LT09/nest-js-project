// Importing the Module decorator from NestJS's common module set.
import { Module } from '@nestjs/common';

// Importing the AuthModule, UserModule, and BookmarkModule from their respective paths.
// These modules might be responsible for handling authentication, user data, and bookmark functionality.
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

// The @Module decorator is used to define AppModule as a NestJS module.
// It helps in organizing the application by grouping related functionalities.
@Module({
  // Listing modules that AppModule will use. This establishes AppModule's dependencies on these modules.
  // It means that AppModule can utilize functionalities exported from these imported modules.
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {} // Defining the AppModule class that brings together the functionality of the imported modules.
