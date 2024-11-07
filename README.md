# NENRIN
このWEBアプリはシニアユーザーと団体ユーザーを仕事を通じて結ぶプラットフォームです。シニアユーザーは自分のスキルを活かしてサービスを提供でき、団体ユーザーはシニアに対して求人掲載ができます。

# 使用技術

### フロントエンド
<div style="display: flex; gap: 10px;">
    <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
    <img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=for-the-badge">
    <img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=for-the-badge">
</div>

### バックエンド
<div style="display: flex; gap: 10px;">
    <img src="https://img.shields.io/badge/-Python-3776AB.svg?logo=python&style=for-the-badge">
    <img src="https://img.shields.io/badge/-Flask-000000.svg?logo=flask&style=for-the-badge">
    <img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=for-the-badge">
</div>

### インフラ、その他
<div style="display: flex; gap: 10px;">
    <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
    <img src="https://img.shields.io/badge/-Github-181717.svg?logo=github&style=for-the-badge">
    <img src="https://img.shields.io/badge/-Firebase-FFCA28.svg?logo=firebase&style=for-the-badge">
</div>

## ユーザータイプ
1.シニアユーザー（サービス提供者であるシニア）  
2.団体ユーザー（団体、企業、学校、地方自治体など）

## 機能一覧
【共通機能】  
・アカウント作成  
・登録済みアカウントでのログイン  
・ロフィール作成・編集  
・メッセージの送受信   

【団体ユーザー向け機能】  
・シニアユーザーが掲載するサービスの検索  
・依頼  
・求人の登録・募集  

【シニアユーザー向け機能】  
・団体ユーザーが掲載している求人の検索・応募  
・サービスの登録・掲載   

## Docker立ち上げまでの手順

リポジトリをクローン(まだクローンしていない場合)
```
git clone https://github.com/ms-engineer-bc24-08/last_section_teamB.git
→vscodeで開く
```
リポジトリをpull(すでにmainをクローンした場合)
```
git fetch origin
git pull origin main
```
docker立ち上げ
```
docker-compose up --build
```

※ポートの競合を避けるための注意  
docker起動しながらの開発では以下のポートを使います。  
フロントエンド/localhost:3000  
バックエンド/localhost:4000
データベース/localhost:5433(コンテナ内:5432)  


## コミットメッセージの統一

・コミットメッセージは英語で書きましょう  
・メッセージの最初に絵文字をつけて視覚的にわかりやすくしましょう  
例：🚧 Work in progress on search functionality  

## チームメンバーと担当機能
＊ゆうな（リーダー）：決済  
＊きの：認証・スコアリング  
＊ゆか：検索  

## セキュリティ要件

- ユーザー認証とアクセス制御
- 個人情報の暗号化

## 今後の拡張性

- メッセージ機能
- 団体側への課金制度
- 評価システムの導入
- モバイルアプリの開発
