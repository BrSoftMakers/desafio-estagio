import {
  ExecutionContext,
  NotFoundException,
  createParamDecorator,
} from '@nestjs/common';

interface IUserReturn {
  user: {
    id: string;
    permission: string;
    imageUrl: string;
  };
}

export const UserDecorator = createParamDecorator(
  (_: unknown, context: ExecutionContext): IUserReturn => {
    const request = context.switchToHttp().getRequest();

    if (request.user) {
      return request.user;
    }

    throw new NotFoundException('Usuário não encontrado no request.');
  },
);
