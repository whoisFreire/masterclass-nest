import { IsNotEmpty } from 'class-validator';

export class CreateMemberBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.',
  })
  function: string;
}
