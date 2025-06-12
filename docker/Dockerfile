# ベースイメージ
#FROM node:20
FROM public.ecr.aws/docker/library/node:22-alpine
# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# パッケージをインストール
COPY src/package*.json ./
RUN npm install

# アプリケーションのソースコードをバンドル
COPY src/ .

# アプリケーションをビルド
RUN npm run build

# アプリケーションを公開
EXPOSE 80
CMD [ "node", "index.js" ]
