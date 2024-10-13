# Pythonの公式イメージをベースにする
FROM python:3.9-slim

# 作業ディレクトリを/appに設定
WORKDIR /app

# 依存関係だけを最初にインストール
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# ソースコードをコンテナにコピー
COPY . /app

# wait-for-itスクリプトをコピーして実行権限を付与
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# コンテナの起動時にwait-for-itを使用してdbサービスの準備を待つ
CMD ["./wait-for-it.sh", "db:5433", "--", "python", "app.py"]
