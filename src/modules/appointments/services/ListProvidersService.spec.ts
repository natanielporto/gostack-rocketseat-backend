import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Ze1',
      email: 'ze1@gmail.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Ze2',
      email: 'ze2@gmail.com',
      password: '123456789',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Ze3',
      email: 'ze3@gmail.com',
      password: '123456789101112',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
