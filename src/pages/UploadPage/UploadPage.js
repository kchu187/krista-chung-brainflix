import { useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import UploadForm from "../../components/Upload/UploadForm";

function UploadPage() {
  return (
    <>
      <Header />
      <UploadForm />
    </>
  );
}
export default UploadPage;
