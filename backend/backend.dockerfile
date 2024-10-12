# Pythonの公式イメージをベースにする
FROM python:3.9

# 作業ディレクトリを/appに設定
WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

CMD ["./wait-for-it.sh", "db:5432", "--", "python", "app.py"]
