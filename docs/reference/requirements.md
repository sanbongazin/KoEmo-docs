# 動作要件

## 推奨環境

| 項目 | 推奨 |
|---|---|
| OS | Windows 10 / 11（64bit） |
| CPU | Intel Core i5 第8世代以降 / AMD Ryzen 5 以降 |
| RAM | 8GB 以上 |
| GPU | NVIDIA GPU（CUDA対応）※任意 |
| マイク | USBマイク・ヘッドセットマイク・仮想オーディオデバイス |

## GPU について

NVIDIA GPU（CUDA対応）がなくても動作します。

| 環境 | 動作 | 速度 |
|---|---|---|
| CPUのみ | ○ | やや遅い |
| NVIDIA GPU（CUDA） | ○ | 高速・快適 |

CPU動作時はレイテンシーがやや増加しますが、通常のVRChat利用では体感しにくい範囲です。

## 必要なソフトウェア

VoxEmo Launcherが初回起動時に自動インストールします。手動での事前インストールは不要です。

- Python 3.12（自動セットアップ）
- PyTorch（自動インストール）
- VRChat（OSC有効化が必要）

## VRChat OSC の有効化

VoxEmoを使用するにはVRChatのOSC機能を有効にする必要があります。

1. VRChatを起動
2. メニュー → **OSC** → **Enable** をオンにする
