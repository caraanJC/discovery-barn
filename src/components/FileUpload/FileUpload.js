import { FileUploadLogic } from './FileUploadLogic';

const FileUpload = () => {
  const { handleInputchange, handleSubmit, fileURL } = FileUploadLogic();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleInputchange} />
        <input type='submit' value='Submit' />
      </form>
      {fileURL && <img src={fileURL} alt={fileURL} />}
    </>
  );
};

export default FileUpload;
