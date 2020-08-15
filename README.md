# instadog
Projeto simulando instagram (para cães)

------------------------------------------

# Backend

* [Tecnologias](#computer-tecnologias)
* [Banco - Tabelas](#rocket-banco-tabelas)
* [Como rodar](#construction_worker-como-rodar)


## :computer: Tecnologias
- nodejs
- express
- bcryptjs
- jsonwebtoken
- multer
- multer-s3
- crypto
- knexjs
- aws-sdk
- postgresql

## :rocket: Banco-tabelas

- Nome banco: ```dogs_api```
- Tabelas: ``` users, photos, comments, likes ```

## :construction_worker: Como rodar
```bash
# Clone o Repositorio
git clone https://github.com/maiconboer/instadog.git
```

### 📦 Rode o Servidor/API

Importante!

No projeto já existe as migrations para criar as tabelas automaticamente, siga os passos: 

Crie um banco de dados postgresql com o nome ```dogs_api```.

Crie na raiz do projeto, um arquivo chamado ```.env```.  
Preencha o ```.env``` com suas configurações:

    DB_HOST=seu-host  
    DB_PORT=porta   
    DB_USER=seu-usuario
    DB_PASS=sua-senha
    DB_NAME=dogs_api
    

```bash
# Acesse a pasta do backend
$ cd backend
# Instale as depedencias
$ yarn install
# Rode as migrations para criar as tabelas no banco de dados
$ yarn knex:migrate
```

Importante!

Nosso banco de dados não armazena imagens recebidasd do front, utilizamos o ```multer-s3 + aws-sdk``` para enviar as imagens para o **Amazon S3**, que nos retorna a url da imagem, no nosso banco de dados, armazenamos as url's das imagens que estão no **Amazon S3**.

Para que o serviço de upload para **Amazon S3** funcione, é necessário criar uma conta no **Amazon S3**:

    https://portal.aws.amazon.com/billing/signup#/start  
    
Após criar a conta, realize login e crie um **Bucket S3**.

Com o nome: ```upload-dogs-api```  
Região:  ```Leste dos EUA (Norte da Virgínia)```  
Bloquear acesso público (configurações de bucket): ``` DEIXE TODAS AS OPÇÕES (SÃO 4 OPÇÕES) DESMARCADAS - OU SEJA, NÃO BLOQUEIE NADA ```     


**Após criar o Bucket, vamos criar um usuário IAM para ter acesso a este Bucket, poder consumir, enviar as imagens e etc:

 Vá em:
 
    SERVICES > IAM > USUÁRIOS > ADICIONAR USUÁRIO
    
    Nome de usuário: pode escolher o nome desejado
    Tipo de acesso: Escolher o ACESSO PROGRAMÁTICO (assim nos é fornecido uma ID de chave e uma chave secreta para usar a API da AWS)
    
Avance, em DEFINIR PERMISSÕES, clique em:

    Anexar políticas existentes de forma direta.
    
Selecione:

    AmazonS3FullAccess
    
Avance algumas vezes e pronto, o usuário é criado e é gerado uma CHAVE DE ACESSO e uma CHAVE DE ACESSO SECRETA.

No arquivo ```.env``` criado anteriormente, inserir as configurações para conexão com o **Amazon S3**:    

    AWS_ACCESS_KEY_ID=sua-chave-de-acesso
    AWS_ACCESS_SECRET_KEY=sua-chave-de-acesso-restrita
    AWS_DEFAULT_REGION=us-east-1

    BUCKET_NAME=upload-dogs-api
    STORAGE_TYPE=s3
    
Finalizamos nossas configurações, podemos executar o backend com o comando: ```yarn start```

API rodando no endereço: http://localhost:3333/

------------------------------------------
