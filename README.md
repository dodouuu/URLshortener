![cover](https://raw.githubusercontent.com/dodouuu/pictures/main/A11%E7%9F%AD%E7%B6%B2%E5%9D%80%E7%94%A2%E7%94%9F%E5%99%A8cover_.png)
# Express app - URL shortener
打造一個縮短網址產生器


---
## 功能列表

1. 在畫面左方輸入長網址：
    1. 短網址輸出格式為 5 碼英數組合
    2. 輸入相同網址時，產生一樣的縮址
    3. 沒有輸入內容，會顯示紅字：Empty URL
	4. 沒有輸入內容，就按下送出鈕，不會送出表單，並且會提示使用者：You need to type URL
    5. 有輸入內容，會顯示：Looks good!
2. 在畫面右方產生短網址：
    1. 按 Copy URL 會複製短網址
    2. 跳出視窗提醒複製成功
    

---
安裝
1. 從 Terminal (command line interface) 移動到想存放專案的位置，執行：
```
git clone https://github.com/dodouuu/URLshortener.git
```
2. 進入 repository 
```
cd URLshortener
```
3. 安裝套件
```
macOS 請至nvm 的 GitHub 頁面：https://github.com/creationix/nvm。安裝 nvm
Windows 請至nvm 的 GitHub 頁面：https://github.com/coreybutler/nvm-windows/releases。安裝 nvm
nvm install 14.16.0
npm i express@4.18.1
npm i express-handlebars@4.0.2
npm i mongoose@5.9.7
npm install body-parser
npm install method-override@3.0.0
npm install standard --save-dev
```
4. 資料庫
    1. 開啟 MongoDB Atlas
    2. 開啟 Robo3T => Create Database => Database Name:URLshortener
    3. 設定環境變數，以 Git Bash 為例，輸入：
    ```
    export MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.am8naws.mongodb.net/URLshortener?retryWrites=true&w=majority"
    ```

5. 執行
```
npm run dev
```
6. 確認 Terminal 顯示
```
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
App is running on http://localhost:3000
mongoDB connected!
```
代表啟動成功，打開瀏覽器，在網址列輸入http://localhost:3000

7. 停止伺服器
```
ctrl + C
```

---
## 開發工具
1. Node.js 14.16.0
2. Express 4.18.1
3. Express-Handlebars 4.0.2
4. MongoDB mongoose 5.9.7
5. Bootstrap 5.0.2
6. method-override 3.0.0

