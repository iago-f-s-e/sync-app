import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from '../dtos';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public generateToken(payload: PayloadToken): string {
    return this.jwtService.sign(JSON.parse(JSON.stringify(payload)));
  }
}
