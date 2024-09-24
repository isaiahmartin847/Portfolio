
// import resume1 from "./public/photos/resume1.png"
import Image from "next/image"

const ShowPdf = () => {
  const fileId = '1V7reywnGql5HJvwDCvTFp1LWkqbYdPYe';
  const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <iframe
      src={viewerUrl}
      width="100%"
      height="1000px"
      style={{ border: 'none' }}
      title="Google Drive File Viewer"
      sandbox="allow-scripts allow-same-origin allow-popups"
      loading="lazy"
    />
  );
};






export default ShowPdf