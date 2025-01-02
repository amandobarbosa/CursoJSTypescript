//singleton - GOF | factory method -gof
export class DataBase {
  private static database: DataBase;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user} e ${this.password} `);
  }
  static getDatabase(host: string, user: string, password: string): DataBase {
    if (DataBase.database) {
      console.log('retornando instancia já criada');
      return DataBase.database;
    }
    console.log('criando nova instancia');
    const db = (DataBase.database = new DataBase(host, user, password));
    return db;
  }
}

const db1 = DataBase.getDatabase('localHost', 'root', '123456');
db1.connect();

const db2 = DataBase.getDatabase('localHost', 'root', '123456');
db2.connect();

const db3 = DataBase.getDatabase('localHost', 'root', '123456');
db3.connect();

const db4 = DataBase.getDatabase('localHost', 'root', '123456');
db4.connect();

