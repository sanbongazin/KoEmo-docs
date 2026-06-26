# アバターへの組み込み

VoxEmoはOSCを通じてVRChatアバターに感情情報を送信します。アバター側にOSCを受け取るギミック設定が必要です。

## 必要な準備

- VRChat SDK（VRCSDK3）がインストールされたUnityプロジェクト
- OSC受信に対応したアバターギミック（Expression Parameters + Animator）

## OSCパラメーター一覧

VoxEmoが送信するOSCパラメーターは以下のとおりです。

| パラメーター名 | 型 | 値の範囲 | 説明 |
|---|---|---|---|
| `VoxEmo/Emotion/Joy` | Float | 0.0〜1.0 | 喜びの強度 |
| `VoxEmo/Emotion/Sadness` | Float | 0.0〜1.0 | 悲しみの強度 |
| `VoxEmo/Emotion/Anger` | Float | 0.0〜1.0 | 怒りの強度 |
| `VoxEmo/Emotion/Neutral` | Float | 0.0〜1.0 | 平静の強度 |

::: tip
パラメーター名や値の範囲は今後のバージョンで変更される可能性があります。
:::

## アバターギミックの設定手順

1. Unity で対象アバターのプロジェクトを開く
2. Expression Parameters に上記パラメーターを追加する
3. Animator Controller でパラメーターを受け取り、対応するBlendShape（表情）に接続する
4. アバターをアップロードする

## 動作確認済み環境

詳細は[対応アバター・ギミック一覧](/compatibility)を参照してください。
