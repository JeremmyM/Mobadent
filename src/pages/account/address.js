import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './address.module.css';

import AccountLayout from '../../components/AccountLayout';
import AddressCard from '../../components/AddressCard';
import AddressForm from '../../components/AddressForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import Icon from '../../components/Icons/Icon';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import { isAuth } from '../../helpers/general';
import Button from '../../components/Button';

const AddressPage = (props) => {
  const address1 = {
    name: 'Clínica Dental Quito',
    address: 'Av. Amazonas N34-76 y Mariana de Jesús',
    state: 'Pichincha',
    postal: '170521',
    country: 'Ecuador',
    company: 'Mobadent',
  };

  const address2 = {
    name: 'Odontología Integral Cuenca',
    address: 'Calle Larga 10-45 y Padre Aguirre',
    state: 'Azuay',
    postal: '010203',
    country: 'Ecuador',
    company: 'Mobadent',
  };

  const [addressList] = useState([address1, address2]);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  if (isAuth() === false) {
    navigate('/login');
  }

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Inicio' },
            { link: '/account', label: 'Cuenta' },
            { link: '/account/address', label: 'Direcciones' },
          ]}
        />
        <h1>Direcciones guardadas</h1>

        {!showForm && (
          <div className={styles.addressListContainer}>
            {addressList.map((address, index) => (
              <AddressCard
                key={index}
                showForm={() => setShowForm(true)}
                showDeleteForm={() => setShowDelete(true)}
                {...address}
              />
            ))}
            <div
              className={styles.addCard}
              role={'presentation'}
              onClick={() => setShowForm(true)}
            >
              <Icon symbol={'plus'} />
              <span>Nueva dirección</span>
            </div>
          </div>
        )}

        {showForm && <AddressForm closeForm={() => setShowForm(false)} />}
      </AccountLayout>

      <Modal visible={showDelete} close={() => setShowDelete(false)}>
        <div className={styles.confirmDeleteContainer}>
          <h4>¿Eliminar dirección?</h4>
          <p>
            ¿Estás seguro de que deseas eliminar esta dirección? Esta acción no se puede deshacer.
          </p>
          <div className={styles.actionContainer}>
            <Button onClick={() => setShowDelete(false)} level={'primary'}>
              Eliminar
            </Button>
            <Button onClick={() => setShowDelete(false)} level={'secondary'}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default AddressPage;
