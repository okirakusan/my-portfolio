# こんにちは！

フロントエンドエンジニア志望の[**okirakusan**](https://github.com/okirakusan)と申します。  
こちらはポートフォリオ用に作成した Next.js プロジェクトです。  
**ホームページ**と**３つの簡単なアプリ**を掲載しております。  
よろしければご覧になっていってください。  
  
  
  
  
## 概要
  
  
  

### ページ構成  
  
  
- [ホームページ](https://next-js-portofolio-with-tailwind.vercel.app/)  
    - アプリ （「[猫画像API](https://next-js-portofolio-with-tailwind.vercel.app/catApi)」）  
    - アプリ （「[ChatBot-Gpt](https://next-js-portofolio-with-tailwind.vercel.app/chatBotGpt)」）  
    - アプリ （「[ランダム注文](https://next-js-portofolio-with-tailwind.vercel.app/priceRangeMenuSelector)」）
  
  
### 主なディレクトリ構成(src配下)
  
  
- src  
    - component  
        - hooks（「ChatBot-Gpt」と「ランダム注文」の状態を共有化するためのカスタムフック）  
        - layout  
    - pages  
        - catApi.tsx（「猫画像API」）  
        - chatBotGpt.jsx（「ChatBot-Gpt」）  
        - priceRangeMenuSelector.jsx（「ランダム注文」）  
        ...  
    - styles  
    - middleware.ts（ホームページに BASIC 認証をかけるためのファイル）  
  
  
### 使用している言語、記法 
  
  
- html/css  
- javaScript  
- typeScript  
- tailWindCss  
- .js/.ts/.jsx/.tsx/.json/.env/.gitignore/.md  
  
  
## アプリの詳細  
  
  
  
### 「[猫画像API](https://next-js-portofolio-with-tailwind.vercel.app/catApi)」  
  
  
- 内容
    「[The Cat API](https://thecatapi.com/)」というサイトのAPIを使い、クリックイベントで猫画像を表示させます。  
    ページ遷移時に最初に表示する画像は、サーバーサイドレンダリングで取得します。  
  
- 作成した目的  
    React(Next.JS)でのstate管理やサーバーサイドレンダリング、tailWindCss、typeScript、APIの基礎学習。  
    猫が好きだから。  
  
  
### 「[ChatBot-Gpt](https://next-js-portofolio-with-tailwind.vercel.app/chatBotGpt)」  
  
  
- 内容
    今話題の「[ChatGpt](https://openai.com/blog/chatgpt)」の簡単なクローンを作りました。  
    OpenAI社のAPIを使っています。トークン数を制限しているので、チャットボットのような形でお試し頂けるように設計しました。  
  
- 作成した目的  
    chatGptのキャッチアップ（プロンプトやAPIの設定方法等）。 
  
  
### 「[ランダム注文](https://next-js-portofolio-with-tailwind.vercel.app/priceRangeMenuSelector)」  
  
  
- 内容
    設定金額からランダムにメニューを取得し、注文するメニューの合計金額を算出します。  
    chatGptを使って作成してみました。
  
- 作成した目的  
    プログラミングにおけるchatGptの活用方法を学ぶため。  
    メニューは何でもよく金額だけを気にして注文のシミュレーションを行いたい、というニーズがあると思った為。  

