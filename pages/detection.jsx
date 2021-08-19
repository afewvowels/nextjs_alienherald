import Head from 'next/head'

const Detection = () => {

  return(<>
    <Head>
      <title>Detection | AlienHerald</title>
      {/* <link rel="stylesheet" type="text/css" href="detection.css" /> */}
      <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js" type="text/javascript"></script>
      <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
      <script src="detection.js" defer />
    </Head>
    <h2>Detection</h2>
    <section id="demos" className="invisible">
      <div id="liveView" className="camView">
        <button id="webcamButton">Enable Webcam</button>
        <video id="webcam" width="640" height="480" autoPlay></video>
      </div>
    </section>
    <style>{`
      #liveView {
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      #webcam {
        display: block;
        max-width: 100%;
        height: fit-content;
      }

      #webcamButton {
        background-color: var(--light-color);
        color: var(--dark-color);
        border: 2px solid var(--dark-color);
        border-radius: 5px;
        padding: 0.5rem;
      }

      .removed {
        display: none;
      }

      .invisible {
        // opacity: 0.2;
        display: none;
      }

      .camView {
        position: relative;
        float: left;
        width: calc(100% - 20px);
        margin: 10px;
        cursor: pointer;
      }

      .camView > p, .prediction {
        position: absolute;
        padding: 5px;
        background-color: rgba(255, 111, 0, 0.85);
        color: #FFF;
        border: 1px dashed rgba(255, 255, 255, 0.7);
        z-index: 20;
        font-size: 12px;
        max-width: 100%;
      }

      .highlighter {
        background: rgba(0, 255, 0, 0.25);
        border: 1px dashed #fff;
        z-index: 10;
        position: absolute;
        max-width: 100%;
      }`}
    </style>
  </>)
}

export default Detection