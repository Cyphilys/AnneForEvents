/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Layout, Menu, Icon, Typography, Row, Col } from "antd"

import "../css/global.css"

import Logo from "../components/logo"
import LittleMenu from "./menu-mobile"

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

const { Text } = Typography;

  return (
    <Layout style={{ minHeight: '100vh', background: "rgb(255, 255, 255)" }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#FFF' }}>
        <Row type="flex" justify="space-between">
          <Col>
            <a>
              <Link to="/">
                <Logo/></Link>
            </a>
          </Col>
          <Col className="highscreen">
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
                <Link to="/prestations" />
                Prestations artistiques</Menu.Item>
              <Menu.Item key="3">
                <Link to="/Locations" />
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
          </Col>
          <Col className="mobile">
            <LittleMenu/>
          </Col>
        </Row>
      </Header>
      <Content style={{ marginTop: '80px' }}>
        <div style={{ background: '#fff', minHeight: 280 }}>{children}</div>
      </Content>
      <Footer style={{ background: '#313131'}}>
        <Row>
          <Col span={8}>
            <div style={{ textAlign: "center"}}>
              <div>
                <Text strong type={"danger"}>Contact</Text>
              </div>
              <br/>
              <div>
                <Text type={"danger"}>Anne Dérozier</Text><br/>
                <Text type={"danger"}>Tel: 06.24.78.82.03</Text><br/>
                <Link to="/about">Contactez-moi</Link>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ textAlign: "center"}}>
              <div>
                <Text strong type={"danger"}>Liens</Text>
              </div>
              <br/>
              <div>
                <Text type={"danger"}><Link to="/">Accueil</Link></Text><br/>
                <Text type={"danger"}><Link to="/prestations">Prestations artistiques</Link></Text><br/>
                <Text type={"danger"}><Link to="/Locations">Location animaux</Link></Text><br/>
                <Text type={"danger"}><Link to="/about">Qui sommes-nous ?</Link></Text><br/>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div style={{ textAlign: "center"}}>
              <div>
                <Text strong type={"danger"}>Réseaux sociaux</Text>
              </div>
              <br/>
              <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Icon type="facebook" theme="filled" style={{ fontSize: '35px', color: '#009ACD', marginRight: '0.5rem'}}/></a>
                <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noopener noreferrer"><Icon type="instagram" style={{ fontSize: '35px', color: '#009ACD', marginRight: '0.5rem'}}/></a>
                <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer"><Icon type="twitter" style={{ fontSize: '35px', color: '#009ACD'}}/></a>
              </div>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

Glayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Glayout
