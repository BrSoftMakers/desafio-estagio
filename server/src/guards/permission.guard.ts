import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEYS } from 'src/decorators/permissions.decorator';
import { Permission } from 'src/enum/permissions.enum';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const requeridPermissions = this.reflector.getAllAndOverride<Permission[]>(
      PERMISSION_KEYS,
      [context.getHandler(), context.getClass()],
    );

    const { user } = context.switchToHttp().getRequest();

    const permissionFilted: Permission[] = requeridPermissions.filter(
      (permission) => permission === user.permission,
    );

    return permissionFilted.length > 0;
  }
}
