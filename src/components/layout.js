/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

//import Header from "./header"
//import "./layout.css"

import { Layout, Menu } from "antd"
import Logo from "../components/logo"

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu;

const Glayout = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          image
        }
      }
    }
  `)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#FFF' }}>
        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4">
          <a href="/">
            <Logo/>
          </a>
        </div>
        <div className="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-19 ant-col-lg-19 ant-col-xl-19 ant-col-xxl-20">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[page]}
            style={{ lineHeight: '64px', fontSize: '16px', textAlign: 'right' }}
          >
            <Menu.Item key="1" >
              <Link to="/" />
              Accueil</Menu.Item>
            <Menu.Item key="2">
              <Link to="/page-2" />
              Prestations artistiques</Menu.Item>
            <Menu.Item key="3">
              <Link to="/" />
              Location animaux</Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                Notre expertise - Vos projets
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
        </div>
      </Header>
      <Content style={{ marginTop: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>AnneForEvents ©2019 Created by Mickaël Kerkhove</Footer>
    </Layout>
  )
}

Glayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Glayout
