import React, { useState, useEffect } from "react";
import { Button, Modal,  Table } from "antd"; // Import komponen Table dari Ant Design
import { natalData, NatalEvent } from "../interfaces/interfaces.tsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface ModalProps {
  onCancel: () => void; // Declare the prop type for onCancel function
}

const Tablenatal: React.FC<ModalProps> = ({ onCancel  }) => {
  const [dataSource, setDataSource] = useState(natalData);
  const [selectedRow, setSelectedRow] = useState<NatalEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center" as const,
      hidden: true,
    },
    {
      title: "Tanggal", 
      dataIndex: "tanggal",
      key: "tanggal",
      align: "center" as const,
    },
    {
      title: "Tempat",
      dataIndex: "tempat",
      key: "tempat",
      align: "center" as const,
      render: (text: string) => text || "-",
    },
    {
      title: "Waktu",
      dataIndex: "waktu",
      key: "waktu",
      align: "center" as const,
      render: (text: string) => text || "-",
    },
    {
      title: "Yang Melayani",
      dataIndex: "yangMelayani",
      key: "yangMelayani",
      align: "center" as const,
      render: (text: string) => text || "-",
    },
  ];

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Menambahkan judul
    doc.setFontSize(18);
    doc.text("DAFTAR NATAL GSRI PERSATUAN DAN KESATUAN 2024", 14, 10);

    // Menambahkan tabel
    const tableColumn = ["Tanggal", "Tempat", "Waktu", "Yang Melayani"];
    const tableRows = dataSource.map((row) => [
      row.tanggal,
      row.tempat,
      row.waktu,
      row.yangMelayani,
    ]);

    // Menggambar tabel di PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20, // Posisi Y dari tabel
      theme: 'grid', // Tema tabel
    });

    // Menyimpan dan mengunduh PDF
    doc.save("daftar_natal_2024.pdf");
  };

  useEffect(() => {
    if (dataSource.length > 0) {
      setSelectedRow(dataSource[0]);
    }
  }, [dataSource]);

  return (
    <>
      <Modal
        title={<span style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px', display: 'flex', justifyContent: 'center' }}>DAFTAR NATAL GSRI PERSATUAN DAN KESATUAN 2024</span>} // Styling title
        open={isModalOpen}
        width='full'
        height={'full'}
        closable={false}
        footer={[
          <Button type="primary" key="download" onClick={handleDownloadPDF}>
            Unduh
          </Button>,
          <Button key="close" onClick={onCancel}>Tutup</Button>
        ]}
      >
        <Table
          dataSource={natalData}
          columns={columns}
          rowKey="tanggal"
          // style={{ width: "100%", height: "400px" }}
          onRow={(record) => {
            return {
              onClick: () => handleRowClick(record),
            };
          }}
          rowClassName={(record) =>
            record.id === selectedRow?.id ? "selected" : ""
          }
        />
      </Modal>
    </>
  );
};

export default Tablenatal;
