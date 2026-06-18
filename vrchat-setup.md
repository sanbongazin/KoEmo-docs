# VRChatアバター側の設定

KoeMoは音声から推定した感情を、OSC経由でVRChatアバターのパラメータに送信します。
アバター側でこのパラメータを受け取り、表情を切り替えるギミックを用意する必要があります。

## OSCパラメータ仕様

| パラメータ名 | 型 | 説明 |
|---|---|---|
| `Emotion_ID` | Int | 推定された感情のID |
| `Emotion_Weight` | Float (0.0-1.0) | 感情の強さ |

- 送信元: KoeMo (`127.0.0.1:9000`)
- アドレス: `/avatar/parameters/Emotion_ID`, `/avatar/parameters/Emotion_Weight`

### Emotion_IDの値

| 値 | 感情 |
|---|---|
| 0 | NEUTRAL（平静） |
| 1 | HAPPY（喜び） |
| 2 | SAD（悲しみ） |
| 3 | ANGRY（怒り） |

## 1. Expression Parametersの追加

VRChat Avatar Descriptorの `Expression Parameters` に以下を追加します。

- `Emotion_ID` (Int, Default: `0`, Saved: `false`)
- `Emotion_Weight` (Float, Default: `0`, Saved: `false`)

## 2. Animatorレイヤーの作成

FX Layerまたは表情専用レイヤーに `Emotion_ID` 用のレイヤーを作成します。

推奨構成:

- Layer名: `KoeMoEmotion`
- Weight: `1`
- Blending: `Override`
- Default State: `Neutral`

State構成:

- `Neutral`
- `Happy`
- `Sad`
- `Angry`

各Stateに対応する表情のAnimation Clipを割り当てます。

`Emotion_Weight` を使う場合は、各感情の中で `weak / medium / strong` をBlend Treeまたは追加Stateで切り替えます。

例:

- `0.00 - 0.30` = weak
- `0.30 - 0.65` = medium
- `0.65 - 1.00` = strong

## 3. 遷移条件

`Any State` から各Stateへ遷移する構成にします。

| 条件 | 遷移先 |
|---|---|
| `Emotion_ID == 0` | Neutral |
| `Emotion_ID == 1` | Happy |
| `Emotion_ID == 2` | Sad |
| `Emotion_ID == 3` | Angry |

推奨設定:

- `Has Exit Time`: Off
- `Transition Duration`: `0`
- `Can Transition To Self`: Off

## 4. 動作確認

1. VRChatを起動し、OSCを有効にする
2. 対象アバターを着る
3. KoeMoを起動する
4. 話しかけて `Emotion_ID` が切り替わるか確認する
5. 声量に応じて `Emotion_Weight` が変化するか確認する

## トラブルシューティング

- `Emotion_ID` / `Emotion_Weight` の名前が完全に一致しているか
- パラメータの型（Int / Float）が正しいか
- FX Layerがアバターに含まれているか
- 遷移条件が `Equals` になっているか
- `Transition Duration` が `0` か
- OSCがVRChat側で有効になっているか
- 他の表情ギミックが同じBlendShapeを上書きしていないか
