import { put } from 'axios';
import React, { PureComponent } from 'react';
import config from '../../../config/config';
import { removeItem } from '../../../utils/localStorage';
import { getNewSearchUrl } from '../../../utils/url';
import DropDown from '../../Common/Dropdown';
import './index.scss';

export default class StoreMenu extends PureComponent {
  state = {
    stores: global.session.stores,
    currentStore: global.session.currentStore
  };

  onChange = store => {
    const url = `/api/user/current-store/${store.apiKey}`;

    put(url).then(() => {
      removeItem(config.localStorage.currentLocation);
      window.location.href = getNewSearchUrl('clientChanged', true);
    });
  };

  render() {
    const { stores, currentStore } = this.state;

    return (
      <DropDown
        data={stores}
        value={currentStore.apiKey}
        valueField="apiKey"
        textField="name"
        onChange={this.onChange}
        placeholder={'Selecione um cliente'}
        selectorClass="store"
      />
    );
  }
}
