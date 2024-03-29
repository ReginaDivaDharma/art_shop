import React from 'react';
import { Modal, Table } from 'antd';

interface Artwork {
  artwork_id: number;
  artwork_name: string;
  artwork_image: string;
  artwork_description: string;
  artist_name: string;
  artwork_type: string;
  sold_artwork_qty: number;
}

interface GalleryModalProps {
  artwork: Artwork | null;
  visible: boolean;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ artwork, visible, onClose }) => {
  const columns = [
    {
      title: 'Attribute',
      dataIndex: 'attribute',
      key: 'attribute',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const modalData = [
    { attribute: 'Artwork Image', value: artwork ? <img src={`/artwork/${artwork.artwork_image.split('\\').pop()}`} alt={artwork.artwork_name} style={{ maxWidth: '100%', height: 'auto' }} /> : null },
    { attribute: 'Name', value: artwork ? artwork.artwork_name : '' },
    { attribute: 'Description', value: artwork ? artwork.artwork_description : '' },
    { attribute: 'Made By', value: artwork ? artwork.artist_name : '' },
    { attribute: 'Type of Art', value: artwork ? artwork.artwork_type : '' },
    { attribute: 'Quantity Sold', value: artwork ? artwork.sold_artwork_qty : '' },
  ];

  return (
    <Modal
      title={artwork ? artwork.artwork_name : ''}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Table
        dataSource={modalData}
        columns={columns}
        pagination={false}
        showHeader={false}
      />
    </Modal>
  );
};

export default GalleryModal;
