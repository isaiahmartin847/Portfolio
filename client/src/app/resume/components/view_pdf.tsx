'use client'
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const ShowPdf = () => {
  const [loading, setLoading] = useState(true);
  const fileId = '1JAFZBs03UjwVQrb5k3WmfXP5_WnMxoEP';
  const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  // https://drive.google.com/file/d/1JAFZBs03UjwVQrb5k3WmfXP5_WnMxoEP/view?usp=sharing

  // Handler for when the iframe has loaded
  const handleIframeLoad = () => {
    setLoading(false);
  };


  // if(loading) {
  //   return (
  //     <div className="flex flex-col justify-center items-center mt-10">
  //     {/* Replace this with a spinner or custom loading message */}
  //       <PulseLoader 
  //       color="#3B82F6"
  //       /> 
  //       <p className="font-bold">Loading...</p>
  //     </div>
  //   )
  // }
  return (
    <div>
      {loading && (
        <div className="flex flex-col justify-center items-center mt-10 ">
          {/* Replace this with a spinner or custom loading message */}
          <PulseLoader 
          color="#3B82F6"
          /> 
          <p className="font-bold">Loading...</p>
        </div>
      )}


      <div className="">
        <iframe
          src={viewerUrl}
          width="100%"
          height="1000px"
          style={{ border: 'none' }}
          title="Google Drive File Viewer"
          sandbox="allow-scripts allow-same-origin allow-popups"
          onLoad={handleIframeLoad} // Call when iframe is fully loaded
        />
      </div>
    </div>
  );
};

export default ShowPdf;
