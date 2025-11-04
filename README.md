# To-Doリスト (Next.js 14 + TypeScript + Prisma + Storybook)

Next.js 14 App Router、TypeScript、Prisma ORM、Atomic Designパターンで構築されたタスク管理アプリケーションです。

## 主要機能

### タスク管理
- タスクの追加・削除
- タスクの完了/未完了の切り替え
- タスクの永続化（Prisma ORM + SQLite/PostgreSQL）
- 作成日時順での並び替え

### フィルタリング
- **すべて**: 全タスクを表示
- **アクティブ**: 未完了タスクのみ表示
- **完了済み**: 完了タスクのみ表示

### 操作方法
- **Enterキー**: 新しいタスクを追加
- **チェックボックス**: タスクの完了状態を切り替え
- **削除ボタン**: タスクを削除
- **フィルタボタン**: 表示するタスクを絞り込み
- **完了済みをクリア**: 完了済みタスクを一括削除

## 技術スタック

- **Next.js 14** - Reactフレームワーク（App Router）
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Prisma ORM** - データベースORM
- **SQLite** - ローカル開発用データベース
- **PostgreSQL** - 本番環境用データベース
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング

## プロジェクト構造

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # ホームページ
│   └── globals.css             # グローバルスタイル
├── features/                   # 機能別モジュール
│   └── todos/                  # TODOリスト機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── TaskForm/       # タスク入力フォーム
│       │   ├── TaskItem/       # 個別タスク項目
│       │   ├── FilterButtons/  # フィルタボタン群
│       │   └── TaskCounter/    # タスクカウンター
│       ├── TodoApp/            # TODO機能のルートコンポーネント
│       ├── actions.ts          # Server Actions
│       └── types.ts            # TODO機能の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # ボタン
│   ├── Input/                  # テキスト入力
│   └── Checkbox/               # チェックボックス
├── lib/                        # ユーティリティ
│   └── db.ts                   # Prisma Clientシングルトン
├── generated/prisma/           # Prisma生成ファイル
├── types/                      # 汎用的な型定義
└── stories/                    # Storybook用ストーリー
prisma/
├── schema.prisma               # Prismaスキーマ
└── migrations/                 # マイグレーションファイル
```

## スクリプト

```bash
# セットアップ
npm install

# 環境変数の設定
cp .env.example .env
# .envファイルを編集して必要な値を設定

# データベースのマイグレーション
npx prisma migrate dev

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License
