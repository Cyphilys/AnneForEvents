import React from "react"
import { Drawer, Button, Icon, Menu } from 'antd';

import Logo from "../components/logo"
import { Link } from "gatsby"

const { SubMenu } = Menu;

export default class LittleMenu extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div style={{ float: "right"}}>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="menu" />
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div style={{ textAlign: "center"}}>
            <Logo/>
          </div>
          <br/>
          <Menu
            theme="light"
            mode="vertical"
            style={{ lineHeight: '64px', fontSize: '16px', textAlign: 'right' }}
          >
            <Menu.Item key="1" >
              <Link to="/" />
              Accueil</Menu.Item>
            <Menu.Item key="2">
              <Link to="/prestations" />
              Prestations artistiques</Menu.Item>
            <Menu.Item key="3">
              <Link to="/" />
              Location animaux</Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                Vos projets
              </span>
              }
            >
              <Menu.ItemGroup>
                <Menu.Item key="4" style={{ fontSize: '16px' }}>Vous êtes un particulier</Menu.Item>
                <Menu.Item key="5" style={{ fontSize: '16px' }}>Vous êtes une collectivité</Menu.Item>
                <Menu.Item key="6" style={{ fontSize: '16px' }}>Vous êtes organisateur de foires et salons</Menu.Item>
                <Menu.Item key="7" style={{ fontSize: '16px' }}>Vous êtes un comité d'entreprise</Menu.Item>
                <Menu.Item key="8" style={{ fontSize: '16px' }}>Vous êtes une entreprise</Menu.Item>
                <Menu.Item key="9" style={{ fontSize: '16px' }}>Vous êtes un centre commercial</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="10">
              <Link to="/about" />
              Qui sommes nous ?</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    );
  }
}
