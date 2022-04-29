// Importando bibliotecas necessarias
import { Schema, model, Model, connection } from 'mongoose';

// Tipando os dados do BD
type UserType = {
    email: string,
    age: number,
    name: string
}

// criando o Schema / Estrutura dos dados
const schema = new Schema<UserType>({
    email: String,
    age: Number,
    name: String
});


// Criando o Model e Exportando
const modelName: string = 'User';

const userModel = connection && connection.models[modelName]
? (connection.models[modelName] as Model<UserType>)
: model<UserType>(modelName, schema);

export default userModel;