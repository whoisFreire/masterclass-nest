import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateMemberBody } from './dtos/create-member-body';
import { MembersRepository } from './repositories/members-repository';
@Controller('app')
export class AppController {
  constructor(private readonly membersRepository: MembersRepository) {}

  @Post('member')
  async getHello(@Body() body: CreateMemberBody): Promise<void> {
    const { name, function: memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);

    return;
  }
}
