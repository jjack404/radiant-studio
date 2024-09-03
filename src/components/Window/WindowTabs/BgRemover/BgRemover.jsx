import React, { useState } from 'react';
import styles from './BgRemover.module.css';
import DropZone from '../DropZone/DropZone';
import { removeBackground, addYellowBackground } from './bgRemoverScript';

const BgRemover = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = async (files) => {
    if (files && files[0]) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setIsProcessing(true);
      try {
        const removedBgImage = await removeBackground(files[0]);
        const finalImage = await addYellowBackground(removedBgImage);
        setProcessedImage(finalImage);
      } catch (error) {
        console.error("Error processing image:", error);
        // Handle error (e.g., show error message to user)
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'bg-removed.png';
      link.click();
    }
  };

  return (
    <main className={styles.container}>
      <header className={styles.headerWrap}>
        <div className={styles.header}>
          <svg
            className={styles.headerIcon} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6585 12.8253V14.3453H25.1385V15.8753H23.6085V18.9253H25.1385V21.9653H22.0885V23.4953H25.1385V25.0153H29.7085V26.5353H31.2285V23.4953H32.7585V18.9253H31.2285V15.8753H29.7085V12.8253H26.6585Z" fill="#0f0e0c" />
            <path d="M29.7085 26.5352H28.1785V28.0652H29.7085V26.5352Z" fill="#0f0e0c" />
            <path d="M28.1785 28.0652H26.6585V29.5852H28.1785V28.0652Z" fill="#0f0e0c" />
            <path d="M26.6585 29.5853H22.0885V31.1153H26.6585V29.5853Z" fill="#0f0e0c" />
            <path d="M25.1385 5.20524V11.3052H26.6585V2.15524H25.1385V3.68524H23.6085V5.20524H25.1385Z" fill="#0f0e0c" />
            <path d="M19.0385 11.3052V8.25525H17.5185V11.3052H15.9885V12.8252H25.1385V11.3052H19.0385Z" fill="#0f0e0c" />
            <path d="M23.6085 2.15524H22.0885V3.68524H23.6085V2.15524Z" fill="#0f0e0c" />
            <path d="M22.0885 31.1153H20.5585V32.6353H22.0885V31.1153Z" fill="#0f0e0c" />
            <path d="M22.0885 20.4453H20.5585V21.9653H22.0885V20.4453Z" fill="#0f0e0c" />
            <path d="M20.5585 29.5853H19.0385V31.1153H20.5585V29.5853Z" fill="#0f0e0c" />
            <path d="M20.5585 21.9652H19.0385V23.4952H20.5585V21.9652Z" fill="#0f0e0c" />
            <path d="M19.0385 28.0652H17.5185V29.5852H19.0385V28.0652Z" fill="#0f0e0c" />
            <path d="M19.0385 23.4952H17.5185V25.0152H19.0385V23.4952Z" fill="#0f0e0c" />
            <path d="M17.5185 25.0153H15.9885V28.0653H17.5185V25.0153Z" fill="#0f0e0c" />
            <path d="M17.5185 6.72525H15.9885V8.25525H17.5185V6.72525Z" fill="#0f0e0c" />
            <path d="M5.32855 11.3053H8.36855V12.8253H11.4185V11.3053H12.9485V9.77525H14.4685V6.72525H15.9885V3.68525H14.4685V2.15525H22.0885V0.635254H8.36855V2.15525H6.84855V3.68525H5.32855V6.72525H3.79855V9.77525H5.32855V11.3053Z" fill="#0f0e0c" />
            <path d="M8.36855 25.0152H6.84855V26.5352H5.32855V28.0652H3.79855V29.5852H5.32855V31.1152H6.84855V32.6352H14.4685V25.0152H9.89855V21.9652H8.36855V25.0152Z" fill="#0f0e0c" />
            <path d="M11.4185 20.4452H9.89854V21.9652H11.4185V23.4952H12.9485V15.8752H11.4185V20.4452Z" fill="#0f0e0c" />
            <path d="M5.32855 15.8752H11.4185V14.3452H2.27855V15.8752H3.79855V17.3952H5.32855V15.8752Z" fill="#0f0e0c" />
            <path d="M3.79855 25.0153H2.27855V28.0653H3.79855V25.0153Z" fill="#0f0e0c" />
            <path d="M3.79855 17.3953H2.27855V20.4453H3.79855V17.3953Z" fill="#0f0e0c" />
            <path d="M2.27854 20.4453H0.758545V25.0153H2.27854V20.4453Z" fill="#0f0e0c" />
          </svg>

          <span>Background Remover</span>
          <svg
            className={styles.headerIcon} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6585 12.8253V14.3453H25.1385V15.8753H23.6085V18.9253H25.1385V21.9653H22.0885V23.4953H25.1385V25.0153H29.7085V26.5353H31.2285V23.4953H32.7585V18.9253H31.2285V15.8753H29.7085V12.8253H26.6585Z" fill="#0f0e0c" />
            <path d="M29.7085 26.5352H28.1785V28.0652H29.7085V26.5352Z" fill="#0f0e0c" />
            <path d="M28.1785 28.0652H26.6585V29.5852H28.1785V28.0652Z" fill="#0f0e0c" />
            <path d="M26.6585 29.5853H22.0885V31.1153H26.6585V29.5853Z" fill="#0f0e0c" />
            <path d="M25.1385 5.20524V11.3052H26.6585V2.15524H25.1385V3.68524H23.6085V5.20524H25.1385Z" fill="#0f0e0c" />
            <path d="M19.0385 11.3052V8.25525H17.5185V11.3052H15.9885V12.8252H25.1385V11.3052H19.0385Z" fill="#0f0e0c" />
            <path d="M23.6085 2.15524H22.0885V3.68524H23.6085V2.15524Z" fill="#0f0e0c" />
            <path d="M22.0885 31.1153H20.5585V32.6353H22.0885V31.1153Z" fill="#0f0e0c" />
            <path d="M22.0885 20.4453H20.5585V21.9653H22.0885V20.4453Z" fill="#0f0e0c" />
            <path d="M20.5585 29.5853H19.0385V31.1153H20.5585V29.5853Z" fill="#0f0e0c" />
            <path d="M20.5585 21.9652H19.0385V23.4952H20.5585V21.9652Z" fill="#0f0e0c" />
            <path d="M19.0385 28.0652H17.5185V29.5852H19.0385V28.0652Z" fill="#0f0e0c" />
            <path d="M19.0385 23.4952H17.5185V25.0152H19.0385V23.4952Z" fill="#0f0e0c" />
            <path d="M17.5185 25.0153H15.9885V28.0653H17.5185V25.0153Z" fill="#0f0e0c" />
            <path d="M17.5185 6.72525H15.9885V8.25525H17.5185V6.72525Z" fill="#0f0e0c" />
            <path d="M5.32855 11.3053H8.36855V12.8253H11.4185V11.3053H12.9485V9.77525H14.4685V6.72525H15.9885V3.68525H14.4685V2.15525H22.0885V0.635254H8.36855V2.15525H6.84855V3.68525H5.32855V6.72525H3.79855V9.77525H5.32855V11.3053Z" fill="#0f0e0c" />
            <path d="M8.36855 25.0152H6.84855V26.5352H5.32855V28.0652H3.79855V29.5852H5.32855V31.1152H6.84855V32.6352H14.4685V25.0152H9.89855V21.9652H8.36855V25.0152Z" fill="#0f0e0c" />
            <path d="M11.4185 20.4452H9.89854V21.9652H11.4185V23.4952H12.9485V15.8752H11.4185V20.4452Z" fill="#0f0e0c" />
            <path d="M5.32855 15.8752H11.4185V14.3452H2.27855V15.8752H3.79855V17.3952H5.32855V15.8752Z" fill="#0f0e0c" />
            <path d="M3.79855 25.0153H2.27855V28.0653H3.79855V25.0153Z" fill="#0f0e0c" />
            <path d="M3.79855 17.3953H2.27855V20.4453H3.79855V17.3953Z" fill="#0f0e0c" />
            <path d="M2.27854 20.4453H0.758545V25.0153H2.27854V20.4453Z" fill="#0f0e0c" />
          </svg>
        </div>
      </header>
      <section className={styles.mainContent}>
        {!selectedImage && <DropZone onFileSelect={handleFileSelect} />}
        {isProcessing && <div className={styles.loader}><span>Processing...</span></div>}
        {processedImage && (
          <div className={styles.resultContainer}>
            <img src={processedImage} alt="Processed" className={styles.processedImage} />
            <div className={styles.removerButtons}><button className={styles.backButton}>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1604_13526)">
                  <path d="M30.5652 8.25525H29.0452V25.0152H30.5652V8.25525Z" fill="#0f0e0c" />
                  <path d="M29.0452 25.0153H27.5152V26.5353H29.0452V25.0153Z" fill="#0f0e0c" />
                  <path d="M29.0452 6.72528H27.5152V8.25528H29.0452V6.72528Z" fill="#0f0e0c" />
                  <path d="M27.5152 5.20526H21.4252V6.72526H27.5152V5.20526Z" fill="#0f0e0c" />
                  <path d="M21.4252 26.5353V21.9653H19.8952V23.4953H18.3752V25.0153H16.8552V26.5353H15.3252V28.0653H16.8552V29.5853H18.3752V31.1153H19.8952V32.6353H21.4252V28.0653H27.5152V26.5353H21.4252Z" fill="#0f0e0c" />
                  <path d="M15.3252 8.25525H16.8552V6.72525H18.3752V5.20525H16.8552V3.68525H15.3252V2.15525H13.8052V0.635254H12.2852V5.20525H6.18521V6.72525H12.2852V11.3053H13.8052V9.77525H15.3252V8.25525Z" fill="#0f0e0c" />
                  <path d="M12.2852 26.5353H6.18521V28.0653H12.2852V26.5353Z" fill="#0f0e0c" />
                  <path d="M6.18522 25.0153H4.66522V26.5353H6.18522V25.0153Z" fill="#0f0e0c" />
                  <path d="M6.18522 6.72528H4.66522V8.25528H6.18522V6.72528Z" fill="#0f0e0c" />
                  <path d="M4.66522 8.25525H3.13522V25.0152H4.66522V8.25525Z" fill="#0f0e0c" />
                </g>
                <defs>
                  <clipPath id="clip0_1604_13526">
                    <rect width="32" height="32" fill="white" transform="translate(0.85022 0.635254)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
              <div className={styles.removerShare}><span><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.945 12.2048V13.7248H30.475V10.6748H25.905V7.62477H24.375V12.2048H28.945Z" fill="#0f0e0c" />
                <path d="M28.9448 13.7248H27.4248V15.2448H28.9448V13.7248Z" fill="#0f0e0c" />
                <path d="M27.4248 15.2448H25.9048V16.7748H27.4248V15.2448Z" fill="#0f0e0c" />
                <path d="M25.905 16.7748H24.375V22.8648H25.905V16.7748Z" fill="#0f0e0c" />
                <path d="M24.375 22.8648H22.855V25.9148H24.375V22.8648Z" fill="#0f0e0c" />
                <path d="M24.375 6.10478H22.855V7.62478H24.375V6.10478Z" fill="#0f0e0c" />
                <path d="M22.855 25.9148H21.335V27.4348H22.855V25.9148Z" fill="#0f0e0c" />
                <path d="M22.855 4.58477H21.335V6.10477H22.855V4.58477Z" fill="#0f0e0c" />
                <path d="M21.3349 27.4348H19.8049V28.9648H21.3349V27.4348Z" fill="#0f0e0c" />
                <path d="M21.3349 9.15478H18.2849V12.2048H21.3349V9.15478Z" fill="#0f0e0c" />
                <path d="M4.56492 28.9648V27.4348H3.04492V30.4848H19.8049V28.9648H4.56492Z" fill="#0f0e0c" />
                <path d="M21.3349 3.05478H15.2349V4.58478H21.3349V3.05478Z" fill="#0f0e0c" />
                <path d="M15.2348 4.58477H13.7148V6.10477H15.2348V4.58477Z" fill="#0f0e0c" />
                <path d="M13.7148 6.10478H12.1848V7.62478H13.7148V6.10478Z" fill="#0f0e0c" />
                <path d="M12.185 12.2048V7.62477H10.665V10.6748H9.14502V12.2048H12.185Z" fill="#0f0e0c" />
                <path d="M9.14499 22.8648H10.665V21.3448H7.61499V24.3948H9.14499V22.8648Z" fill="#0f0e0c" />
                <path d="M9.14499 9.15478H7.61499V10.6748H9.14499V9.15478Z" fill="#0f0e0c" />
                <path d="M7.61497 24.3948H6.09497V25.9148H7.61497V24.3948Z" fill="#0f0e0c" />
                <path d="M7.61497 19.8148H6.09497V21.3448H7.61497V19.8148Z" fill="#0f0e0c" />
                <path d="M7.61497 7.62477H6.09497V9.15478H7.61497V7.62477Z" fill="#0f0e0c" />
                <path d="M6.09494 25.9148H4.56494V27.4348H6.09494V25.9148Z" fill="#0f0e0c" />
                <path d="M6.09494 18.2948H4.56494V19.8148H6.09494V18.2948Z" fill="#0f0e0c" />
                <path d="M6.09494 6.10478H4.56494V7.62478H6.09494V6.10478Z" fill="#0f0e0c" />
                <path d="M4.56492 16.7748H3.04492V18.2948H4.56492V16.7748Z" fill="#0f0e0c" />
                <path d="M3.0449 6.10477H4.5649V4.58477H1.5249V16.7748H3.0449V6.10477Z" fill="#0f0e0c" />
              </svg>
              </span></div>
              <button onClick={handleDownload} className={styles.saveButton}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1604_21253)">
                  <path d="M28.955 23.6348H3.05502V8.40479H1.52502V26.6848H3.05502V28.2148H12.195V29.7348H13.715V28.2148H18.285V29.7348H19.815V28.2148H28.955V26.6848H30.475V8.40479H28.955V23.6348Z" fill="#0f0e0c" />
                  <path d="M28.955 6.87479H21.335V8.40479H28.955V6.87479Z" fill="#0f0e0c" />
                  <path d="M12.195 31.2548V29.7348H10.675V32.7848H21.335V29.7348H19.815V31.2548H12.195Z" fill="#0f0e0c" />
                  <path d="M18.285 3.83479H13.715V5.35479H18.285V3.83479Z" fill="#0f0e0c" />
                  <path d="M18.285 0.78479H13.715V2.30479H18.285V0.78479Z" fill="#0f0e0c" />
                  <path d="M16.765 20.5948V19.0648H18.285V17.5448H19.815V16.0248H21.335V14.4948H18.285V6.87479H13.715V14.4948H10.675V16.0248H12.195V17.5448H13.715V19.0648H15.245V20.5948H16.765Z" fill="#0f0e0c" />
                  <path d="M10.6751 6.87479H3.05505V8.40479H10.6751V6.87479Z" fill="#0f0e0c" />
                </g>
                <defs>
                  <clipPath id="clip0_1604_21253">
                    <rect width="32" height="32" fill="white" transform="translate(0 0.78479)" />
                  </clipPath>
                </defs>
              </svg>
              </button>
            </div>
          </div>
        )}
        <div className={styles.removerInfo}><span>Radify your favorite PFP!</span></div>
      </section>
    </main>
  );
};

export default BgRemover;