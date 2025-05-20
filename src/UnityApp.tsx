import { useEffect } from 'react'

export default function UnityApp() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'Build/Build.loader.js'
    script.onload = () => {
      createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "Build/Build.data",
        frameworkUrl: "Build/Build.framework.js",
        codeUrl: "Build/Build.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "NoiseTalks",
        productVersion: "0.1.0",
      })
    }
    document.body.appendChild(script)
  }, [])

  return (
    <canvas id="unity-canvas" width={1280} height={720} style={{ width: 1280, height: 720, background: "#231F20" }} />
  )
}
