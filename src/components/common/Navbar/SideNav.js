import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Switch } from 'antd';
import { AppstoreOutlined, DatabaseOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 256,
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '35px',
  },
  category: {
    height: '20px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '0px',
    justifyContent: 'space-between',
    fontWeight: 'normal'
  },
  jobType: {
    height: '30px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '0px',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    paddingRight: '0px'
  },
  menuTitle: {
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: '10px'
  }
}

export default function SideNav({ dataCategory, dataType }) {

  const [category, setCategory] = useState(dataCategory);
  const [jobType, setJobType] = useState(dataType);
  const [showRemote, setShowRemote] = useState(true)
  const [showFullTime, setShowFullTime] = useState(true)
  const [showContract, setShowContract] = useState(true)
  const [showPartTime, setShowPartTime] = useState(true)

  const handleClick = e => {
    console.log('click ', e);
  };

  const displayCategories = () => {
    if (category.length > 0) return (
      category.map((category) => (
        <Menu.Item style={styles.category} key={category.key}> <span>{category.name} </span>  <span>({category.count})</span></Menu.Item>
      ))
    )
  }

  const setJobTypeSort = (key) => {
    if (key == "0") setShowFullTime(!showFullTime)
    if (key == "1") setShowPartTime(!showPartTime)
    if (key == "2") setShowContract(!showContract)
    if (key == "3") setShowRemote(!showRemote)

  }
  const displayType = () => {
    if (category.length > 0) return (
      jobType.map((category) => (
        <Menu.Item style={styles.jobType} key={category.key}> <span>{category.name} </span>  <span>({category.count})</span> <span style={{ paddingLeft: "10px", paddingRight: "10px", float: "right" }}><Switch defaultChecked onChange={() => setJobTypeSort(category.key)} /></span> </Menu.Item>
      ))
    )
  }

  return (
    <Menu
      onClick={handleClick}
      style={styles.container}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1', 'sub2']}
      mode="inline"

    >
      <LogoContainer >
        <img style={styles.image} src="https://joeschmoe.io/api/v1/random" />
      </LogoContainer>
      <SubMenu key="sub1" title="Job Category" icon={<DatabaseOutlined />} style={styles.menuTitle}>
        {displayCategories()}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} style={styles.menuTitle} title="Job Type">
        {displayType()}
      </SubMenu>
    </Menu>
  );
}

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 150px;
  
`