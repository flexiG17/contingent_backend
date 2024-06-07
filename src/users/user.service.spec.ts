import { UserService } from './user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PageOptionsDto } from '../utils/page/dtos';
import { PrismaService } from '../prisma.service';

const prismaMock = {
  user: {
    findFirst: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);

    prismaMock.user.findFirst.mockClear();
    prismaMock.user.findMany.mockClear();
    prismaMock.user.count.mockClear();
  });

  describe('findByEmail', () => {
    const existingUser = {
      name: 'existing-user',
      email: 'admin@mail.ru',
    };

    it('should return user if exists', async () => {
      prismaMock.user.findFirst.mockResolvedValue(existingUser);

      const result = await userService.findByEmail(existingUser.email);
      expect(result).toEqual(existingUser);
      expect(prismaMock.user.findFirst).toBeCalledTimes(1);
      expect(prismaMock.user.findFirst).toBeCalledWith({
        where: { email: existingUser.email },
      });
    });

    it('should throw NotFoundException if user not exists', async () => {
      prismaMock.user.findFirst.mockResolvedValue(null);

      await expect(
        userService.findByEmail('non-existing-user-email@email.com'),
      ).rejects.toThrow(NotFoundException);
      expect(prismaMock.user.findFirst).toBeCalledTimes(1);
      expect(prismaMock.user.findFirst).toBeCalledWith({
        where: { email: 'non-existing-user-email@email.com' },
      });
    });
  });

  describe('findAll', () => {
    it('should return all user', async () => {
      const allUser = {
        data: [
          {
            id: 'id1',
            name: 'User 1',
            email: 'User 1',
            role: 'User 1',
            created_at: 'User 1',
            updated_at: 'User 1',
          },
          {
            id: 'id1',
            name: 'User 1',
            email: 'User 1',
            role: 'User 1',
            created_at: 'User 1',
            updated_at: 'User 1',
          },
        ],
        meta: {
          hasNextPage: false,
          hasPreviousPage: false,
          itemCount: undefined,
          page: 1,
          pageCount: 1,
          take: 10,
        },
      };

      prismaMock.user.findMany.mockResolvedValue(allUser);

      const result = await userService.findAll(new PageOptionsDto());
      expect(result).toEqual(allUser);
      expect(prismaMock.user.findMany).toBeCalledTimes(1);
      expect(prismaMock.user.findMany).toBeCalledWith({});
    });

    it('should return empty array if there are no users', async () => {
      prismaMock.user.findMany.mockResolvedValue([]);

      const result = await userService.findAll(new PageOptionsDto());
      expect(result).toEqual([]);
      expect(prismaMock.user.findMany).toBeCalledTimes(1);
      expect(prismaMock.user.findMany).toBeCalledWith({});
    });
  });
});
