import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateSessionsService from './AuthenticateSessionsService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateSessionsService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    authenticateUser = new AuthenticateSessionsService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await createUser.execute({
      name: 'Ze Zezao',
      email: 'ze@gmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'ze@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with a non-existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'ze@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await createUser.execute({
      name: 'Ze Zezao',
      email: 'ze@gmail.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'ze@gmail.com',
        password: 'wrong',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
