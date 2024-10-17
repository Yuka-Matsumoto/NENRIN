# Pythonの公式イメージをベースにする
FROM python:3.9-slim

# 作業ディレクトリを/appに設定
WORKDIR /app

# backendディレクトリ内のrequirements.txtをコピー
COPY backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# wait-for-itスクリプトをルートディレクトリからコピー
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# ソースコードをコンテナにコピー
COPY backend /app

# コンテナの起動時にwait-for-itを使用してdbサービスの準備を待つ
CMD ["/wait-for-it.sh", "db:5432", "--", "python", "app.py"]