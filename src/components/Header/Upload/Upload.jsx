import React, {
  Fragment,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import "./upload.scss";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
// import { useDropzone } from "react-dropzone";
// import Dropzone from "react-dropzone";

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// };

// const activeStyle = {
//   borderColor: "#2196f3",
// };

// const acceptStyle = {
//   borderColor: "#00e676",
// };

// const rejectStyle = {
//   borderColor: "#ff1744",
// };

function Upload(props) {
  //   const [imgSrc, setimgSrc] = useState([]);
  //   const [isUpload, setIsUpload] = useState(false);

  //   const onDrop = useCallback((acceptedFiles) => {
  //     setimgSrc(acceptedFiles);
  //     console.log(imgSrc);
  //     acceptedFiles.forEach((file) => {
  //       console.log(file);

  //       const reader = new FileReader();

  //       reader.onabort = () => console.log("file reading was aborted");
  //       reader.onerror = () => console.log("file reading has failed");
  //       reader.onload = () => {
  //         // Do whatever you want with the file contents
  //         const binaryStr = reader.result;
  //         console.log(binaryStr);
  //       };
  //       reader.readAsArrayBuffer(file);
  //     });
  //   }, []);
  //   const {
  //     getRootProps,
  //     getInputProps,
  //     isDragActive,
  //     isDragReject,
  //     isDragAccept,
  //   } = useDropzone({ onDrop });
  //   const style = useMemo(
  //     () => ({
  //       ...baseStyle,
  //       ...(isDragActive ? activeStyle : {}),
  //       ...(isDragAccept ? acceptStyle : {}),
  //       ...(isDragReject ? rejectStyle : {}),
  //     }),
  //     [isDragActive, isDragReject, isDragAccept]
  //   );
  // const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    console.log(files.map((f) => f.meta));
  };
  return (
    <Fragment>
      {/* <div {...getRootProps({ style })} className="mt-3 container">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div> */}
      <div className="mt-3 container">
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*"
          inputContent={(files, extra) =>
            extra.reject ? "Image, audio and video files only" : "Drag Files"
          }
          styles={{
            dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
            inputLabel: (files, extra) =>
              extra.reject ? { color: "red" } : {},
          }}
        />
      </div>
    </Fragment>
  );
}
export default Upload;
