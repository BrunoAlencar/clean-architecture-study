import ItemRepositoryDatabase from '../../src/infra/repository/database/ItemRepositoryDatabase';
import PgPromiseConnectionAdapter from '../../src/infra/database/PgPromiseConnectionAdapter';
import PgPromiseConnectionInMemoryAdapter from '../../src/infra/database/PgPromiseConnectionInMemoryAdapter';

test.skip('Deve retornar itens do banco de dados', async function () {
  const connection = new PgPromiseConnectionInMemoryAdapter();
  const itemRepository = new ItemRepositoryDatabase(connection);
  const items = await itemRepository.list();
  expect(items).toHaveLength(3);
  await connection.close();
});
