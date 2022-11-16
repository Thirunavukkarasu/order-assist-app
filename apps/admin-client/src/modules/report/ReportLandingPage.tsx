import { FaCartPlus, FaShoppingBag, FaLuggageCart, FaUpload, FaDownload, FaRunning, FaChartPie } from "react-icons/fa";
import PageTitle from "ui/PageTitle";
import CardLayout from "ui/CardLayout";

function ReportLandingPage() {
  const cards = [{
    title: 'Report Templates',
    icon: <FaChartPie size={32} />,
    href: 'report-templates'
  }, {
    title: 'Upload Templates',
    icon: <FaUpload size={32} />,
    href: 'upload-templates'
  }, {
    title: 'Job Instances',
    icon: <FaRunning size={32} />,
    href: 'job-instances'
  }];
  return (
    <div>
      <PageTitle title="Manage Reports" />
      <CardLayout cards={cards} />
    </div>
  );
}

export default ReportLandingPage;
