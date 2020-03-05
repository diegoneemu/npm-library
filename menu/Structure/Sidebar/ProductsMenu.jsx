import React, { PureComponent } from 'react';
import logos from '../../../utils/logos';
import './ProductsMenu.scss';

export default class ProductsMenu extends PureComponent {
  constructor(props) {
    super(props);

    const { selected } = props;
    const menu = [];
    let omsMenu = null;
    const apps = global.session.applications || {};
    const allowedAppsTags = global.session.currentStore.apps || [];

    for (const tag in apps) {
      const app = apps[tag];
      if (allowedAppsTags.includes(app.tag) && (app.type === 'product' || app.tag === selected)) {
        const obj = {
          tag: app.tag,
          link: app.url,
          name: getLabel(`default.modulesMenu.${app.tag}`)
        };

        if (app.tag !== 'oms') {
          menu.push(obj);
        } else {
          omsMenu = obj;
        }
      }
    }

    menu.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.state = {
      menu,
      omsMenu
    };
  }

  render() {
    const { menu, omsMenu } = this.state;

    const menuList = menu.map(m => {
      const logo = logos.textualIcon(m.tag);

      return (
        <li key={m.tag}>
          <a className="product-item" href={m.link}>
            <img className="logo" src={logo} alt={m.name} />
          </a>
        </li>
      );
    });

    return (
      <div className="btn-group sidebar-brand">
        <span className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-angle-down" />
          <img className="pull-left" src={logos.textualIcon(omsMenu.tag)} alt={omsMenu.name} />
        </span>
        <ul className="dropdown-menu">
          {menuList}
          <li className="sidebar-header">
            <span>{getLabel('menu.more')}</span>
          </li>
          <li className="sidebar-extra">
            <a href="https://integracao.chaordic.com.br">
              <i className="fa fa-puzzle-piece" />
              <span>{getLabel('menu.integration')}</span>
            </a>
          </li>
          <li className="sidebar-extra">
            <a href="https://central.chaordic.com.br">
              <i className="fa fa-th-large" />
              <span>{getLabel('menu.central')}</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
