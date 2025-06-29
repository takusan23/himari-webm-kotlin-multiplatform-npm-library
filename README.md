# himari-webm-kotlin-multiplatform-npm-library
実験的ですが、

https://github.com/takusan23/HimariWebmKotlinMultiplatform

`JavaScript`の`MediaRecorder`が生成する`WebM`ファイルをシークできるようにする関数を提供します。  
`Kotlin Multiplatform`で実装されている関数を、`JavaScript`から呼び出せるよう、  
`Kotlin/Wasm`に変換して`npm ライブラリ`にしたものです。

# インストール手順
`npm`じゃなくて`GitHub`のリポジトリから`npm install`でゴメン、

```
npm install takusan23/himari-webm-kotlin-multiplatform-npm-library
```

今のところ、以下の組み合わせて利用できることを確認しました  
- `React`+`Vite`
- `Next.js`の`クライアントコンポーネント`

## React + Vite で使う場合
まず、トップレベル`await`を許可する必要があります。  
次に、`.wasm`ファイルの`MIME-Type`が不正エラーが出るので、回避する必要があります。

以下のように`esnext`を指定し、`exclude`すれば動くはず

```ts
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
    exclude: [
      "himari-webm-kotlin-multiplatform"
    ]
  },
})
```

## Next.js で使う場合
クライアントコンポーネントでこのライブラリを利用する場合、必ずクライアント側で読み込まれるように遅延ロードする必要があります。多分。

よって、` import { ... } from "himari-webm-kotlin-multiplatform" `は使えず、  
` const { ... } = await import("himari-webm-kotlin-multiplatform") `をクライアントだけで呼び出す必要があります。

`useEffect()`や`clickHandler`なんかはクライアント側なので、ここでロードすればよいはず

```ts
async function startFixSeekableWebmLibAndDownload(arrayBuffer: ArrayBuffer) {
    // 必要になるまでライブラリを import しない
    const { fixSeekableWebm } = await import("fix-seekable-webm-kotlin-wasm")
    const fixSeekableWebmNumberList = fixSeekableWebm(intArray as any)
}
```

# 更新手順
本家の README 参照

https://github.com/takusan23/HimariWebmKotlinMultiplatform

# ライセンス
`Apache License Version 2.0`

本家が`Apache 2.0`を使っているので引き継ぎました。
