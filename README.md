
# ECS CICD Pipeline Sample

このプロジェクトは、AWS CodeCommit 、AWS CodeBuild と Amazon ECS を使用したコンテナアプリケーションの継続的インテグレーションおよび継続的デリバリーパイプラインのデモです。

## 構成

```bash
ECS_CICD_Pipeline_Sample/
├── docker/
│   └── Dockerfile ・・・Node.js アプリケーションの Docker イメージをビルドするための Dockerfile。
├── src/
│   ├── index.js ・・・シンプルな Node.js アプリケーション。
│   └── package.json ・・・Node.js アプリケーションの依存関係を定義するファイル。
└── pipeline/
│   └── buildspec.yaml ・・・CodeBuild のビルドプロセスを定義するファイル。
└── README.md ・・・このREADME
```

## 前提条件

このコードを使用するための前提条件は以下の通りです。

### 全般

* AWS アカウント
* AWS CLI

### コンテナ関連

* PodmanまたはDockerのインストール
* imageのURIを取得
  * ECRを作成
  * imageをビルド、ECRにPUSH

## 初回作成時の手順

下記を参考にして、AWS CodePipelineを作成します。

### セットアップ

レポジトリをクローンします。

   ```bash
   git clone <リポジトリのURL>
   cd <リポジトリのディレクトリ>
   ```

### imageのURIを取得

1. ECRリポジトリを作成します。
2. プッシュコマンドを参考にして、imageをビルド、プッシュします。
3. buildspec.yamlを編集し、image Uriを置き換えます。

### CodeCommit にプッシュ

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### CodeBuild プロジェクトの設定

CodeBuild プロジェクトを作成し、`pipeline/buildspec.yaml` をビルド仕様として指定します。

### ECS クラスタ、タスク定義とサービスの作成

1. クラスタを作成
2. タスク定義を作成
3. サービスを作成

### CodePipeline の作成

AWS Management Console で CodePipeline を作成し、CodeCommit、CodeBuild、ECS のステージを設定します。

## ビルドとデプロイ

CodePipeline が自動的にトリガーされ、コードの変更が検出されるとビルドとデプロイが実行されます。
